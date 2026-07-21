// One-off: youth-mode screenshots for the youth/guardians feature sections.
// Usage: ./run.sh capture/youth-shots.mjs [fr|en]
//   out: public/screenshots/youth-guardians-card[-fr].png  (player page guardians card)
//        public/screenshots/youth-team-setting[-fr].png    (team settings: language + audience)
//
// The demo DB has no youth team, so this temporarily flips the demo team's
// audience_mode to youth_kids AND seeds a complete youth state on the target
// player (birth date + confirmed parents + granted consents) so the guardians
// card renders POSITIVE — parents listed and confirmed, no "activation
// blocked" warning. This is the proof shot for the "parents reliés" pillar.
// Every mutation is rolled back to the demo baseline afterwards, even on
// crash or Ctrl-C (try/finally + SIGINT/SIGTERM handlers).
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
const clearCache = () => execSync(`docker exec ${APP} php artisan cache:clear`, { stdio: 'ignore' });
const firstInt = (s) => (s.match(/\d+/) || [''])[0];

// Demo ids rot when the DB is reseeded — override via env when they do.
const PLAYER_ID = Number(process.env.STRIVN_YOUTH_PLAYER || 1); // Thomas Dubois

// ── Restore the demo BASELINE, not a snapshot: a snapshot read after a
// previous crash would "restore" the corrupted state and cement it. The
// baseline is known and explicit — the demo team is audience_mode 'standard'
// and the demo roster has no birth dates, no guardians and no consent
// records (neither SampleDataSeeder nor setup-demo.sh create any).
let restored = false;
const restore = () => {
  if (restored) return;
  restored = true;
  try {
    psql(`UPDATE teams SET audience_mode='standard' WHERE id=${TEAM};`);
    psql(`DELETE FROM consent_records WHERE player_id=${PLAYER_ID};`);
    psql(`DELETE FROM guardians WHERE id IN (SELECT guardian_id FROM guardian_player WHERE player_id=${PLAYER_ID});`); // cascades guardian_player
    psql(`UPDATE players SET birth_date=NULL WHERE id=${PLAYER_ID};`);
    clearCache();
    console.log('restored demo baseline (audience_mode=standard, youth seed removed)');
  } catch (e) {
    console.error('RESTORE FAILED — demo DB needs manual cleanup:', e.message);
  }
};
for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, () => { console.log(`\n${sig} received — restoring demo state`); restore(); process.exit(sig === 'SIGINT' ? 130 : 143); });
}

// Initial state read (log only — restore() targets the explicit baseline).
const prevMode = psql(`SELECT COALESCE(audience_mode, 'standard') FROM teams WHERE id=${TEAM};`) || 'standard';
console.log('team audience_mode:', prevMode, '→ youth_kids (temporary)');

let browser;
try {
  psql(`UPDATE teams SET audience_mode='youth_kids' WHERE id=${TEAM};`);

  // Seed the positive youth state on the target player. Leftovers from a
  // crashed run are cleared first so re-runs stay deterministic.
  psql(`DELETE FROM consent_records WHERE player_id=${PLAYER_ID};`);
  psql(`DELETE FROM guardians WHERE id IN (SELECT guardian_id FROM guardian_player WHERE player_id=${PLAYER_ID});`);
  psql(`UPDATE players SET birth_date='2014-04-12' WHERE id=${PLAYER_ID};`); // ~12 y/o — plausible on a kids team
  const lastName = psql(`SELECT last_name FROM players WHERE id=${PLAYER_ID};`) || 'Dubois';
  const safeLast = lastName.replace(/'/g, "''");
  const slug = lastName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '') || 'famille'; // NFD strips accents before the a-z filter
  const addGuardian = (first, relationship, phone) => {
    const gid = firstInt(psql(`INSERT INTO guardians (first_name, last_name, phone, email, locale, created_at, updated_at)
      VALUES ('${first}', '${safeLast}', '${phone}', '${first.toLowerCase()}.${slug}@gmail.com', '${lang}', now(), now()) RETURNING id;`));
    psql(`INSERT INTO guardian_player (guardian_id, player_id, relationship, status, invited_at, confirmed_at, created_at, updated_at)
      VALUES (${gid}, ${PLAYER_ID}, '${relationship}', 'confirmed', now() - interval '12 days', now() - interval '11 days', now(), now());`);
    for (const purpose of ['wellness_medical', 'gps_load', 'photos']) {
      psql(`INSERT INTO consent_records (player_id, guardian_id, purpose, status, method, consent_version, created_at, updated_at)
        VALUES (${PLAYER_ID}, ${gid}, '${purpose}', 'granted', 'whatsapp_verified', 'v1', now() - interval '11 days', now() - interval '11 days');`);
    }
    console.log(`guardian ${first} ${lastName} (${relationship}) confirmed, consents granted — id ${gid}`);
  };
  addGuardian('Marie', 'mother', '+32471234567');
  addGuardian('Julien', 'father', '+32478765432');
  clearCache();

  browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 960 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await coachLogin(p, lang);

  // 1 ── player page: the Parents/guardians card — confirmed parents, green
  // consent badges, no warning banner (positive state, list closed).
  console.log('player', await go(p, `${BASE}/teams/${TEAM}/players/${PLAYER_ID}?lang=${lang}`, 2000, 45000));
  await dismissBanner(p);
  const card = p.locator('[x-data*="addGuardian"]').first();
  await card.scrollIntoViewIfNeeded();
  await p.waitForTimeout(600);
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
  try { await browser?.close(); } catch { /* browser may never have launched */ }
  restore();
}
console.log('DONE youth shots lang=' + lang);
