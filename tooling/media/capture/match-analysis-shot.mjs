// Post-match analysis page: the pitch action map crossing match facts with GPS filters.
// Crops to <main> so the demo team's name never appears in the shot.
// Requires PostMatchDemoSeeder to have been run (php artisan db:seed --class=PostMatchDemoSeeder --force)
// and STRIVN_MATCH_TEAM / STRIVN_MATCH_EVENT env vars pointing at the seeded event.
// Usage: STRIVN_APP_URL=... STRIVN_MATCH_TEAM=9 STRIVN_MATCH_EVENT=173 ./run.sh capture/match-analysis-shot.mjs fr
//   out: public/screenshots/match-analysis-pitch-fr.png
import { resolve } from 'node:path';
import { DIR } from '../config.mjs';
import { chromium, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
const BASE = process.env.STRIVN_APP_URL || 'http://127.0.0.1:18082';
const TEAM = process.env.STRIVN_MATCH_TEAM || '9';
const EVENT = process.env.STRIVN_MATCH_EVENT || '173';
const PHONE = process.env.STRIVN_MATCH_PHONE || '+32400000042';
const PASSWORD = process.env.STRIVN_MATCH_PW || 'strivn1234';

const BCP47 = { fr: 'fr-FR', en: 'en-GB', nl: 'nl-NL', de: 'de-DE', pt: 'pt-PT', es: 'es-ES' };
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, locale: BCP47[lang] || 'en-GB', deviceScaleFactor: 2 });
const p = await ctx.newPage();

await p.goto(`${BASE}/login?lang=${lang}`, { waitUntil: 'domcontentloaded' });
await p.fill('input[name=phone]', PHONE);
await p.fill('input[name=password]', PASSWORD);
await p.click('form button[type=submit]');
await p.waitForURL(/\/teams\/|\/dashboard/, { timeout: 20000 }).catch(() => {});

await go(p, `${BASE}/teams/${TEAM}/sessions/results/${EVENT}?tab=analyse&lang=${lang}`, 1500, 30000);

// Locale-independent hook: the Alpine component backing this section, not its
// (translated) heading text. Deterministic scroll (not scrollIntoViewIfNeeded,
// which no-ops if Playwright thinks the element is already "in view") then a
// dynamic nudge computed from the actual sticky top bar's height, so this
// keeps working if the header's height changes across app versions.
const section = p.locator('[x-data^="pitchActionMap"]').first();
await section.evaluate((el) => el.scrollIntoView({ block: 'start' }));
await p.waitForTimeout(300);

const nudge = await p.evaluate(() => {
  const header = [...document.querySelectorAll('div')]
    .filter((el) => {
      const cs = getComputedStyle(el);
      return cs.position === 'sticky' && el.getBoundingClientRect().width > 800;
    })
    .sort((a, b) => b.getBoundingClientRect().bottom - a.getBoundingClientRect().bottom)[0];
  const section = document.querySelector('[x-data^="pitchActionMap"]');
  if (!header || !section) return 0;
  const margin = 45;
  return section.getBoundingClientRect().top - (header.getBoundingClientRect().bottom + margin);
});
await p.evaluate((dy) => window.scrollBy(0, dy), nudge);
await p.waitForTimeout(700);

const box = await section.boundingBox();
await p.screenshot({
  path: resolve(OUT, `match-analysis-pitch${sfx}.png`),
  clip: { x: box.x, y: box.y, width: box.width, height: box.height + 10 },
});
console.log('saved match-analysis-pitch' + sfx);

await ctx.close();
await browser.close();
