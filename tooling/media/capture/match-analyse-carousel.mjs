// Render the live-match + analysis carousel deck to PNG slides (1080x1350 @2x).
// Usage: DECK_URL=http://localhost:4405/_carousel-match.html ./run.sh capture/match-analyse-carousel.mjs
//   out: launch-video/match-analyse-2026-08-16/slide-<n>.png
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR } from '../config.mjs';
import { chromium } from '../lib/browser.mjs';

const URL = process.env.DECK_URL || 'http://localhost:4399/_carousel-match.html';
const OUT = resolve(DIR.website, 'launch-video/match-analyse-2026-08-16');
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1160, height: 1400 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });
await page.waitForTimeout(800);

const slides = page.locator('.slide');
const n = await slides.count();
for (let i = 0; i < n; i++) {
  const el = slides.nth(i);
  const idx = await el.getAttribute('data-n');
  await el.screenshot({ path: resolve(OUT, `slide-${idx}.png`) });
  console.log('  saved slide-' + idx);
}
await browser.close();
console.log('DONE match carousel — ' + n + ' slides');
