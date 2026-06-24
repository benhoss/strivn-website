// Record the load-planner walkthrough, paced to the voice-over, and mux the
// narration → the narrated core (no intro/outro/subtitles yet).
// Usage: node explainer/record.mjs [lang=fr]
//   in : .work/audio/<lang>/*.mp3, a running strivn-app on BASE
//   out: .work/explainer-core-<lang>.mp4
//
// The action list below is specific to the Load-planning explainer; adapt it
// (and content/explainer-<lang>.json) for other features.
import { mkdirSync, renameSync } from 'node:fs';
import { resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, ffprobe, coachLogin, go, dismissBanner, overlays } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const L = lang === 'fr'
  ? { categories: 'Catégories de charge', compare: 'Prévu vs réalisé', planner: 'Planning' }
  : { categories: 'Load categories', compare: 'Planned vs actual', planner: 'Planner' };

const AUD = resolve(DIR.work, 'audio', lang);
const RAW = resolve(DIR.work, 'raw');
mkdirSync(RAW, { recursive: true });
const IDS = ['01-intro', '02-objectif', '03-acwr', '04-semaine', '05-exercices', '06-categories', '07-prevu-reel', '08-conclusion'];
const dur = IDS.map((id) => ffprobe(resolve(AUD, `${id}.mp3`)));
const cum = dur.reduce((a, d, i) => { a.push((a[i - 1] || 0) + d); return a; }, []); // cumulative end (s)

const browser = await chromium.launch();
const recStart = Date.now();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 1, recordVideo: { dir: RAW, size: { width: 1440, height: 900 } } });
const page = await ctx.newPage();

await coachLogin(page, lang);
await go(page, `${BASE}/teams/${TEAM}/load-plan?lang=${lang}`, 1200);
await dismissBanner(page);

const { ensure, moveTo, moveToEl, highlight, clearHl, scrollTo } = overlays(page);
await ensure();
const demoStart = Date.now();
const demoOffset = (demoStart - recStart) / 1000;
const waitUntil = async (sec) => { while ((Date.now() - demoStart) / 1000 < sec) await page.waitForTimeout(50); };
const byText = (re) => page.getByText(re).first();

const acts = [
  async () => { await moveTo(720, 380); },
  async () => { await highlight(byText(/Objectif semaine|Weekly target/i).locator('xpath=..'), 10); await moveToEl(byText(/Objectif semaine|Weekly target/i)); },
  async () => { await highlight(byText(/Allégez|Ease off|ACWR/i).locator('xpath=..'), 10); await moveToEl(byText(/Allégez|Ease off|risque|risk/i)); },
  async () => { await clearHl(); await moveTo(280, 470); await moveTo(520, 470); await moveTo(760, 470); },
  async () => { await clearHl(); await scrollTo(360); await highlight(byText(/Force \+ activation|Strength \+ activation/i).locator('xpath=ancestor::*[3]'), 10); await moveToEl(byText(/Force \+ activation|Strength \+ activation/i)); },
  async () => { await clearHl(); const b = page.getByRole('button', { name: new RegExp(L.categories, 'i') }).first(); if (await b.count()) { await moveToEl(b); await b.click().catch(() => {}); } },
  async () => { await clearHl(); const close = page.getByRole('button', { name: /Fermer|Close/i }).first(); if (await close.count()) await close.click().catch(() => {}); await page.keyboard.press('Escape').catch(() => {}); await page.waitForTimeout(500); await scrollTo(0); const t = byText(new RegExp('^' + L.compare + '$', 'i')); if (await t.count()) { await moveToEl(t); await t.click().catch(() => {}); } },
  async () => { await clearHl(); const t = byText(new RegExp('^' + L.planner + '$', 'i')); if (await t.count()) { await moveToEl(t); await t.click().catch(() => {}); } await scrollTo(0); },
];

for (let i = 0; i < IDS.length; i++) {
  try { await acts[i](); } catch (e) { console.log(IDS[i], 'act ERR', e.message.slice(0, 60)); }
  await waitUntil(cum[i]);
}
await clearHl();
await page.waitForTimeout(300);

const video = page.video();
await ctx.close();
const rawDest = resolve(RAW, `explainer-${lang}.webm`);
renameSync(await video.path(), rawDest);
await browser.close();

// concat narration + trim login intro + mux
const inputs = IDS.map((id) => `-i "${resolve(AUD, id + '.mp3')}"`).join(' ');
const concat = IDS.map((_, i) => `[${i}:a]`).join('');
const narration = resolve(RAW, `narration-${lang}.m4a`);
execSync(`ffmpeg -y ${inputs} -filter_complex "${concat}concat=n=${IDS.length}:v=0:a=1[a]" -map "[a]" -c:a aac -b:a 160k "${narration}" -loglevel error`);

const ss = Math.max(0, demoOffset - 0.3).toFixed(2);
const out = resolve(DIR.work, `explainer-core-${lang}.mp4`);
execSync(`ffmpeg -y -ss ${ss} -i "${rawDest}" -i "${narration}" -map 0:v -map 1:a -vf "scale=1280:-2" -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 28 -preset slow -c:a aac -b:a 160k -movflags +faststart -shortest "${out}" -loglevel error`);
console.log('DONE', out, 'trim@' + ss, 'narration=' + cum.at(-1).toFixed(1) + 's');
