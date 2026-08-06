// GPS module screens (coach desktop): squad status table + per-player drawer.
// Crops out the sidebar/header so the demo team's name never appears in the shot.
// Usage: ./run.sh capture/gps-shots.mjs [fr|en]
//   out: public/screenshots/gps-squad[-fr].png, public/screenshots/gps-player[-fr].png
import { resolve } from 'node:path';
import { DIR, BASE, TEAM, browserLocale } from '../config.mjs';
import { chromium, coachLogin, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: browserLocale(lang), deviceScaleFactor: 2 });
const p = await ctx.newPage();
await coachLogin(p, lang);

await go(p, `${BASE}/teams/${TEAM}/gps?lang=${lang}`, 1800, 30000);

// Squad status table — clip to <main>, excluding the sidebar/header (team name).
{
  const box = await p.locator('main').first().boundingBox();
  await p.screenshot({
    path: resolve(OUT, `gps-squad${sfx}.png`),
    clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 760) },
  });
  console.log('saved gps-squad' + sfx);
}

// Per-player drawer — click the first player row, clip to the slide-over panel only.
{
  await p.getByRole('button', { name: /Thomas Dubois/ }).first().click();
  await p.waitForTimeout(900);
  const panel = p.locator('div.fixed.inset-y-0.right-0').first();
  const box = await panel.boundingBox();
  if (box) {
    await p.screenshot({ path: resolve(OUT, `gps-player${sfx}.png`), clip: { ...box, height: 840 } });
    console.log('saved gps-player' + sfx);
  } else {
    console.log('gps-player ERR panel not found');
  }
}

await ctx.close();
await browser.close();
