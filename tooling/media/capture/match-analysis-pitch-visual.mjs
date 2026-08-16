// Post-match analysis: JUST the pitch visual (background + colored action dots),
// no filters/sidebar/heading chrome — for compositing into carousel slides where
// a clean, self-explanatory "heatmap" image is needed rather than a full UI shot.
// Usage: STRIVN_APP_URL=... STRIVN_MATCH_TEAM=9 STRIVN_MATCH_EVENT=244 ./run.sh capture/match-analysis-pitch-visual.mjs
//   out: public/screenshots/match-analysis-pitch-visual.png
import { resolve } from 'node:path';
import { DIR } from '../config.mjs';
import { chromium } from '../lib/browser.mjs';

const OUT = DIR.screenshots;
const BASE = process.env.STRIVN_APP_URL || 'http://127.0.0.1:18082';
const TEAM = process.env.STRIVN_MATCH_TEAM || '9';
const EVENT = process.env.STRIVN_MATCH_EVENT || '244';
const PHONE = process.env.STRIVN_MATCH_PHONE || '+32400000042';
const PASSWORD = process.env.STRIVN_MATCH_PW || 'strivn1234';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 2 });
const p = await ctx.newPage();

await p.goto(`${BASE}/login?lang=fr`, { waitUntil: 'domcontentloaded' });
await p.fill('input[name=phone]', PHONE);
await p.fill('input[name=password]', PASSWORD);
await p.click('form button[type=submit]');
await p.waitForURL(/\/teams\/|\/dashboard/, { timeout: 20000 }).catch(() => {});

await p.goto(`${BASE}/teams/${TEAM}/sessions/results/${EVENT}?tab=analyse&lang=fr`, { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(1500);

// canvas.parentElement is the rounded card wrapping the pitch background + dots —
// clean of the VALEURS/COULEUR/PHYSIQUE filter row and the ACTIONS/SEITE sidebar.
const pitchCard = p.locator('[x-data^="pitchActionMap"] canvas').locator('xpath=..').first();
await pitchCard.scrollIntoViewIfNeeded();
await p.waitForTimeout(700); // let the canvas opacity-0 -> visible transition finish

await pitchCard.screenshot({ path: resolve(OUT, 'match-analysis-pitch-visual.png') });
console.log('saved match-analysis-pitch-visual');

await ctx.close();
await browser.close();
