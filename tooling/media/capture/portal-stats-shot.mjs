// Player-portal Stats tab (mobile): personal match stats + team record.
// Usage: ./run.sh capture/portal-stats-shot.mjs [fr|en]
//   out: public/screenshots/portal-stats[-fr].png   (EN = no suffix)
//
// Screenshot language = DB data language: run ./data/setup-demo.sh <lang> first.
//
// The demo seed leaves the portal player (Kylian Moreau) with match minutes
// but no per-match stat counters, so the "Mes statistiques" grid would render
// all « — ». This script seeds a plausible, idempotent set of demo stats:
//   - two extra played championship matches (Aurore away, Rivaux home) so the
//     season record reads W2 D1 L1 instead of a thin 2-match sample;
//   - event_player_stats counters (goals/assists/shots/cards) for Kylian on
//     every played match, plus minutes for the two new ones.
// All numeric, language-neutral demo content — nothing needs restoring.
import { execSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, playerLogin, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
mkdirSync(OUT, { recursive: true });

// Container name: same auto-detection as data/setup-demo.sh — derive the
// compose prefix from whoever publishes the app's port.
const detectPg = () => {
  try {
    const port = new URL(BASE).port || '80';
    const name = execSync(`docker ps --filter publish=${port} --format '{{.Names}}'`).toString().trim().split('\n')[0] || '';
    return name ? `${name.replace(/-web-1$/, '')}-postgres-1` : '';
  } catch { return ''; }
};
const PG = process.env.STRIVN_PG_CONTAINER || detectPg() || 'strivn-app-postgres-1';
const psql = (q) => execSync(`docker exec ${PG} psql -U p3rform -d p3rform -q -t -A -c ${JSON.stringify(q.replace(/\s*\n\s*/g, ' '))}`).toString().trim();
const firstInt = (s) => (s.match(/\d+/) || [''])[0];

// Demo ids rot when the DB is reseeded — resolve by name, override via env.
const PLAYER_ID = Number(process.env.STRIVN_STATS_PLAYER
  || firstInt(psql(`SELECT id FROM players WHERE first_name='Kylian' AND last_name='Moreau' AND team_id=${TEAM} LIMIT 1;`))
  || 6);

// ── Seed (idempotent). Ensures a played match exists (keyed on title+venue),
// gives it a score, and upserts Kylian's minutes + stat counters on it.
const opponentId = (name) => {
  let id = firstInt(psql(`SELECT id FROM opponent_teams WHERE name=${JSON.stringify(name).replace(/"/g, "'")} LIMIT 1;`));
  if (!id) id = firstInt(psql(`INSERT INTO opponent_teams (name, created_at, updated_at) VALUES ('${name}', now(), now()) RETURNING id;`));
  return id;
};

const ensureMatch = ({ title, isHome, daysAgo, scoreHome, scoreAway, opponent }) => {
  let id = firstInt(psql(`SELECT id FROM calendar_events WHERE team_id=${TEAM} AND event_type='match'
    AND title='${title}' AND is_home=${isHome} AND deleted_at IS NULL AND end_at <= now() ORDER BY start_at DESC LIMIT 1;`));
  if (!id) {
    id = firstInt(psql(`INSERT INTO calendar_events
      (team_id, title, start_at, end_at, event_type, is_home, opponent_team_id, competition_type, external_source, created_at, updated_at)
      VALUES (${TEAM}, '${title}', CURRENT_DATE - ${daysAgo} + time '15:00', CURRENT_DATE - ${daysAgo} + time '16:45',
      'match', ${isHome}, ${opponentId(opponent)}, 'championship', 'manual', now(), now()) RETURNING id;`));
  }
  if (scoreHome !== undefined) {
    psql(`INSERT INTO event_results (calendar_event_id, score_home, score_away, created_at, updated_at)
      SELECT ${id}, ${scoreHome}, ${scoreAway}, now(), now()
      WHERE NOT EXISTS (SELECT 1 FROM event_results WHERE calendar_event_id=${id});`);
  }
  return id;
};

const seedPlayer = (eventId, minutes, stats) => {
  psql(`INSERT INTO event_player_evaluations (calendar_event_id, player_id, present, minutes_played, created_at, updated_at)
    VALUES (${eventId}, ${PLAYER_ID}, true, ${minutes}, now(), now())
    ON CONFLICT (calendar_event_id, player_id) DO NOTHING;`); // keep existing demo minutes untouched
  for (const [key, value] of Object.entries(stats)) {
    psql(`INSERT INTO event_player_stats (calendar_event_id, player_id, stat_key, value, created_at, updated_at)
      VALUES (${eventId}, ${PLAYER_ID}, '${key}', ${value}, now(), now())
      ON CONFLICT (calendar_event_id, player_id, stat_key) DO UPDATE SET value=EXCLUDED.value, updated_at=now();`);
  }
};

// Existing demo matches (setup baseline): Aurore home W 3-1, Valmont away L 1-2.
// Added here: Aurore away D 2-2 (-30d), Rivaux home W 2-0 (-23d) → W2 D1 L1.
const auroreHome = ensureMatch({ title: 'Match vs FC Aurore', isHome: true, daysAgo: 9, scoreHome: 3, scoreAway: 1, opponent: 'FC Aurore' });
const valmontAway = ensureMatch({ title: 'Match vs Union Valmont', isHome: false, daysAgo: 16, scoreHome: 2, scoreAway: 1, opponent: 'Union Valmont' });
const rivauxHome = ensureMatch({ title: 'Match vs FC Rivaux', isHome: true, daysAgo: 23, scoreHome: 2, scoreAway: 0, opponent: 'FC Rivaux' });
const auroreAway = ensureMatch({ title: 'Match vs FC Aurore', isHome: false, daysAgo: 30, scoreHome: 2, scoreAway: 2, opponent: 'FC Aurore' });

// Kylian: attacking midfielder numbers. `saves` stays unrecorded on purpose —
// the « — » tile is the AE1 affordance (absent ≠ zero), authentic for a field player.
seedPlayer(auroreHome, 60, { goals: 1, assists: 1, shots: 3, shots_on_target: 2, yellow_cards: 0, red_cards: 0 });
seedPlayer(valmontAway, 60, { goals: 0, assists: 0, shots: 2, shots_on_target: 1, yellow_cards: 1, red_cards: 0 });
seedPlayer(rivauxHome, 79, { goals: 1, assists: 0, shots: 4, shots_on_target: 2, yellow_cards: 0, red_cards: 0 });
seedPlayer(auroreAway, 68, { goals: 0, assists: 1, shots: 1, shots_on_target: 1, yellow_cards: 0, red_cards: 0 });
console.log(`seeded stats for player ${PLAYER_ID} on events ${auroreAway}, ${rivauxHome}, ${valmontAway}, ${auroreHome}`);

// ── Capture (mobile portrait, same context as the other portal shots).
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 402, height: 860 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const p = await ctx.newPage();
await playerLogin(p, lang);
console.log('stats', await go(p, `${BASE}/portal/stats?lang=${lang}`, 1800, 45000));
if (!p.url().includes('/portal/stats')) console.log('WARN unexpected url:', p.url());
await p.screenshot({ path: resolve(OUT, `portal-stats${sfx}.png`), clip: { x: 0, y: 0, width: 402, height: 860 } });
console.log('saved portal-stats' + sfx);
await browser.close();
