// Record the short, muted, looping Load-planning demo used as the first
// carousel slide on the S&C page.
// Usage: node capture/demo-loop.mjs [lang=fr]
//   out: public/videos/load-planning-<lang>.{mp4,webm}
import { mkdirSync, renameSync } from 'node:fs';
import { resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, go, dismissBanner, overlays } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const L = lang === 'fr'
  ? { categories: 'Catégories de charge', compare: 'Prévu vs réalisé', planner: 'Planning' }
  : { categories: 'Load categories', compare: 'Planned vs actual', planner: 'Planner' };
const RAW = resolve(DIR.work, 'raw');
mkdirSync(RAW, { recursive: true });
mkdirSync(DIR.videos, { recursive: true });

const browser = await chromium.launch();
const recStart = Date.now();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 1, recordVideo: { dir: RAW, size: { width: 1440, height: 900 } } });
const page = await ctx.newPage();

await coachLogin(page, lang);
await go(page, `${BASE}/teams/${TEAM}/load-plan?lang=${lang}`, 1200);
await dismissBanner(page);
const { ensure, moveTo, moveToEl, clearHl, scrollTo } = overlays(page);
await ensure();
const demoStart = Date.now();
const demoOffset = (demoStart - recStart) / 1000;
const byText = (re) => page.getByText(re).first();

await page.waitForTimeout(900);
const cat = page.getByRole('button', { name: new RegExp(L.categories, 'i') }).first();
if (await cat.count()) { await moveToEl(cat); await cat.click().catch(() => {}); await page.waitForTimeout(1100); await page.keyboard.press('Escape').catch(() => {}); await page.waitForTimeout(500); }
await moveTo(720, 520); await scrollTo(700); await page.waitForTimeout(900); await scrollTo(1250); await page.waitForTimeout(900); await scrollTo(0);
const cmp = byText(new RegExp('^' + L.compare + '$', 'i')); if (await cmp.count()) { await moveToEl(cmp); await cmp.click().catch(() => {}); await page.waitForTimeout(1500); }
const back = byText(new RegExp('^' + L.planner + '$', 'i')); if (await back.count()) { await moveToEl(back); await back.click().catch(() => {}); await page.waitForTimeout(900); }
await clearHl(); await page.waitForTimeout(500);

const video = page.video();
await ctx.close();
const raw = resolve(RAW, `loop-${lang}.webm`);
renameSync(await video.path(), raw);
await browser.close();

const ss = Math.max(0, demoOffset - 0.4).toFixed(2);
const mp4 = resolve(DIR.videos, `load-planning-${lang}.mp4`);
const webm = resolve(DIR.videos, `load-planning-${lang}.webm`);
execSync(`ffmpeg -y -ss ${ss} -i "${raw}" -an -vf "scale=1280:-2" -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 30 -preset slow -movflags +faststart "${mp4}" -loglevel error`);
execSync(`ffmpeg -y -ss ${ss} -i "${raw}" -an -vf "scale=1280:-2" -c:v libvpx-vp9 -b:v 0 -crf 36 -row-mt 1 "${webm}" -loglevel error`);
console.log('DONE', mp4, 'trim@' + ss);
