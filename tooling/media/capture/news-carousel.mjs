import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR } from '../config.mjs';
import { chromium } from '../lib/browser.mjs';
const URL = process.env.DECK_URL || 'http://localhost:4500/_news-carousel.html';
const OUT = resolve(DIR.website, 'launch-video/nouveautes-2026-07-20');
mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1160, height: 1400 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });
await page.waitForTimeout(800);
const slides = page.locator('.slide');
const n = await slides.count();
for (let i = 0; i < n; i++) { const el = slides.nth(i); const idx = await el.getAttribute('data-n'); await el.screenshot({ path: resolve(OUT, `slide-${idx}.png`) }); console.log('saved slide-' + idx); }
await browser.close();
console.log('DONE seance carousel — ' + n + ' slides');
