// One-off: capture the PUBLIC no-login live-match viewer (parents' share link)
// at phone portrait — the score page behind /live-match/watch/{token}.
//
// Usage: ./run.sh capture/live-viewer-shot.mjs [fr|en]
//   out: public/screenshots/live-viewer-phone[-fr].png  (en = no suffix)
//
// What it does (self-contained, leaves the DB as it found it):
//   0. sweeps stale capture artifacts left by a previously crashed run
//   1. inserts a `match` calendar event for the demo team (opponent FC Aurore)
//   2. coach opens next-session?event=<id>, generates the viewer share link,
//      picks 8 starters, kicks off, records But / But adverse / But (2-1)
//   3. waits for the offline queue to sync, then backdates the run ~41',
//      spreads the goals (14' / 27' / 38') and writes a plausible stat line
//      into live_match_counters so the page reads mid-match AND coherent
//   4. opens the share URL in a FRESH context (no auth) at 402x860, screenshots
//   5. deletes the calendar event (cascades the run + moments) unless KEEP_MATCH=1
//      — cleanup also runs on crash and Ctrl-C (try/finally + signal handlers)
//
// The screenshot language follows ?lang= (public page; resolver falls back to
// the URL locale). Timeline labels ("But") stay French by design — the match
// catalog is French-first data, not UI chrome.
import { execSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
mkdirSync(OUT, { recursive: true });

// Container name: same auto-detection as data/setup-demo.sh — derive the
// compose prefix from whoever publishes the app's port (survives the stack
// being renamed, e.g. p3rform-* → strivn-app-*). Env var wins, then the
// detected prefix, then the last-known-good name.
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

const TITLE = lang === 'en' ? 'League match — AC Verel vs FC Aurore' : 'Championnat — AC Verel vs FC Aurore';
const OPPONENT = Number(process.env.STRIVN_OPPONENT || 4); // opponent_teams id — demo ids rot when the DB is reseeded, override via env (same pattern as scouting-shots.mjs)

// ── Cleanup: drop the capture's match event (calendar_events cascades the
// live run, periods, moments and counters). Shared by the happy path, the
// finally block and the signal handlers — safe to call more than once.
let eventId = null;
let cleaned = false;
const cleanup = () => {
  if (cleaned) return;
  cleaned = true;
  if (process.env.KEEP_MATCH) { console.log('KEEP_MATCH set — event', eventId, 'left in place'); return; }
  if (!eventId) return;
  try {
    psql(`DELETE FROM calendar_events WHERE id=${eventId};`);
    console.log('cleaned up match event', eventId);
  } catch (e) {
    console.error('CLEANUP FAILED — delete calendar_event', eventId, 'manually:', e.message);
  }
};
for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, () => { console.log(`\n${sig} received — cleaning up`); cleanup(); process.exit(sig === 'SIGINT' ? 130 : 143); });
}

let browser;
try {
  // 0 ── sweep stale artifacts from prior crashed runs: a stranded in-progress
  // live match hijacks the demo team's next-session page and survives retries
  // (the per-run cleanup only targets its own event id). Both locales' titles
  // contain 'AC Verel vs FC Aurore'; real demo fixtures ("Match vs FC Aurore")
  // do not, so they are never touched.
  const stale = psql(`SELECT string_agg(id::text, ',') FROM calendar_events WHERE team_id=${TEAM} AND event_type='match' AND title LIKE '%AC Verel vs FC Aurore%';`);
  if (stale) {
    psql(`DELETE FROM calendar_events WHERE id IN (${stale});`);
    console.log('swept stale capture match event(s) + live rows:', stale);
  }

  // 1 ── the match event (starts "50 minutes ago" in the team's wall-clock)
  eventId = firstInt(psql(`INSERT INTO calendar_events (team_id, title, start_at, end_at, event_type, opponent_team_id, is_home, created_at, updated_at)
    VALUES (${TEAM}, '${TITLE.replace(/'/g, "''")}', (now() at time zone 'Europe/Brussels') - interval '50 minutes', (now() at time zone 'Europe/Brussels') + interval '70 minutes', 'match', ${OPPONENT}, true, now(), now()) RETURNING id;`));
  console.log('match event id:', eventId);

  browser = await chromium.launch();

  // 2 ── coach: share link + kickoff + 2-1
  const ctx = await browser.newContext({ viewport: { width: 402, height: 860 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  await coachLogin(p, lang);
  const url = `${BASE}/teams/${TEAM}/next-session?event=${eventId}&lang=${lang}`;
  console.log('next-session', await go(p, url, 2200, 45000));

  // Viewer share link (server-rendered card, visible during the setup phase)
  if (!(await p.locator('[data-match-viewer-url]').count())) {
    await p.locator('[data-match-viewer-generate]').first().scrollIntoViewIfNeeded().catch(() => {});
    await p.locator('[data-match-viewer-generate]').first().click();
    await p.waitForLoadState('domcontentloaded');
    await p.waitForTimeout(1800);
  }
  await p.waitForSelector('[data-match-viewer-url]', { timeout: 10000 });
  const viewerUrl = await p.inputValue('[data-match-viewer-url]');
  console.log('viewer url:', viewerUrl);

  // Feuille de match: promote 8 bench players to starters, then kick off
  await p.locator('[data-match-open-setup]').first().click();
  await p.waitForSelector('[data-match-setup]', { state: 'visible', timeout: 8000 });
  await p.waitForTimeout(600);
  for (let i = 0; i < 8; i++) {
    const bench = p.locator('[data-match-bench]');
    if (!(await bench.count())) break;
    await bench.first().locator('button').nth(1).click().catch(() => {});
    await p.waitForTimeout(140);
  }
  console.log('starters:', await p.locator('[data-match-starter]').count());
  const kickoff = p.locator('[data-match-kickoff]');
  await kickoff.scrollIntoViewIfNeeded().catch(() => {});
  await kickoff.click();                 // arm
  await p.waitForTimeout(400);
  await kickoff.click();                 // confirm — starts period 1
  await p.waitForSelector('[data-match-score-palette]', { state: 'visible', timeout: 10000 });
  await p.waitForTimeout(900);

  const pickFirstPlayer = async () => {
    await p.waitForSelector('[data-match-picker]', { state: 'visible', timeout: 6000 }).catch(() => {});
    const pick = p.locator('[data-match-pick-player]');
    if (await pick.count()) await pick.first().click().catch(() => {});
    await p.waitForTimeout(650);
  };
  // But (nous) → picker → first starter
  await p.locator('[data-match-score-btn]').first().click();
  await pickFirstPlayer();
  // But (adversaire) — one tap
  await p.locator('[data-match-score-them-btn]').first().click();
  await p.waitForTimeout(400);
  if (await p.locator('[data-match-picker]').isVisible().catch(() => false)) {
    const none = p.locator('[data-match-pick-none]');
    if (await none.count()) await none.first().click().catch(() => {});
    await p.waitForTimeout(400);
  }
  // But (nous) again → 2-1
  await p.locator('[data-match-score-btn]').first().click();
  await pickFirstPlayer();

  // 3 ── wait for the sync queue to land server-side (status live + 3 moments)
  let synced = false;
  for (let i = 0; i < 30; i++) {
    const row = psql(`SELECT ls.status || '|' || (SELECT count(*) FROM live_match_moments m WHERE m.live_session_id=ls.id) FROM live_sessions ls WHERE ls.calendar_event_id=${eventId};`);
    console.log('  sync poll:', row);
    if (/^live\|[3-9]/.test(row)) { synced = true; break; }
    await p.waitForTimeout(1000);
  }
  if (!synced) throw new Error('live run never synced (status/moments)');
  await ctx.close();

  // Backdate the run so the viewer reads mid-match (~41', goals 14'/27'/38')
  const runId = firstInt(psql(`SELECT id FROM live_sessions WHERE calendar_event_id=${eventId};`));
  psql(`UPDATE live_sessions SET started_at = started_at - interval '41 minutes' WHERE id=${runId};`);
  psql(`UPDATE live_match_periods SET started_at = started_at - interval '41 minutes' WHERE live_session_id=${runId};`);
  psql(`WITH per AS (SELECT started_at FROM live_match_periods WHERE live_session_id=${runId} AND number=1),
        m AS (SELECT id, row_number() OVER (ORDER BY id) rn FROM live_match_moments WHERE live_session_id=${runId})
        UPDATE live_match_moments t SET game_second = c.gs, occurred_at = per.started_at + make_interval(secs => c.gs)
        FROM m, per, (VALUES (1,810),(2,1590),(3,2255)) AS c(rn,gs)
        WHERE t.id = m.id AND m.rn = c.rn;`);

  // Plausible stat line behind the 2-1 score — goals imply shots! The
  // viewer's stats panel reads live_match_counters (unattributed tallies,
  // not timeline moments), so writing tallies keeps the timeline as recorded
  // while the panel reads coherent: shots-on-target >= goals on each side.
  const stats = [
    ['shot_on', 'us', 5], ['shot_off', 'us', 3], ['corner', 'us', 3], ['foul', 'us', 4],
    ['shot_on', 'them', 3], ['shot_off', 'them', 2], ['corner', 'them', 2], ['foul', 'them', 5],
  ];
  psql(`INSERT INTO live_match_counters (live_session_id, type, side, count, created_at, updated_at)
    VALUES ${stats.map(([t, s, c]) => `(${runId}, '${t}', '${s}', ${c}, now(), now())`).join(', ')}
    ON CONFLICT (live_session_id, type, side) DO UPDATE SET count = EXCLUDED.count;`);
  console.log('stat line written:', stats.map(([t, s, c]) => `${t}/${s}=${c}`).join(' '));

  // 4 ── the parent's view: share URL, logged out, phone portrait
  const pub = await browser.newContext({ viewport: { width: 402, height: 860 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const v = await pub.newPage();
  console.log('viewer', await go(v, `${viewerUrl}?lang=${lang}`, 2200, 45000));
  await v.screenshot({ path: resolve(OUT, `live-viewer-phone${sfx}.png`), clip: { x: 0, y: 0, width: 402, height: 860 } });
  console.log('saved live-viewer-phone' + sfx);
  await pub.close();
} finally {
  try { await browser?.close(); } catch { /* browser may never have launched */ }
  // 5 ── leave no trace: drop the match event (cascades run/moments/periods/counters)
  cleanup();
}
console.log('DONE live-viewer lang=' + lang);
