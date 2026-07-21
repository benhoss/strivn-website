// One-off: youth-mode screenshots for the youth/guardians feature sections.
// Usage: ./run.sh capture/youth-shots.mjs [fr|en]
//   out: public/screenshots/youth-guardians-card[-fr].png  (player page guardians card)
//        public/screenshots/youth-team-setting[-fr].png    (team settings: language + audience)
//
// The demo DB has no youth team, so this temporarily flips the demo team's
// audience_mode to youth_kids (which makes the guardians card render on player
// pages and shows "Kids"/"Enfants" selected in the settings), captures, and
// restores the original value. No other data is touched.
import { execSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, go, dismissBanner } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
mkdirSync(OUT, { recursive: true });

const PG = process.env.STRIVN_PG_CONTAINER || 'strivn-app-postgres-1';
const APP = process.env.STRIVN_APP_CONTAINER || 'strivn-app-app-1';
const psql = (q) => execSync(`docker exec ${PG} psql -U p3rform -d p3rform -q -t -A -c ${JSON.stringify(q.replace(/\s*\n\s*/g, ' '))}`).toString().trim();

const PLAYER_ID = process.env.STRIVN_YOUTH_PLAYER || '1'; // Thomas Dubois (no guardians)

const prevMode = psql(`SELECT COALESCE(audience_mode, 'standard') FROM teams WHERE id=${TEAM};`) || 'standard';
console.log('team audience_mode:', prevMode, '→ youth_kids (temporary)');
psql(`UPDATE teams SET audience_mode='youth_kids' WHERE id=${TEAM};`);
execSync(`docker exec ${APP} php artisan cache:clear`, { stdio: 'ignore' });

const browser = await chromium.launch();
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 960 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await coachLogin(p, lang);

  // 1 ── player page: the Parents/guardians card, with the add form open
  console.log('player', await go(p, `${BASE}/teams/${TEAM}/players/${PLAYER_ID}?lang=${lang}`, 2000, 45000));
  await dismissBanner(p);
  const card = p.locator('[x-data*="addGuardian"]').first();
  await card.scrollIntoViewIfNeeded();
  await card.getByRole('button', { name: /ajouter|add/i }).first().click().catch(() => {});
  await p.waitForTimeout(900);
  await card.screenshot({ path: resolve(OUT, `youth-guardians-card${sfx}.png`) });
  console.log('saved youth-guardians-card' + sfx);

  // 2 ── team settings: team language + audience ("Enfants"/"Kids") selects
  console.log('settings', await go(p, `${BASE}/teams/${TEAM}/settings?lang=${lang}`, 2000, 45000));
  const locSel = p.locator('#locale');
  const audSel = p.locator('#audience_mode');
  await locSel.scrollIntoViewIfNeeded();
  await p.waitForTimeout(400);
  await audSel.focus().catch(() => {});
  await p.waitForTimeout(300);
  const locLabel = await p.locator('label[for=locale]').boundingBox();
  const aud = await audSel.boundingBox();
  if (!locLabel || !aud) throw new Error('settings selects not found');
  const x = Math.max(0, locLabel.x - 34);
  const y = Math.max(0, locLabel.y - 14);
  const clip = {
    x, y,
    width: Math.min(1440 - x, aud.width + 68),
    height: Math.min(960 - y, aud.y + aud.height + 110 - y),
  };
  await p.screenshot({ path: resolve(OUT, `youth-team-setting${sfx}.png`), clip });
  console.log('saved youth-team-setting' + sfx);
  await ctx.close();
} finally {
  await browser.close();
  psql(`UPDATE teams SET audience_mode='${prevMode.replace(/'/g, "''")}' WHERE id=${TEAM};`);
  execSync(`docker exec ${APP} php artisan cache:clear`, { stdio: 'ignore' });
  console.log('restored audience_mode:', prevMode);
}
console.log('DONE youth shots lang=' + lang);
