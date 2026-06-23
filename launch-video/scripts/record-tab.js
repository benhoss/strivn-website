// Record a Chrome tab to video with Playwright (uses the system Google Chrome — no download).
//
// Setup (once):  npm i playwright   (browsers can be the system Chrome via channel:'chrome')
// Run:           node record-tab.js <url> [outDir] [width] [height] [steps.json]
//
// Produces a .webm in <outDir>; convert to mp4 with:
//   ffmpeg -i out/*.webm -vf scale=W:H -c:v libx264 -pix_fmt yuv420p capture.mp4
//
// `steps.json` (optional) is an array of actions to script a real flow, e.g.:
//   [{"goto":"https://app.strivn.net/login"},
//    {"fill":["#email","coach@demo.fr"]}, {"fill":["#password","..."]},
//    {"click":"button[type=submit]"}, {"wait":1500},
//    {"click":"text=Charge"}, {"wait":1200},
//    {"drag":["#rpe-thumb", 240, 0]}, {"click":"text=Envoyer"}, {"wait":1500}]
const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const url = process.argv[2] || 'https://strivn.net/';
  const outDir = process.argv[3] || './out';
  const W = parseInt(process.argv[4] || '540', 10);
  const H = parseInt(process.argv[5] || '960', 10);
  const stepsFile = process.argv[6];
  const steps = stepsFile ? JSON.parse(fs.readFileSync(stepsFile, 'utf8')) : null;

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: W, height: H },
    deviceScaleFactor: 2,
    recordVideo: { dir: outDir, size: { width: W, height: H } },
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  await page.waitForTimeout(1200);

  if (steps) {
    for (const s of steps) {
      if (s.goto) await page.goto(s.goto, { waitUntil: 'networkidle' }).catch(() => {});
      if (s.fill) await page.fill(s.fill[0], s.fill[1]).catch(() => {});
      if (s.click) await page.click(s.click).catch(() => {});
      if (s.drag) { // [selector, dx, dy]
        const el = await page.$(s.drag[0]);
        if (el) { const b = await el.boundingBox();
          await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2);
          await page.mouse.down();
          await page.mouse.move(b.x + b.width / 2 + s.drag[1], b.y + b.height / 2 + s.drag[2], { steps: 25 });
          await page.mouse.up(); }
      }
      if (s.scroll) await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'smooth' }), s.scroll);
      if (s.wait) await page.waitForTimeout(s.wait);
    }
  } else {
    for (let i = 1; i <= 6; i++) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'smooth' }), (i / 6) * 2600);
      await page.waitForTimeout(1100);
    }
  }
  await page.waitForTimeout(600);
  await context.close(); // finalizes the webm
  await browser.close();
  console.log('recorded to', outDir);
})();
