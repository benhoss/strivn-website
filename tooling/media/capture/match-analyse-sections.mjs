// Post-match analysis page: capture individual sections as clean visuals for the
// live-match carousel. Each section is cropped to its own <section> box, so the
// page's sticky header and the surrounding sections never bleed in.
// Requires PostMatchDemoSeeder; team/event via env (defaults match the seeder).
// Usage: STRIVN_APP_URL=... ./run.sh capture/match-analyse-sections.mjs
//   out: public/screenshots/match-sec-<slug>.png
import { resolve } from 'node:path';
import { DIR } from '../config.mjs';
import { chromium } from '../lib/browser.mjs';

const OUT = DIR.screenshots;
const BASE = process.env.STRIVN_APP_URL || 'http://127.0.0.1:18082';
const TEAM = process.env.STRIVN_MATCH_TEAM || '9';
const EVENT = process.env.STRIVN_MATCH_EVENT || '244';
const PHONE = process.env.STRIVN_MATCH_PHONE || '+32400000042';
const PASSWORD = process.env.STRIVN_MATCH_PW || 'strivn1234';

// heading text (as rendered in fr) -> output slug
const WANTED = [
  ['Rythme du match', 'rythme'],
  ['Statistiques par joueur', 'stats'],
  ['Données GPS par joueur', 'gps'],
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 2 });
const p = await ctx.newPage();

await p.goto(`${BASE}/login?lang=fr`, { waitUntil: 'domcontentloaded' });
await p.fill('input[name=phone]', PHONE);
await p.fill('input[name=password]', PASSWORD);
await p.click('form button[type=submit]');
await p.waitForURL(/\/teams\/|\/dashboard/, { timeout: 20000 }).catch(() => {});

await p.goto(`${BASE}/teams/${TEAM}/sessions/results/${EVENT}?tab=analyse&lang=fr`, { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);

for (const [heading, slug] of WANTED) {
  const section = p.locator('section', { has: p.locator(`h2:text-is("${heading}")`) }).first();
  if (!(await section.count())) { console.log('MISSING: ' + heading); continue; }
  await section.evaluate((el) => el.scrollIntoView({ block: 'center' }));
  await p.waitForTimeout(600);

  // The two matrix sections are a 16-row table — far too tall and text-dense to
  // stay legible at 4:5. Crop to the table's own box, capped at ROWS data rows,
  // which also drops the heading the sticky top bar would otherwise clip.
  const table = section.locator('table').first();
  if (await table.count()) {
    const ROWS = 8;
    const box = await table.boundingBox();
    const rowH = await table.evaluate((el, n) => {
      const head = el.querySelector('thead');
      const rows = [...el.querySelectorAll('tbody tr')].slice(0, n);
      if (!rows.length) return null;
      const last = rows[rows.length - 1].getBoundingClientRect();
      return last.bottom - el.getBoundingClientRect().top;
    }, ROWS);
    await p.screenshot({
      path: resolve(OUT, `match-sec-${slug}.png`),
      clip: { x: box.x, y: box.y, width: box.width, height: rowH || box.height },
    });
  } else {
    await section.screenshot({ path: resolve(OUT, `match-sec-${slug}.png`) });
  }
  console.log('saved match-sec-' + slug);
}

await ctx.close();
await browser.close();
