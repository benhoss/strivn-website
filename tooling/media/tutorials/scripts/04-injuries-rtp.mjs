// Tutorial 4 — Declare an injury, follow return to play, keep call-ups honest.
import { coachPage, sh } from '../lib.mjs';

const sel = async (h, loc, value) => { await h.moveToEl(loc); await h.ripple(); await loc.selectOption(value); await h.wait(450); };

export default {
  eyebrow: 'Feature guide · Medical',
  title: 'Injuries & return to play',
  subtitle: 'Declare an injury in seconds, follow every recovery step and keep call-ups in sync with availability.',
  chapters: ['The medical board', 'Declare an injury', 'Return-to-play steps', 'Squad availability'],
  youtube: {
    title: 'Injury tracking & return to play | strivn feature guide',
    description: `How the medical staff works in strivn: the medical board, declaring an injury (type, zone, side, severity, availability, estimated return), following return-to-play steps, and the squad availability view that automatically keeps injured players out of call-ups.`,
    tags: ['strivn', 'injury tracking', 'return to play', 'sports medicine', 'physio software', 'medical staff', 'player availability', 'football coaching app', 'injury management'],
  },
  // Tom's injury is declared on camera and one RTP step is ticked: undo both.
  setup: () => {
    sh(`psql -h 127.0.0.1 -U p3rform -d p3rform -c "DELETE FROM injuries WHERE player_id = 4" -c "UPDATE return_to_play_steps SET completed_at = NULL, completed_by = NULL WHERE injury_id = 3 AND name = 'Quadriceps strengthening'"`);
    sh('cd /home/user/P3rform && php artisan cache:clear');
  },
  scenes: [{
    prepare: (p) => coachPage(p, '/teams/1/medical'),
    steps: [
      { chapter: 'The medical board', caption: 'The Medical board is the staff’s shared view of injuries, rehab and what needs reviewing today.',
        run: async (h) => { await h.spot(h.page.getByText('This week', { exact: true }).first().locator('xpath=..'), 'This week', 1); } },
      { chapter: 'Declare an injury', caption: 'Tom felt his hamstring during sprints. Open Injuries, then Declare.',
        run: async (h) => { await h.clear(); await h.click(h.page.getByRole('button', { name: 'Injuries', exact: true }), 'Injuries', 2, { after: 900 }); await h.click(h.page.getByRole('button', { name: 'Declare', exact: true }).first(), 'Declare', 3, { after: 1000 }); } },
      { caption: 'Pick the player, the type and the zone…',
        run: async (h) => { const p = h.page; await sel(h, p.locator('select[x-model=selectedPlayerId]:visible'), '4'); await sel(h, p.locator('select[x-model=type]:visible'), 'traumatique'); await sel(h, p.locator('select[x-model=zone]:visible'), 'ischio'); } },
      { caption: '…then the side, how severe it is and whether he can train or play.',
        run: async (h) => { const p = h.page; await h.click(p.getByRole('button', { name: 'Left', exact: true }).last(), null, null, { spotlight: false, after: 300 }); await h.click(p.getByRole('button', { name: '2', exact: true }).last(), null, null, { spotlight: false, after: 300 }); await h.spot(p.getByText('Unavailable', { exact: true }).last().locator('xpath=ancestor::button[1]'), 'Excluded from call-ups', 4); } },
      { caption: 'Add an estimated return date and a note for the staff.',
        run: async (h) => { const p = h.page; await h.clear(); await h.moveToEl(p.locator('input[x-model=estimatedReturnDate]:visible')); await p.locator('input[x-model=estimatedReturnDate]:visible').fill('2026-11-22'); await h.wait(300); const t = p.locator('textarea[x-model=notes]:visible'); await h.moveToEl(t); await h.type(t, 'Pull felt at the end of a sprint. Ice, no running for 72 h.', 38); } },
      { caption: 'Declare. The injury is shared with the whole staff instantly.',
        run: async (h) => { await h.click(h.page.getByRole('button', { name: 'Declare injury', exact: true }).last(), 'Declare injury', 5, { after: 1800 }); const c = h.page.locator(':text-is("Tom Bastin"):visible').first(); await h.spot(c.locator("xpath=ancestor::*[.//text()[contains(., 'Hamstring')]][1]"), 'New injury', 6); } },
      { chapter: 'Return-to-play steps', caption: 'Open an injury to follow it: days out, severity, estimated return and progress. Here, Maxime’s knee.',
        run: async (h) => { await h.clear(); const c = h.page.locator(':text-is("Maxime Delhaize"):visible').first(); await h.click(c, 'Open', 7, { after: 1800 }); await h.spot(h.page.getByText('Days out', { exact: false }).first().locator('xpath=ancestor::div[2]'), null, null, 8); } },
      { caption: 'Recovery steps take him back to the group. Tick a step off when it’s done.',
        run: async (h) => { await h.clear(); await h.scrollBy(300); const row = h.page.locator(':text-is("Quadriceps strengthening"):visible').first().locator("xpath=ancestor::*[.//text()[contains(., 'Done')]][1]"); await h.spot(row, 'Recovery step', 8); await h.click(row.getByText('Done').first(), null, null, { spotlight: false, after: 1500 }); } },
      { caption: 'Availability is set here too: unavailable, training only, or fit to play.',
        run: async (h) => { await h.spot(h.page.getByText('Availability', { exact: true }).first().locator('xpath=..'), 'Availability', 9); } },
      { chapter: 'Squad availability', caption: 'Back on the board, Availability shows who can be selected. Tom and Maxime are out — and left off call-ups automatically.',
        run: async (h) => { await h.clear(); await h.page.goto(h.page.url().replace(/\/injuries\/\d+.*$/, '/medical')); await h.wait(1500); await h.ensure(); await h.click(h.page.getByRole('button', { name: 'Availability', exact: true }), 'Availability', 10, { after: 1200 }); await h.spot(h.page.getByText('Unavailable', { exact: true }).first().locator('xpath=ancestor::div[2]'), 'Unavailable', 11); } },
    ],
  }],
};
