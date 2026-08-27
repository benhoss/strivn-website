// Compose the newsletter's video poster (1008x567 = 16:9 at 504px render width).
//
// This is a COMPOSED cover built from product screenshots, not a frame lifted
// from the video: the headless shell has no H.264 decoder, so a real frame
// cannot be extracted here. It is captioned as a cover, never as a still.
//
// Usage: DECK_URL=http://localhost:4420/_poster.html ./run.sh capture/video-poster.mjs
import { resolve } from 'node:path';
import { DIR } from '../config.mjs';
import { chromium } from '../lib/browser.mjs';

const URL = process.env.DECK_URL || 'http://localhost:4420/_poster.html';
const OUT = DIR.screenshots;

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1100, height: 700 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });
await page.waitForTimeout(700);

await page.locator('#poster').screenshot({ path: resolve(OUT, 'seance-video-poster-fr.png') });
console.log('saved seance-video-poster-fr');

await browser.close();
