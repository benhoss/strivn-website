// Render the session-builder / live-runner carousel deck to PNG slides (1080x1350 @2x).
// Usage: DECK_URL=http://localhost:4410/_carousel-seance.html \
//        OUT_DIR=launch-video/seance-2026-08-27 ./run.sh capture/seance-builder-carousel.mjs
//
// The deck itself lives in public/_carousel-seance.html (and -en), so the /screenshots
// and /strivn-logo-* paths it references resolve against the same static root.
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR } from '../config.mjs';
import { chromium } from '../lib/browser.mjs';

const URL = process.env.DECK_URL || 'http://localhost:4410/_carousel-seance.html';
const OUT = resolve(DIR.website, process.env.OUT_DIR || 'launch-video/seance-2026-08-27');
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1160, height: 1400 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });
// Webfonts settle after networkidle; without this the first slide renders in the fallback.
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(600);

const slides = page.locator('.slide');
const n = await slides.count();
for (let i = 0; i < n; i++) {
  const el = slides.nth(i);
  const idx = await el.getAttribute('data-n');
  await el.screenshot({ path: resolve(OUT, `slide-${idx}.png`) });
  console.log('  saved slide-' + idx);
}
await browser.close();
console.log('DONE seance carousel - ' + n + ' slides -> ' + OUT);
