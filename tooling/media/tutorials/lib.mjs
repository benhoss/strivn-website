// Feature-tutorial recorder: drives the REAL strivn app with real clicks,
// a visible cursor, spotlight highlights and step callouts, and logs a
// subtitle cue per step so the final cut is perfectly in sync.
//
// Capture uses the Chrome DevTools screencast (lossless-ish JPEG frames at
// device pixels) instead of Playwright's recordVideo, whose low-bitrate VP8
// smears small UI text.
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync, rmSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { BASE } from '../config.mjs';

export { chromium, BASE };

// ── Language ────────────────────────────────────────────────────────────
// TUTORIAL_LANG=fr records the French cut. Scripts are written once, in
// English: `t()` maps UI labels (selectors), callouts, captions and metadata
// through i18n/<lang>.json. A selector label missing from the dictionary
// passes through unchanged (player names, numbers); a caption, callout or
// card text that is missing is collected in `untranslated` and fails the build.
export const LANG = process.env.TUTORIAL_LANG || 'en';
export const BROWSER_LOCALE = { en: 'en-GB', fr: 'fr-FR' }[LANG] || LANG;
const DICT = LANG === 'en' ? {} : JSON.parse(readFileSync(new URL(`./i18n/${LANG}.json`, import.meta.url), 'utf8'));
export const untranslated = new Set();
export function t(s) {
  if (LANG === 'en' || s == null) return s;
  if (s instanceof RegExp) return DICT[s.source] !== undefined ? new RegExp(DICT[s.source], s.flags) : s;
  return DICT[s] !== undefined ? DICT[s] : s;
}
/** An XPath string literal for any text: French labels carry apostrophes. */
export function xq(s) {
  if (!s.includes("'")) return `'${s}'`;
  if (!s.includes('"')) return `"${s}"`;
  return `concat(${s.split("'").map((p) => `'${p}'`).join(`, "'", `)})`;
}
/** A label whose translation depends on where it sits (`ctx:key` entry first). */
export function tk(ctx, s) {
  if (LANG === 'en') return s;
  return DICT[`${ctx}:${s}`] !== undefined ? DICT[`${ctx}:${s}`] : t(s);
}
/** Strict variant for text the viewer reads: a missing entry is a build error. */
export function tc(s) {
  if (LANG === 'en' || s == null || s === '') return s;
  if (DICT[s] === undefined) { untranslated.add(s); return s; }
  return DICT[s];
}

export const DESKTOP = { viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1.2 }; // → 1920×1080 px
export const MOBILE = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2.5, isMobile: true, hasTouch: true }; // → 975×2110 px

export const sh = (cmd) => execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 1 << 26 }).toString();

// Reading time for a subtitle: ~2.6 words/s plus a beat, never under 2.6 s.
export const readTime = (text) => Math.max(2.6, text.split(/\s+/).length / 2.6 + 0.9) * 1000;

/** In-page overlays: arrow cursor, click ripple, spotlight box + callout label. */
function overlayApi(page) {
  const ensure = () => page.evaluate(() => {
    if (document.getElementById('__tut_cursor')) return;
    const st = document.createElement('style');
    st.textContent = `
      #__tut_cursor{position:fixed;left:0;top:0;width:26px;height:26px;z-index:2147483647;pointer-events:none;
        transition:transform .7s cubic-bezier(.22,1,.36,1);transform:translate(-60px,-60px);filter:drop-shadow(0 2px 4px rgba(0,0,0,.55))}
      .__tut_ripple{position:fixed;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;border:3px solid #2D7FF9;
        z-index:2147483646;pointer-events:none;animation:__tutr .6s ease-out forwards}
      @keyframes __tutr{from{transform:scale(.3);opacity:1}to{transform:scale(1.5);opacity:0}}
      #__tut_hl{position:fixed;left:0;top:0;width:0;height:0;border:3px solid #2D7FF9;border-radius:12px;z-index:2147483645;
        pointer-events:none;opacity:0;box-shadow:0 0 0 9999px rgba(3,8,20,.42),0 0 24px rgba(45,127,249,.55);
        transition:all .5s cubic-bezier(.22,1,.36,1)}
      #__tut_label{position:fixed;z-index:2147483646;pointer-events:none;opacity:0;transition:opacity .35s,transform .5s cubic-bezier(.22,1,.36,1);
        background:#2D7FF9;color:#fff;font:600 15px/1.2 Archivo,system-ui,sans-serif;padding:7px 12px;border-radius:8px;white-space:nowrap;
        box-shadow:0 6px 18px rgba(0,0,0,.4)}
      #__tut_label b{display:inline-block;background:#fff;color:#0F6DF8;border-radius:50%;width:20px;height:20px;line-height:20px;
        text-align:center;margin-right:8px;font-size:12px}`;
    document.head.appendChild(st);
    const c = document.createElement('div'); c.id = '__tut_cursor';
    if (window.innerWidth < 600) c.innerHTML = '<div style="width:34px;height:34px;margin:-4px 0 0 -4px;border-radius:50%;background:rgba(255,255,255,.35);border:2px solid #fff"></div>'; else c.innerHTML = '<svg viewBox="0 0 24 24" width="26" height="26"><path d="M4 2l15 9.5-6.6 1.3 3.9 7.4-3 1.6-3.9-7.5L4 19z" fill="#fff" stroke="#0A1630" stroke-width="1.4" stroke-linejoin="round"/></svg>';
    const h = document.createElement('div'); h.id = '__tut_hl';
    const l = document.createElement('div'); l.id = '__tut_label';
    document.body.append(h, l, c);
    const pos = window.__tutPos; if (pos) { c.style.transition = 'none'; c.style.transform = `translate(${pos[0]}px,${pos[1]}px)`; }
  });
  return { ensure };
}

/** Helper bag handed to each step. All coordinates are CSS pixels. */
export function helpers(page) {
  const { ensure } = overlayApi(page);
  let pos = [800, 450];
  const moveTo = async (x, y, ms = 750) => {
    await ensure();
    pos = [x, y];
    await page.evaluate(([x, y]) => { window.__tutPos = [x, y]; const c = document.getElementById('__tut_cursor'); c.style.transition = 'transform .7s cubic-bezier(.22,1,.36,1)'; c.style.transform = `translate(${x}px,${y}px)`; }, [x, y]);
    await page.mouse.move(x, y, { steps: 8 }).catch(() => {});
    await page.waitForTimeout(ms);
  };
  const box = async (loc) => { await loc.scrollIntoViewIfNeeded({ timeout: 4000 }).catch(() => {}); return loc.boundingBox({ timeout: 4000 }).catch(() => null); };
  const moveToEl = async (loc) => { const b = await box(loc); if (b) await moveTo(b.x + b.width / 2, b.y + b.height / 2); return b; };
  const ripple = () => page.evaluate(([x, y]) => { const r = document.createElement('div'); r.className = '__tut_ripple'; r.style.left = x + 'px'; r.style.top = y + 'px'; document.body.appendChild(r); setTimeout(() => r.remove(), 700); }, pos);
  const spot = async (loc, label, n, pad = 8) => {
    label = tc(label);
    const b = await box(loc); if (!b) return null; await ensure();
    await page.evaluate(([b, pad, label, n]) => {
      const h = document.getElementById('__tut_hl');
      Object.assign(h.style, { left: (b.x - pad) + 'px', top: (b.y - pad) + 'px', width: (b.width + 2 * pad) + 'px', height: (b.height + 2 * pad) + 'px', opacity: 1 });
      const l = document.getElementById('__tut_label');
      if (label) {
        l.innerHTML = (n ? `<b>${n}</b>` : '') + label.replace(/</g, '&lt;');
        const above = b.y - pad - 44 > 8;
        const top = above ? b.y - pad - 44 : b.y + b.height + pad + 10;
        const left = Math.max(10, Math.min(window.innerWidth - 10 - l.offsetWidth - 40, b.x - pad));
        Object.assign(l.style, { left: left + 'px', top: top + 'px', opacity: 1 });
      } else l.style.opacity = 0;
    }, [b, pad, label || '', n || '']);
    await page.waitForTimeout(550);
    return b;
  };
  const clear = async () => { await ensure(); await page.evaluate(() => { for (const id of ['__tut_hl', '__tut_label']) { const e = document.getElementById(id); if (e) e.style.opacity = 0; } }); await page.waitForTimeout(300); };
  /** Spotlight + move + real click. */
  const click = async (loc, label, n, { spotlight = true, after = 900 } = {}) => {
    if (spotlight) await spot(loc, label, n);
    const b = await moveToEl(loc);
    await ripple(); await page.waitForTimeout(160);
    if (b) await loc.click({ timeout: 5000 }).catch(async () => { await page.mouse.click(b.x + b.width / 2, b.y + b.height / 2); });
    await page.waitForTimeout(250); await clear(); await page.waitForTimeout(after);
    await ensure();
  };
  const type = async (loc, text, delay = 65) => { await loc.click({ timeout: 4000 }).catch(() => {}); await loc.fill('', { timeout: 4000 }).catch(() => {}); await loc.pressSequentially(text, { delay, timeout: 15000 }); };
  const scrollBy = async (dy, steps = 30) => { for (let i = 0; i < steps; i++) { await page.mouse.wheel(0, dy / steps); await page.waitForTimeout(22); } await page.waitForTimeout(400); };
  const scrollToEl = async (loc, offset = 160) => {
    const y = await loc.evaluate((e, off) => e.getBoundingClientRect().top - off, offset).catch(() => null);
    if (y !== null) await scrollBy(y);
  };
  const wait = (ms) => page.waitForTimeout(ms);
  return { page, ensure, moveTo, moveToEl, spot, clear, click, type, scrollBy, scrollToEl, wait, ripple };
}

/** Navigate and let the page settle (some screens poll forever → no networkidle). */
export async function go(page, path, settle = 1500) {
  await page.goto(BASE + path, { waitUntil: 'domcontentloaded', timeout: 45000 }).catch(() => {});
  await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
  await page.waitForTimeout(settle);
}

/**
 * Record one scene. `prepare(page)` runs before capture starts (navigation,
 * banner dismissal); each step then gets a subtitle cue for the time it runs.
 * Returns { clip, cues:[{start,end,text,chapter}] } with times in seconds,
 * relative to the clip.
 */
export async function recordScene(browser, scene, { workDir, storageState, name }) {
  const dev = scene.device === 'mobile' ? MOBILE : DESKTOP;
  const ctx = await browser.newContext({ ...dev, storageState, locale: BROWSER_LOCALE, timezoneId: 'Europe/Brussels', colorScheme: 'dark' });
  const page = await ctx.newPage();
  await scene.prepare(page);
  const h = helpers(page); await h.ensure();
  await page.evaluate(() => { const c = document.getElementById('__tut_cursor'); c.style.transform = 'translate(800px,450px)'; });

  const framesDir = resolve(workDir, `frames-${name}`); rmSync(framesDir, { recursive: true, force: true }); mkdirSync(framesDir, { recursive: true });
  const frames = [];
  const cdp = await ctx.newCDPSession(page);
  const px = { w: Math.round(dev.viewport.width * dev.deviceScaleFactor), h: Math.round(dev.viewport.height * dev.deviceScaleFactor) };
  cdp.on('Page.screencastFrame', async ({ data, metadata, sessionId }) => {
    const f = resolve(framesDir, `${String(frames.length).padStart(6, '0')}.jpg`);
    writeFileSync(f, Buffer.from(data, 'base64'));
    frames.push({ f, t: metadata.timestamp });
    cdp.send('Page.screencastFrameAck', { sessionId }).catch(() => {});
  });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92, maxWidth: px.w, maxHeight: px.h, everyNthFrame: 1 });
  // A frame is only emitted on paint: nudge a paint so capture starts now.
  await page.evaluate(() => { const c = document.getElementById('__tut_cursor'); c.style.opacity = '0.99'; });
  await page.waitForTimeout(600);
  const t0 = Date.now() / 1000;
  const cues = [];
  for (const step of scene.steps) {
    const s = Date.now() / 1000 - t0;
    const started = Date.now();
    try { await step.run(h); } catch (e) { console.warn(`  ! ${name} step "${step.caption.slice(0, 40)}…": ${e.message.split('\n')[0]}`); }
    const caption = tc(step.caption);
    const min = step.hold ?? readTime(caption);
    while (Date.now() - started < min) await page.waitForTimeout(50);
    cues.push({ start: s, end: Date.now() / 1000 - t0, text: caption, chapter: tc(step.chapter) });
  }
  await page.waitForTimeout(400);
  const tEnd = Date.now() / 1000;
  await cdp.send('Page.stopScreencast').catch(() => {});
  await page.waitForTimeout(300);
  await ctx.close();

  // Frames → CFR clip. Screencast timestamps are wall-clock seconds; frames
  // are only sent on change, so each frame lasts until the next one.
  const tStart = t0;
  const usable = frames.filter((fr) => fr.t <= tEnd);
  const list = [];
  for (let i = 0; i < usable.length; i++) {
    const a = Math.max(usable[i].t, tStart);
    const b = i + 1 < usable.length ? usable[i + 1].t : tEnd;
    if (b <= tStart) continue;
    list.push(`file '${usable[i].f}'\nduration ${Math.max(0.001, b - a).toFixed(4)}`);
  }
  list.push(`file '${usable[usable.length - 1].f}'`);
  const listFile = resolve(workDir, `frames-${name}.txt`);
  writeFileSync(listFile, list.join('\n') + '\n');
  const clip = resolve(workDir, `scene-${name}.mp4`);
  const vf = scene.device === 'mobile' ? 'scale=trunc(iw/2)*2:trunc(ih/2)*2' : 'scale=1920:1080:flags=lanczos';
  sh(`ffmpeg -y -f concat -safe 0 -i "${listFile}" -vf "${vf},fps=30,format=yuv420p" -c:v libx264 -preset medium -crf 16 "${clip}" -loglevel error`);
  rmSync(framesDir, { recursive: true, force: true });
  return { clip, cues, duration: tEnd - t0, mobile: scene.device === 'mobile' };
}

/**
 * Coach page prep: collapse the assistant rail and hide the "finish your AI
 * profile" nudge so each tutorial stays on its feature; dismiss one-off
 * onboarding cards ("How … works" → Got it).
 */
export async function coachPage(page, path, { keepRail = false } = {}) {
  await page.addInitScript((keep) => {
    try { localStorage.setItem('strv-assistant-rail', keep ? 'open' : 'collapsed'); localStorage.setItem('strv-assistant-personalize', 'later'); } catch (e) {}
    const css = '[aria-label="Incomplete coach AI profile"],[aria-label="Profil IA coach incomplet"]{display:none!important}';
    const add = () => { const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s); };
    if (document.head) add(); else document.addEventListener('DOMContentLoaded', add);
  }, keepRail);
  await go(page, path);
  for (const name of ['Got it', 'Later', 'Compris', 'Plus tard']) {
    const b = page.getByRole('button', { name, exact: true });
    if (await b.count() && await b.first().isVisible().catch(() => false)) { await b.first().click().catch(() => {}); await page.waitForTimeout(500); break; }
  }
  await page.mouse.move(800, 450);
}
