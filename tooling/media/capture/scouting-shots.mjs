// One-off: capture scouting screenshots for the weekly-update email.
// Usage: ./run.sh capture/scouting-shots.mjs fr
//   out: public/screenshots/scouting-{module,report}-fr.png (coach desktop)
//        public/screenshots/scouting-report-phone-fr.png    (public report, mobile)
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, go, dismissBanner } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
mkdirSync(OUT, { recursive: true });

const OPP = 2;       // FC Aldenne (team 1)
const REPORT = 11;   // shared report
const TOKEN = 'nP5EHWWlmkzQAJqwG0SPmeEebXT8D43UirBT69YI';

const shot = (page, name, h) =>
  page.screenshot({ path: resolve(OUT, `${name}${sfx}.png`), clip: { x: 0, y: 0, width: page.viewportSize().width, height: h } })
      .then(() => console.log('  saved', name + sfx));

const browser = await chromium.launch();

// ── coach (desktop) ──
const coachCtx = await browser.newContext({ viewport: { width: 1440, height: 880 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2 });
const coach = await coachCtx.newPage();
await coachLogin(coach, lang);

for (const [slug, name] of [
  [`scouting/opponents/${OPP}`, 'scouting-module'],
  [`scouting/opponents/${OPP}/reports/${REPORT}/edit`, 'scouting-report'],
]) {
  try {
    console.log(slug, await go(coach, `${BASE}/teams/${TEAM}/${slug}?lang=${lang}`, 1900, 45000));
    await dismissBanner(coach);
    await coach.waitForTimeout(700);
    await shot(coach, name, 880);
  } catch (e) { console.log(name, 'ERR', e.message.slice(0, 80)); }
}

// ── public report (mobile, no auth) ──
const mob = await browser.newContext({ viewport: { width: 402, height: 860 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const m = await mob.newPage();
try {
  console.log('shared', await go(m, `${BASE}/reports/shared/${TOKEN}?lang=${lang}`, 1900, 45000));
  await m.waitForTimeout(600);
  await shot(m, 'scouting-report-phone', 860);
} catch (e) { console.log('phone', 'ERR', e.message.slice(0, 80)); }

await browser.close();
console.log('DONE scouting lang=' + lang);
