// Capture the coach + player-portal screenshots used by the S&C showcase carousels.
// Usage: node capture/screenshots.mjs [lang=fr]
//   out: public/screenshots/<name>[-<lang>].png   (EN = no suffix, to match scContent.ts)
//
// Requires the strivn-app running on BASE with the demo data in the matching
// language (run `data/seed-<lang>.sql` + `php artisan cache:clear` first — see README).
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, playerLogin, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
mkdirSync(OUT, { recursive: true });
const shot = (page, name, h) => page.screenshot({ path: resolve(OUT, `${name}${sfx}.png`), clip: { x: 0, y: 0, width: page.viewportSize().width, height: h } }).then(() => console.log('  saved', name + sfx));

const browser = await chromium.launch();

// ── coach (desktop) ──
const coachCtx = await browser.newContext({ viewport: { width: 1440, height: 880 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2 });
const coach = await coachCtx.newPage();
await coachLogin(coach, lang);
const coachTargets = [
  ['load-plan', 'load-planning', true],   // dismiss the onboarding banner first
  ['workload', 'load-overview', false],
  ['workload', 'load-formula', 'formula'], // open the "Formula" panel
  ['briefing', 'wellness-briefing', false],
];
for (const [slug, name, mode] of coachTargets) {
  if (name === 'load-formula') { // reuse the workload page already open
    const btn = coach.getByRole('button', { name: /formule|formula/i }).first();
    if (await btn.count()) { await btn.click(); await coach.waitForTimeout(900); }
    await shot(coach, name, 880); continue;
  }
  try {
    console.log(slug, await go(coach, `${BASE}/teams/${TEAM}/${slug}?lang=${lang}`, 1700, 45000));
    if (mode === true) { for (const l of ['Compris', "J'ai compris", 'Got it']) { const b = coach.getByRole('button', { name: new RegExp(l, 'i') }); if (await b.count()) { await b.first().click().catch(() => {}); await coach.waitForTimeout(700); break; } } await coach.waitForTimeout(500); }
    await shot(coach, name, 880);
  } catch (e) { console.log(name, 'ERR', e.message.slice(0, 70)); }
}

// ── player portal (mobile) ──
const portalCtx = await browser.newContext({ viewport: { width: 402, height: 860 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const portal = await portalCtx.newPage();
await playerLogin(portal, lang);
for (const [path, name] of [['agenda', 'portal-agenda'], ['fitness', 'portal-fitness'], ['checkin', 'portal-checkin']]) {
  try { await go(portal, `${BASE}/portal/${path}?lang=${lang}`, 1500); await shot(portal, name, 860); }
  catch (e) { console.log(name, 'ERR', e.message.slice(0, 70)); }
}

await browser.close();
console.log('DONE lang=' + lang);
