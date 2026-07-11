// Render the youth-teams announcement carousel to PNG slides (1080x1350 @2x).
// Usage: DECK_URL=http://localhost:4500/_youth-carousel.html ./run.sh capture/youth-carousel.mjs
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR } from '../config.mjs';
import { chromium } from '../lib/browser.mjs';

const URL = process.env.DECK_URL || 'http://localhost:4500/_youth-carousel.html';
const OUT = resolve(DIR.website, 'launch-video/equipes-jeunes');
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1160, height: 1400 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });
await page.waitForTimeout(700);

const slides = page.locator('.slide');
const n = await slides.count();
for (let i = 0; i < n; i++) {
  const el = slides.nth(i);
  const idx = await el.getAttribute('data-n');
  await el.screenshot({ path: resolve(OUT, `slide-${idx}.png`) });
  console.log('  saved slide-' + idx);
}
await browser.close();
console.log('DONE youth carousel — ' + n + ' slides');
