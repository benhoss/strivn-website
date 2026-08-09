// Musculation module screens (coach desktop): workout composition preview + player 1RM tracking.
// Crops to <main>, excluding the sidebar/header so the demo team's name never appears in the shot.
// Usage: ./run.sh capture/muscu-shots.mjs [fr|en]
//   out: public/screenshots/muscu-workout[-fr].png, public/screenshots/muscu-1rm[-fr].png
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2 });
const p = await ctx.newPage();
await coachLogin(p, lang);

// Séance plan — per-player load, %1RM resolved to real kg (the concrete "joueur par joueur" proof).
{
  await go(p, `${BASE}/teams/${TEAM}/workouts?lang=${lang}`, 1500, 30000);
  const planHref = await p.getByRole('link', { name: 'Plan', exact: true }).first().getAttribute('href');
  await go(p, planHref, 1200, 30000);
  const box = await p.locator('main').first().boundingBox();
  await p.screenshot({
    path: resolve(OUT, `muscu-workout${sfx}.png`),
    clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 900) },
  });
  console.log('saved muscu-workout' + sfx);
}

// Player 1RM tracking — a player with recorded tests.
{
  await go(p, `${BASE}/teams/${TEAM}/strength/players?player=1&lang=${lang}`, 1500, 30000);
  const box = await p.locator('main').first().boundingBox();
  await p.screenshot({
    path: resolve(OUT, `muscu-1rm${sfx}.png`),
    clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 640) },
  });
  console.log('saved muscu-1rm' + sfx);
}

await ctx.close();
await browser.close();
