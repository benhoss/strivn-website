// One-off: capture scouting screenshots for the weekly-update email.
// Usage: ./run.sh capture/scouting-shots.mjs fr
//   out: public/screenshots/scouting-{module,report}-fr.png (coach desktop)
//        public/screenshots/scouting-report-phone-fr.png    (public report, mobile)
import { execSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, go, dismissBanner } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
mkdirSync(OUT, { recursive: true });
const BROWSER_LOCALE = { fr: 'fr-FR', en: 'en-GB', nl: 'nl-BE', pt: 'pt-PT', es: 'es-ES' }[lang] || 'en-GB';

// Demo ids rot on every reseed, so resolve them from the DB (same container
// auto-detection as data/setup-demo.sh). Anything still missing is skipped with
// a loud message rather than captured as a 404 page.
const detectPg = () => {
  try {
    const port = new URL(BASE).port || '80';
    const name = execSync(`docker ps --filter publish=${port} --format '{{.Names}}'`).toString().trim().split('\n')[0] || '';
    return name ? `${name.replace(/-web-1$/, '')}-postgres-1` : '';
  } catch { return ''; }
};
const PG = process.env.STRIVN_PG_CONTAINER || detectPg() || 'strivn-app-postgres-1';
const psql = (q) => { try { return execSync(`docker exec ${PG} psql -U p3rform -d p3rform -q -t -A -c ${JSON.stringify(q)}`).toString().trim(); } catch { return ''; } };

const OPP = process.env.STRIVN_SCOUT_OPP
  || psql(`SELECT id FROM opponent_teams WHERE team_id=${TEAM} ORDER BY id LIMIT 1;`);
const REPORT = process.env.STRIVN_SCOUT_REPORT
  || psql(`SELECT id FROM scouting_reports WHERE team_id=${TEAM} ORDER BY id DESC LIMIT 1;`);
const TOKEN = process.env.STRIVN_SCOUT_TOKEN
  || psql(`SELECT share_token FROM scouting_reports WHERE team_id=${TEAM} AND share_token IS NOT NULL ORDER BY id DESC LIMIT 1;`);
console.log(`ids: opponent=${OPP || '—'} report=${REPORT || '—'} token=${TOKEN ? 'yes' : '—'}`);

const shot = (page, name, h) =>
  page.screenshot({ path: resolve(OUT, `${name}${sfx}.png`), clip: { x: 0, y: 0, width: page.viewportSize().width, height: h } })
      .then(() => console.log('  saved', name + sfx));

const browser = await chromium.launch();

// ── coach (desktop) ──
const coachCtx = await browser.newContext({ viewport: { width: 1440, height: 880 }, locale: BROWSER_LOCALE, deviceScaleFactor: 2 });
const coach = await coachCtx.newPage();
await coachLogin(coach, lang);

for (const [slug, name, need] of [
  [`scouting/opponents/${OPP}`, 'scouting-module', OPP],
  [`scouting/opponents/${OPP}/reports/${REPORT}/edit`, 'scouting-report', OPP && REPORT],
]) {
  if (!need) { console.log(name, 'SKIP — no scouting demo data in this DB'); continue; }
  try {
    console.log(slug, await go(coach, `${BASE}/teams/${TEAM}/${slug}?lang=${lang}`, 1900, 45000));
    await dismissBanner(coach);
    await coach.waitForTimeout(700);
    await shot(coach, name, 880);
  } catch (e) { console.log(name, 'ERR', e.message.slice(0, 80)); }
}

// ── public report (mobile, no auth) ──
const mob = await browser.newContext({ viewport: { width: 402, height: 860 }, locale: BROWSER_LOCALE, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const m = await mob.newPage();
if (!TOKEN) console.log('scouting-report-phone SKIP — no shared report in this DB');
else try {
  console.log('shared', await go(m, `${BASE}/reports/shared/${TOKEN}?lang=${lang}`, 1900, 45000));
  await m.waitForTimeout(600);
  await shot(m, 'scouting-report-phone', 860);
} catch (e) { console.log('phone', 'ERR', e.message.slice(0, 80)); }

await browser.close();
console.log('DONE scouting lang=' + lang);
