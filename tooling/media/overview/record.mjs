// Record the product-overview as one short clip per scene, each trimmed to its
// segment's voice-over duration. Desktop scenes reuse a coach session; the
// portal scene uses a mobile player session.
// Usage: ./run.sh overview/record.mjs fr
//   in : .work/overview/audio/<lang>/*.mp3, content/overview-<lang>.json, running app
//   out: .work/overview/scenes/<lang>/<id>.mp4   (1280x800, silent)
import { mkdirSync, renameSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { DIR, BASE } from '../config.mjs';
import { chromium, ffprobe, coachLogin, playerLogin, overlays } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const AUD = resolve(DIR.work, 'overview', 'audio', lang);
const RAW = resolve(DIR.work, 'overview', 'raw');
const OUT = resolve(DIR.work, 'overview', 'scenes', lang);
mkdirSync(RAW, { recursive: true });
mkdirSync(OUT, { recursive: true });

const { segments } = JSON.parse(readFileSync(resolve(DIR.content, `overview-${lang}.json`), 'utf8'));

const browser = await chromium.launch();

// Authenticate once; reuse the storage state per scene (no re-login each time).
const c0 = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 1 });
const cp0 = await c0.newPage(); await coachLogin(cp0, lang); const coachState = await c0.storageState(); await c0.close();
const p0 = await browser.newContext({ viewport: { width: 402, height: 860 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const pp0 = await p0.newPage(); await playerLogin(pp0, lang); const playerState = await p0.storageState(); await p0.close();

// Per-scene action. Keep it light + defensive (skip selectors that aren't there).
async function sceneAction(id, page, ov, seg) {
  const { moveTo, moveToEl, highlight, clearHl, scrollTo } = ov;
  const byText = (re) => page.getByText(re).first();
  if (id === '02-calendrier') { await moveTo(700, 360); await moveTo(420, 430); await moveTo(900, 430); }
  else if (id === '03-portail') { await page.waitForTimeout(800); await scrollTo(420); await page.waitForTimeout(600); await scrollTo(0); }
  else if (id === '04-briefing') { const t = byText(/réponses|responses|Aujourd|risque/i); if (await t.count()) { await highlight(t.locator('xpath=ancestor::*[1]'), 8); await moveToEl(t); } else await moveTo(700, 380); }
  else if (id === '05-charge') { await scrollTo(280); const t = byText(/Entraînement|Force \+ activation/i); if (await t.count()) { await highlight(t.locator('xpath=ancestor::*[1]'), 8); await moveToEl(t); } }
  else if (id === '06-medical') { const t = byText(/Lefèvre|genou|Retour|réathl|indispo|partiel/i); if (await t.count()) { await highlight(t.locator('xpath=ancestor::*[1]'), 8); await moveToEl(t); } else await moveTo(700, 380); }
  else if (id === '07-assistant') {
    const box = page.locator('textarea, input[type=text]').first();
    if (await box.count()) { await moveToEl(box); await box.click().catch(() => {}); await box.type(seg.scene.type || 'Qui est à risque cette semaine ?', { delay: 55 }).catch(() => {}); }
  } else { await moveTo(720, 380); }
}

const cumScenes = [];
for (const seg of segments) {
  const dur = ffprobe(resolve(AUD, `${seg.id}.mp3`));
  const mobile = seg.scene.device === 'mobile';
  const ctx = await browser.newContext({
    viewport: mobile ? { width: 402, height: 860 } : { width: 1440, height: 900 },
    locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: mobile ? 2 : 1,
    isMobile: mobile, hasTouch: mobile, storageState: mobile ? playerState : coachState,
    recordVideo: { dir: RAW, size: mobile ? { width: 402, height: 860 } : { width: 1440, height: 900 } },
  });
  const page = await ctx.newPage();
  const t0ctx = Date.now();
  try { await page.goto(`${BASE}${seg.scene.route}?lang=${lang}`, { waitUntil: 'domcontentloaded', timeout: 30000 }); } catch {}
  try { await page.waitForLoadState('networkidle', { timeout: 6000 }); } catch {}
  await page.waitForTimeout(1200);
  // dismiss the load-plan onboarding banner if present
  for (const l of ['Compris', "J'ai compris", 'Got it']) { const b = page.getByRole('button', { name: new RegExp(l, 'i') }); if (await b.count()) { await b.first().click().catch(() => {}); await page.waitForTimeout(400); break; } }
  const ov = overlays(page); await ov.ensure();
  const startOffset = (Date.now() - t0ctx) / 1000; // seconds of nav/settle to trim off the front
  try { await sceneAction(seg.id, page, ov, seg); } catch (e) { console.log(seg.id, 'act ERR', e.message.slice(0, 50)); }
  while ((Date.now() - t0ctx) / 1000 < startOffset + dur) await page.waitForTimeout(50);

  const video = page.video();
  await ctx.close();
  const raw = resolve(RAW, `${seg.id}.webm`);
  renameSync(await video.path(), raw);

  // Trim to exactly the segment duration; normalize every scene to a 1280x800
  // canvas (mobile is scaled to fit height and centered on a dark background).
  const clip = resolve(OUT, `${seg.id}.mp4`);
  const vf = mobile
    ? `scale=-2:760,pad=1280:800:(ow-iw)/2:(oh-ih)/2:color=0x07080f`
    : `scale=1280:800`;
  execSync(`ffmpeg -y -ss ${startOffset.toFixed(2)} -t ${dur.toFixed(2)} -i "${raw}" -an -vf "${vf},format=yuv420p" -r 25 -c:v libx264 -profile:v high -crf 22 -preset medium "${clip}" -loglevel error`);
  cumScenes.push(seg.id);
  console.log('scene', seg.id, 'dur=' + dur.toFixed(1) + 's', mobile ? '(mobile)' : '');
}
await browser.close();
console.log('DONE scenes:', cumScenes.length);
