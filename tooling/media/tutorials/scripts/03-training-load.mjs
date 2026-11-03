// Tutorial 3 — Training load: player RPE (phone) → RPE grid → team load → ACWR trends → load alerts.
import { coachPage, go, sh, t, xq, PSQL, ARTISAN } from '../lib.mjs';

export default {
  eyebrow: 'Feature guide · Training load',
  title: 'Track training load with RPE & ACWR',
  subtitle: 'Players rate every session in two taps. strivn turns it into load, ACWR and alerts — automatically.',
  chapters: ['Players rate the session', 'RPE at a glance', 'Team load', 'ACWR & load alerts'],
  player: { identifier: '+32000001000', password: 'portalpass' },
  youtube: {
    title: 'Track training load with session RPE & ACWR | strivn feature guide',
    description: `How strivn monitors training load: players rate each session's effort (RPE) from their phone, and the staff get a session-by-session RPE grid, each player's load in arbitrary units, the acute:chronic workload ratio (ACWR) with monotony and strain, and automatic load alerts when someone spikes.`,
    tags: ['strivn', 'session RPE', 'sRPE', 'ACWR', 'acute chronic workload ratio', 'training load monitoring', 'injury prevention', 'sports science', 'football coaching app'],
  },
  // Nathan rates Saturday's match on camera: remove the previous take's answer.
  setup: () => { sh(`${PSQL} -c "DELETE FROM player_event_feedback WHERE player_id = 1 AND calendar_event_id = 100"`); sh(`${ARTISAN} cache:clear`); },
  scenes: [
    { device: 'mobile', as: 'player', eyebrow: 'Player app', title: 'Rate the session',
      prepare: (p) => go(p, '/portal/agenda'),
      steps: [
        { chapter: 'Players rate the session', caption: 'After each session, players are asked one thing: how hard was it?',
          run: async (h) => { const c = h.page.getByText(t('waiting for feedback')).first(); await h.spot(c.locator('xpath=ancestor::a[1] | ancestor::div[2]').first(), null, null, 8); await h.wait(800); await h.click(c, null, null, { spotlight: false, after: 1500 }); } },
        { caption: 'They tap a value from 1 (very easy) to 10 (maximal). Nathan found Saturday’s match hard: 8.',
          run: async (h) => { await h.scrollBy(300); const bar = h.page.locator(`button.ramp-step[aria-label^="${t('8 ')}"]:visible`).first(); await h.click(bar, null, null, { spotlight: false, after: 600 }); } },
        { caption: 'An optional comment, then Save. That’s it.',
          run: async (h) => { const field = h.page.locator('textarea:visible').first(); await h.moveToEl(field); await h.type(field, t('Legs heavy in the second half'), 50); await h.click(h.page.getByRole('button', { name: t('Save'), exact: true }).first(), null, null, { spotlight: false, after: 1500 }); } },
      ] },
    { prepare: (p) => coachPage(p, '/teams/1/wellness'),
      steps: [
        { chapter: 'RPE at a glance', caption: 'On the staff side, open Wellbeing › RPE. Every answer lands here, session by session.',
          run: async (h) => { await h.click(h.page.getByRole('link', { name: t('RPE'), exact: true }).first(), 'RPE', 1, { after: 1800 }); } },
        { caption: 'Player RPE, your own coach RPE, the gap between the two and the response rate over the last 4 weeks.',
          run: async (h) => { await h.spot(h.page.getByText(t('Response rate'), { exact: false }).first().locator(`xpath=ancestor::*[.//text()[contains(., ${xq(t('Player RPE'))})]][1]`), 'Summary', 2); } },
        { caption: 'One row per player, one column per session. A big gap tells you a player feels sessions harder than you planned.',
          run: async (h) => { await h.clear(); await h.scrollBy(300); const row = h.page.locator('tr').filter({ hasText: t('Sacha Dethier') }).first(); await h.spot(row, 'Player vs coach gap', 3); await h.moveToEl(row.locator('td').last()); } },
        { chapter: 'Team load', caption: 'Under Tracking › Load, RPE × minutes becomes each player’s load in arbitrary units (AU) — or GPS load once you import it.',
          run: async (h) => { await h.clear(); await h.click(h.page.getByRole('link', { name: t('Load'), exact: true }).first(), 'Load', 4, { after: 1800 }); await h.spot(h.page.getByText(t('Total load (AU)'), { exact: false }).first().locator('xpath=ancestor::div[2]'), 'Last 4 weeks', 5); } },
        { caption: 'Players are sorted by load, highest first, with each one’s sessions, average RPE and share of the top load.',
          run: async (h) => { await h.clear(); await h.scrollBy(260); const row = h.page.locator(':text-is("Théo Dandois"):visible').first().locator("xpath=ancestor::*[.//text()[contains(., '%')]][1]"); await h.spot(row, 'Highest load', 6); } },
        { chapter: 'ACWR & load alerts', caption: 'The Trends tab ranks players by ACWR — this week’s load against the last four. The usual band is 0.8 to 1.3.',
          run: async (h) => { await h.clear(); await h.scrollBy(-400); await h.click(h.page.getByRole('link', { name: t('Trends'), exact: true }).first(), 'Trends', 7, { after: 1800 }); await h.spot(h.page.getByText(t('ACWR ranking')).first().locator('xpath=ancestor::div[1]'), 'ACWR, monotony, strain', 8); } },
        { caption: 'When a player’s load jumps well above their own baseline, strivn raises a load alert.',
          run: async (h) => { await h.clear(); await h.page.mouse.move(800, 500); await h.scrollBy(2400, 50); const a = h.page.getByText(t('Load alerts'), { exact: true }).first().locator('xpath=ancestor::div[2]'); await h.spot(a, 'Load alerts', 9); } },
        { caption: 'View trend shows the weekly load, ACWR, monotony and strain behind the alert.',
          run: async (h) => { await h.clear(); await h.click(h.page.getByRole('link', { name: t('View trend') }).first(), 'View trend', 10, { after: 1800 }); await h.spot(h.page.getByText(t('Weekly ACWR, monotony and strain')).first().locator('xpath=ancestor::div[2]'), null, null, 6); } },
        { caption: 'Adjust the plan, then acknowledge the alert so the whole staff knows it was handled.',
          run: async (h) => { await h.clear(); const b = h.page.getByRole('button', { name: t('Acknowledge') }).first(); await h.spot(b, 'Acknowledge', 11); await h.moveToEl(b); } },
      ] },
  ],
};
