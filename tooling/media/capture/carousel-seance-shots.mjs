// Carousel-grade captures of the session builder and live runner.
//
// Why these exist alongside session-builder-shots.mjs: the newsletter shots are
// taken in a 1600px viewport, which is right for an email where the reader can
// zoom. On a 1080px carousel slide viewed on a phone, that same capture puts the
// app's 14px body text at roughly 5pt. The fix is not to crop harder - the image
// already maps near 1:1 onto the slide - it is to render the app in a NARROW
// viewport so the same UI occupies a larger share of the frame.
//
// ⚠️ The demo squad is seeded with REAL football personalities. They appear in
// the right-hand "Effectif convoqué" panel and in the runner's group maker, so
// every clip here is scoped to the déroulé column and never includes that panel.
//
// Usage: STRIVN_APP_URL=http://127.0.0.1:18082 STRIVN_COACH_PHONE=+32400000099 \
//        STRIVN_COACH_PW=strivn1234 ./run.sh capture/carousel-seance-shots.mjs [fr]
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
const VW = Number(process.env.VW || 1080);
const BCP47 = { fr: 'fr-FR', en: 'en-GB', nl: 'nl-NL', de: 'de-DE', pt: 'pt-PT', es: 'es-ES' };

async function cancelLiveSession(page) {
  // :visible matters - the control stays in the DOM with no session running,
  // and clicking the hidden one just burns the 30s timeout.
  const cancel = page.locator('button:visible, a:visible').filter({ hasText: /^\s*Annuler la séance\s*$/ }).first();
  if (await cancel.count()) {
    await cancel.click();
    await page.waitForTimeout(3500);
    await go(page, `${BASE}/teams/${TEAM}/next-session?lang=${lang}`, 3000, 120000);
    console.log('  cancelled a live session that was still running');
  }
}

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: VW, height: 2400 },
  locale: BCP47[lang] || 'fr-FR',
  deviceScaleFactor: 3,
});
// The app reads its theme from localStorage, and a fresh context defaults to
// light. The slides are dark, and so are the newsletter screenshots, so this has
// to be pinned rather than inherited.
await ctx.addInitScript(() => { try { localStorage.setItem('strv-theme', 'dark'); } catch (e) {} });

const p = await ctx.newPage();
p.on('dialog', (d) => d.accept());
await coachLogin(p, lang);
await go(p, `${BASE}/teams/${TEAM}/next-session?lang=${lang}`, 3000, 120000);

// A live session left running covers the whole page and swallows clicks, so any
// leftover run has to go before the déroulé is reachable at all.
await cancelLiveSession(p);

// --- 1. the déroulé: vitals bar through the end of the carousel block -------
{
  const rect = await p.evaluate(() => {
    const h = [...document.querySelectorAll('h2, h3')]
      .filter((el) => el.offsetParent !== null)
      .find((el) => el.textContent.includes('Déroulé de la séance'));
    if (!h) return null;
    let col = h;
    while (col && col !== document.body) {
      const r = col.getBoundingClientRect();
      if (r.width > 400 && r.width < 1400 && r.height > 200) break;
      col = col.parentElement;
    }
    const box = col.getBoundingClientRect();
    const top = h.getBoundingClientRect().y - 22;
    // Stop just past the CARROUSEL block rather than at a fixed height: the point
    // is the vitals plus both structure types, and anything below is filler.
    const car = [...document.querySelectorAll('*')]
      .filter((el) => el.offsetParent !== null && /^\s*CARROUSEL\s*$/i.test(el.textContent))
      .pop();
    const end = car ? car.getBoundingClientRect().bottom + 230 : top + 900;
    return { x: box.x, y: top, width: box.width, height: end - top };
  });
  if (!rect) throw new Error('déroulé column not found');
  await p.screenshot({
    path: resolve(OUT, `carousel-deroule${sfx}.png`),
    clip: { x: rect.x - 12, y: rect.y, width: rect.width + 24, height: rect.height },
  });
  console.log(`saved carousel-deroule${sfx}  col=${Math.round(rect.width)}px h=${Math.round(rect.height)}px`);
}

// --- 2. the full-screen builder: library + timeline ------------------------
{
  // Library / timeline / inspector only lay out side by side at >=1280px, so this
  // one cannot be narrowed as far as the déroulé. 1320 is the floor that keeps
  // the three columns.
  await p.setViewportSize({ width: 1320, height: 1450 });
  await p.waitForTimeout(600);
  const edit = p.locator('a, button').filter({ hasText: 'Modifier le déroulé' }).first();
  await edit.click();
  await p.waitForTimeout(3000);

  const rect = await p.evaluate(() => {
    // Anchor on the library heading and the timeline's own header so the clip
    // tracks the real columns instead of hard-coded pixels.
    const lib = [...document.querySelectorAll('*')]
      .filter((el) => el.offsetParent !== null && /^\s*STRUCTURES\s*$/i.test(el.textContent))
      .pop();
    if (!lib) return null;
    let panel = lib;
    while (panel && panel !== document.body) {
      const r = panel.getBoundingClientRect();
      if (r.width > 200 && r.height > 400) break;
      panel = panel.parentElement;
    }
    const pb = panel.getBoundingClientRect();
    const car = [...document.querySelectorAll('*')]
      .filter((el) => el.offsetParent !== null && /^\s*CARROUSEL\s*$/i.test(el.textContent))
      .pop();
    const bottom = car ? car.getBoundingClientRect().bottom + 190 : pb.bottom;
    return { x: Math.max(0, pb.x - 10), y: 0, bottom };
  });
  if (!rect) throw new Error('builder library panel not found');
  await p.screenshot({
    path: resolve(OUT, `carousel-builder${sfx}.png`),
    clip: { x: rect.x, y: 0, width: 1320 - rect.x - 8, height: Math.min(rect.bottom, 1450) },
  });
  console.log(`saved carousel-builder${sfx}`);
}
await ctx.close();

// --- 3. the live runner on a phone ----------------------------------------
// Sequence lifted from live-runner-vue-shots.mjs, which is the version proven to
// reach the running scene: navigate, start, RE-NAVIGATE, then press the primary
// twice. Skipping the re-navigation leaves the page on the pre-session view.
{
  // 820 rather than the newsletter shot's 932: at full phone height the runner
  // leaves a large empty band between the controls and the tab bar, and that
  // band is dead weight on a slide.
  const pctx = await browser.newContext({
    viewport: { width: 430, height: 820 },
    locale: BCP47[lang] || 'fr-FR',
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });
  await pctx.addInitScript(() => { try { localStorage.setItem('strv-theme', 'dark'); } catch (e) {} });
  const q = await pctx.newPage();
  q.on('dialog', (d) => d.accept());
  await coachLogin(q, lang);

  const url = `${BASE}/teams/${TEAM}/next-session?lang=${lang}&runner=vue`;
  await go(q, url, 3000, 120000);
  const start = q.locator('button:visible, a:visible').filter({ hasText: 'Démarrer la séance' }).first();
  if (await start.count()) { await start.click(); await q.waitForTimeout(6000); }
  await go(q, url, 4000, 120000);

  const bell = q.locator('button:visible').filter({ hasText: /^\s*Lancer la séance\s*$/ }).first();
  if (await bell.count()) { await bell.click(); await q.waitForTimeout(5000); }
  const blockBell = q.locator('button:visible').filter({ hasText: /^\s*Lancer(\s+T\d+)?\s*$/ }).first();
  if (await blockBell.count()) { await blockBell.click(); await q.waitForTimeout(6000); }

  await q.screenshot({ path: resolve(OUT, `carousel-runner${sfx}.png`) });
  console.log(`saved carousel-runner${sfx}`);
  await pctx.close();
}

await browser.close();
