// Exercise library grid, tightly cropped to just the colorful PUBLIC/PRIVÉ badge
// cards — no sidebar, no filter row. For compositing into carousel slides where a
// dense, colorful real screenshot reads better than a sidebar-heavy full-page shot.
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, go } from '../lib/browser.mjs';

const OUT = DIR.screenshots;
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const p = await ctx.newPage();
await coachLogin(p, 'fr');
await go(p, `${BASE}/teams/${TEAM}/workouts/library?lang=fr&owner=mine`, 1500, 30000);

// The grid of exercise cards, not the DOSSIERS sidebar or VISIBILITÉ filter row.
// Clip to exactly the 3 card widths (not the empty container to their right).
const cards = p.locator('[data-quick-open]');
const count = await cards.count();
const firstBox = await cards.nth(0).boundingBox();
const lastBox = await cards.nth(Math.min(count, 3) - 1).boundingBox();

await p.screenshot({
  path: resolve(OUT, 'exercise-grid-visual.png'),
  clip: { x: firstBox.x, y: firstBox.y, width: (lastBox.x + lastBox.width) - firstBox.x, height: firstBox.height },
});
console.log('saved exercise-grid-visual');

await ctx.close();
await browser.close();
