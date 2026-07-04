// Record the short, muted, looping readiness demo used as the first slide of
// the "Readiness et check-ins" carousel on the S&C page.
//
// Story (≈25s): player check-in on mobile → coach morning briefing (at-risk
// pills) → readiness dashboard (donut + 14-day trend) → bridge to Planning.
//
// Two viewports are recorded separately then concatenated with ffmpeg:
//   1. mobile  (402×860)  — player portal check-in (sliders + submit)
//   2. desktop (1440×900) — coach briefing + readiness + Planning tab
//
// Usage: node capture/readiness-loop.mjs [lang=fr]
//   in : running strivn-app on BASE, demo data seeded (setup-demo.sh <lang>)
//   out: public/videos/readiness-<lang>.{mp4,webm}
import { mkdirSync, renameSync } from 'node:fs';
import { resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { DIR, BASE, TEAM, VIEWPORT, COACH, PLAYER } from '../config.mjs';
import { chromium, go, dismissBanner, overlays } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const L = lang === 'fr'
  ? { checkin: 'Check-in', submit: 'Envoyer', briefing: 'briefing', readiness: 'readiness', planning: 'Planning', atRisk: 'à risque', groupRed: 'à risque', groupYellow: 'à surveiller', groupGreen: 'prêts' }
  : { checkin: 'Check-in', submit: 'Submit', briefing: 'briefing', readiness: 'readiness', planning: 'Planner', atRisk: 'at risk', groupRed: 'at risk', groupYellow: 'watch', groupGreen: 'ready' };
const RAW = resolve(DIR.work, 'raw');
mkdirSync(RAW, { recursive: true });
mkdirSync(DIR.videos, { recursive: true });

// Login helpers that wait for `domcontentloaded` (not `networkidle`, which
// never fires while the Vite dev-server HMR socket is open — see p3rform-vite-1).
const coachLogin = async (page, l = lang) => {
  await page.goto(`${BASE}/login?lang=${l}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.fill('input[name=phone]', COACH.phone);
  await page.fill('input[name=password]', COACH.password);
  await page.click('form button[type=submit]');
  await page.waitForTimeout(2000);
};
const playerLogin = async (page, l = lang) => {
  await page.goto(`${BASE}/login?as=player&player_only=1&lang=${l}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.fill('input[name=identifier]', PLAYER.identifier);
  await page.fill('#player_password', PLAYER.password);
  await page.locator('form:has(#player_password) button[type=submit]').click();
  await page.waitForTimeout(2000);
};

// ── 1. Player check-in (mobile) ──
const mobile = await chromium.launch();
const mRecStart = Date.now();
const mCtx = await mobile.newContext({ viewport: { width: VIEWPORT.mobile.width, height: VIEWPORT.mobile.height }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 1, isMobile: true, hasTouch: true, recordVideo: { dir: RAW, size: { width: VIEWPORT.mobile.width, height: VIEWPORT.mobile.height } } });
const mPage = await mCtx.newPage();

await playerLogin(mPage);
await go(mPage, `${BASE}/portal/checkin?lang=${lang}`, 1400, 60000);
const mDemoStart = Date.now();
const mOffset = (mDemoStart - mRecStart) / 1000;
const mOverlays = overlays(mPage);
await mOverlays.ensure();

// Drag the fatigue slider up (fresh → tired): nudge a couple of steps.
await mOverlays.moveToEl(mPage.locator('#fatigueSlider'));
await mPage.evaluate(() => { const s = document.getElementById('fatigueSlider'); if (s) { s.value = '3'; s.dispatchEvent(new Event('input', { bubbles: true })); s.dispatchEvent(new Event('change', { bubbles: true })); } });
await mPage.waitForTimeout(700);
// Sleep slider
await mOverlays.moveToEl(mPage.locator('#sleepSlider'));
await mPage.evaluate(() => { const s = document.getElementById('sleepSlider'); if (s) { s.value = '7.5'; s.dispatchEvent(new Event('input', { bubbles: true })); s.dispatchEvent(new Event('change', { bubbles: true })); } });
await mPage.waitForTimeout(700);
// Stress + mood sliders (wellness check-in form has these four).
await mOverlays.moveToEl(mPage.locator('#stressSlider'));
await mPage.evaluate(() => { const s = document.getElementById('stressSlider'); if (s) { s.value = '2'; s.dispatchEvent(new Event('input', { bubbles: true })); s.dispatchEvent(new Event('change', { bubbles: true })); } });
await mPage.waitForTimeout(600);
await mOverlays.moveToEl(mPage.locator('#moodSlider'));
await mPage.evaluate(() => { const s = document.getElementById('moodSlider'); if (s) { s.value = '4'; s.dispatchEvent(new Event('input', { bubbles: true })); s.dispatchEvent(new Event('change', { bubbles: true })); } });
await mPage.waitForTimeout(700);

const mVideo = mPage.video();
await mCtx.close();
const mobileRaw = resolve(RAW, `readiness-mobile-${lang}.webm`);
renameSync(await mVideo.path(), mobileRaw);
await mobile.close();

// ── 2. Coach briefing + readiness (desktop) ──
const desktop = await chromium.launch();
const dRecStart = Date.now();
const dCtx = await desktop.newContext({ viewport: { width: VIEWPORT.desktop.width, height: VIEWPORT.desktop.height }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 1, recordVideo: { dir: RAW, size: { width: VIEWPORT.desktop.width, height: VIEWPORT.desktop.height } } });
const dPage = await dCtx.newPage();

await coachLogin(dPage);
await go(dPage, `${BASE}/teams/${TEAM}/briefing?lang=${lang}`, 1200, 60000);
await dismissBanner(dPage);
const dDemoStart = Date.now();
const dOffset = (dDemoStart - dRecStart) / 1000;
const dOverlays = overlays(dPage);
await dOverlays.ensure();
const byText = (re) => dPage.getByText(re).first();

// Briefing: highlight the at-risk section, brief dwell.
await dOverlays.moveTo(720, 380);
const atRisk = dPage.locator('#briefing-at_risk').first();
if (await atRisk.count().catch(() => 0)) {
  await dOverlays.highlight(atRisk, 10);
  await dOverlays.moveToEl(atRisk);
  await dPage.waitForTimeout(2600);
  await dOverlays.clearHl();
}

// Navigate to the readiness dashboard (shorter settle). This page can be slow
// to render under Playwright; if it times out, skip it — the briefing already
// shows the at-risk pills, which is the core morning proof.
let readinessLoaded = false;
try {
  await go(dPage, `${BASE}/teams/${TEAM}/readiness?lang=${lang}`, 1000, 45000);
  readinessLoaded = true;
} catch (e) { console.log('readiness page skipped:', e.message.slice(0, 50)); }
if (readinessLoaded) {
  const donut = dPage.locator('svg[role="img"]').first();
  if (await donut.count().catch(() => 0)) { await dOverlays.highlight(donut, 10); await dOverlays.moveToEl(donut); await dPage.waitForTimeout(2200); await dOverlays.clearHl(); }
  await dOverlays.scrollTo(420);
  await dPage.waitForTimeout(1800);
  await dOverlays.scrollTo(0);
  await dPage.waitForTimeout(500);
}

// Bridge: open the Planning tab to tie morning → week.
await go(dPage, `${BASE}/teams/${TEAM}/load-plan?lang=${lang}`, 900, 60000);
const planTab = byText(new RegExp('^' + L.planning + '$', 'i'));
if (await planTab.count()) { await dOverlays.moveToEl(planTab); }
await dOverlays.clearHl();
await dPage.waitForTimeout(1200);

const dVideo = dPage.video();
await dCtx.close();
const deskRaw = resolve(RAW, `readiness-desk-${lang}.webm`);
renameSync(await dVideo.path(), deskRaw);
await desktop.close();

// ── 3. Concat mobile + desktop, trim login intros, encode ──
// Cap the trim so a slow login doesn't eat the whole recording — showing a
// few seconds of the login page is better than losing the check-in content.
const mSS = Math.max(0, Math.min(mOffset - 0.3, 8)).toFixed(2);
const dSS = Math.max(0, Math.min(dOffset - 0.3, 8)).toFixed(2);
const concat = resolve(RAW, `readiness-concat-${lang}.webm`);
// Pad both clips to a 1280×900 canvas (mobile portrait is letterboxed) so the
// concat filter aligns them; final scale is folded in to avoid -vf conflict.
execSync(`ffmpeg -y -ss ${mSS} -i "${mobileRaw}" -ss ${dSS} -i "${deskRaw}" -filter_complex "[0:v]scale=1280:900:force_original_aspect_ratio=decrease,pad=1280:900:(ow-iw)/2:(oh-ih)/2:black,setsar=1,fps=25[v0];[1:v]scale=1280:900,setsar=1,fps=25[v1];[v0][v1]concat=n=2:v=1:a=0,scale=1280:900[v]" -map "[v]" -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 -deadline realtime -cpu-used 8 "${concat}" -loglevel error`);

const mp4 = resolve(DIR.videos, `readiness-${lang}.mp4`);
const webm = resolve(DIR.videos, `readiness-${lang}.webm`);
execSync(`ffmpeg -y -i "${concat}" -an -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 28 -preset fast -movflags +faststart "${mp4}" -loglevel error`);
execSync(`ffmpeg -y -i "${concat}" -an -c:v libvpx-vp9 -b:v 0 -crf 36 -row-mt 1 -deadline realtime -cpu-used 8 "${webm}" -loglevel error`);
console.log('DONE', mp4, 'mobile@' + mSS + 's · desktop@' + dSS + 's');