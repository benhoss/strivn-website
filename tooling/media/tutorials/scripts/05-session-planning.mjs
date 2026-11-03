// Tutorial 5 — Exercise library → plan a session → running order with live load.
import { coachPage, t, tk, xq } from '../lib.mjs';

export default {
  eyebrow: 'Feature guide · Session planning',
  title: 'Plan sessions from your exercise library',
  subtitle: 'Build the running order from your own drills, with time, RPE and load calculated as you go.',
  chapters: ['Your exercise library', 'The week’s sessions', 'The running order'],
  youtube: {
    title: 'Plan training sessions from your exercise library | strivn feature guide',
    description: `How to plan a training session in strivn: browse and search the staff's shared exercise library (with metrics learned from real sessions), open the week's trainings tagged against match day, and build the running order block by block — duration, planned RPE and load (AU) update live.`,
    tags: ['strivn', 'session planning', 'training session planner', 'exercise library', 'football drills', 'periodization', 'microcycle', 'coach software', 'training load'],
  },
  scenes: [{
    prepare: (p) => coachPage(p, '/teams/1/exercises'),
    steps: [
      { chapter: 'Your exercise library', caption: 'The exercise library holds every drill your staff uses — text, video, photo or diagram — shared with your colleagues.',
        run: async (h) => { await h.spot(h.page.getByText(t('12 exercises'), { exact: false }).first().locator('xpath=..'), 'Shared drills', 1); await h.moveTo(1000, 600); } },
      { caption: 'Search or filter to find a drill in seconds.',
        run: async (h) => { await h.clear(); const s = h.page.locator(`input[placeholder^="${t('Search for an exercise')}"]:visible`).first(); await h.moveToEl(s); await h.type(s, t('rondo'), 90); await s.press('Enter').catch(() => {}); await h.wait(1600); } },
      { caption: 'Open it. Each exercise learns from real sessions: what was planned, and the effort players actually reported.',
        run: async (h) => { await h.click(h.page.getByText(t('Rondo 5 v 2'), { exact: true }).first(), 'Rondo 5 v 2', 2, { after: 1800 }); await h.spot(h.page.getByText(t('Key metrics')).first().locator(`xpath=ancestor::*[.//text()[contains(., ${xq(t('Felt RPE'))})]][1]`), 'Learned from real sessions', 3); } },
      { chapter: 'The week’s sessions', caption: 'Plan a session lists the week’s trainings, each tagged against the next match.',
        run: async (h) => { await h.clear(); await h.page.keyboard.press('Escape'); await h.wait(700); await h.click(h.page.getByRole('link', { name: t('Plan a session'), exact: true }).first(), 'Plan a session', 4, { after: 1600 }); await h.click(h.page.getByRole('link', { name: t('Next week') }).first(), null, null, { spotlight: false, after: 1600 }); await h.spot(h.page.getByText(t('Week of'), { exact: false }).first().locator('xpath=ancestor::div[2]'), 'MD-4 … Match', 5); } },
      { caption: 'Open Tuesday’s training: 90 minutes planned, ready for the 18 players called up.',
        run: async (h) => { await h.clear(); await h.click(h.page.getByText(t('Open'), { exact: true }).first(), 'Open', 6, { after: 1800 }); await h.spot(h.page.getByText(t('Planned duration'), { exact: true }).first().locator('xpath=ancestor::div[2]'), null, null, 8); } },
      { chapter: 'The running order', caption: 'Edit the running order to build the session block by block.',
        run: async (h) => { await h.clear(); await h.click(h.page.getByRole('button', { name: t('Edit the running order') }).first(), 'Edit the running order', 7, { after: 2000 }); } },
      { caption: 'Every block has its start time, duration, planned RPE and load in AU — and links to drills from your library.',
        run: async (h) => { const b = h.page.locator(`:text-is("${t('Small-sided game')}"):visible`).first().locator(`xpath=ancestor::*[.//text()[contains(., ${xq(t('AU'))})]][1]`); await h.spot(b, 'Block C', 8); } },
      { caption: 'Your library sits on the left: search it, preview a drill, then drag it into the session.',
        run: async (h) => { await h.clear(); const s = h.page.locator(`input[placeholder^="${t('Search')}"]:visible`).first(); await h.moveToEl(s); await h.type(s, t('transition'), 80); await h.wait(900); const r = h.page.locator(`:text-is("${t('Fast transition 3 v 2')}"):visible`).first(); await h.spot(r.locator('xpath=ancestor::*[2]'), 'Drag into the plan', 9); await h.moveToEl(r); } },
      { caption: 'Totals update as you go: duration, load, average RPE and number of blocks.',
        run: async (h) => { await h.clear(); await h.spot(h.page.locator(`:text-is("${t('Avg RPE')}"):visible`).first().locator(`xpath=ancestor::*[.//text()[contains(., ${xq(t('blocks'))})]][1]`), 'Live totals', 10); } },
      { caption: 'Click Done. The plan feeds the week’s planned load, and the live session view on the pitch.',
        run: async (h) => { await h.clear(); await h.click(h.page.getByRole('button', { name: tk('builder', 'Done'), exact: true }).first(), 'Done', 11, { after: 1800 }); } },
    ],
  }],
};
