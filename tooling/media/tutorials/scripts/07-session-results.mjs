// Tutorial 7 — Session results: compare the coach's read with the players', then a match review.
import { coachPage } from '../lib.mjs';

export default {
  eyebrow: 'Feature guide · Session results',
  title: 'Review sessions & matches',
  subtitle: 'Your read of the session next to the players’ feedback, individual evaluations, and the full match sheet.',
  chapters: ['Every past session', 'Coach vs players', 'Individual evaluations', 'The match sheet'],
  youtube: {
    title: 'Review training sessions & matches with player feedback | strivn feature guide',
    description: `How to close the loop after every session in strivn: see which sessions still need a review, compare your perceived intensity with the players' RPE answers, rate and note each player, and keep a full match sheet — score, timeline, team stats and playing time — that feeds player load automatically.`,
    tags: ['strivn', 'session review', 'match report', 'player evaluation', 'RPE', 'coach notes', 'football coaching app', 'match statistics', 'playing time'],
  },
  scenes: [{
    prepare: (p) => coachPage(p, '/teams/1/sessions/results'),
    steps: [
      { chapter: 'Every past session', caption: 'Session results lists every past session and match, with how many players gave feedback and whether you reviewed it.',
        run: async (h) => { await h.spot(h.page.getByText('Player feedback', { exact: false }).first().locator('xpath=ancestor::table[1] | ancestor::div[2]').first(), 'Feedback & review', 1); await h.moveTo(980, 330); } },
      { caption: 'Filter by trainings, matches or sessions still waiting for your review.',
        run: async (h) => { await h.clear(); const grp = h.page.getByText('Recovery', { exact: true }).first().locator('xpath=..'); await h.click(grp.getByText('Training', { exact: true }), 'Training', 2, { after: 1500 }); await h.click(grp.getByText('All', { exact: true }), null, null, { spotlight: false, after: 1200 }); } },
      { chapter: 'Coach vs players', caption: 'Open Wednesday’s training. Your RPE sits next to the players’ average and their distribution.',
        run: async (h) => { await h.click(h.page.locator('a[href$="/sessions/results/97"]').first(), 'Open', 3, { after: 1800 }); await h.spot(h.page.getByText('Feeling', { exact: true }).first().locator('xpath=ancestor::div[2]'), 'Coach 5 · players 5.5', 4); } },
      { caption: 'Your review: perceived intensity, how the session went, its real duration and your notes.',
        run: async (h) => { await h.clear(); await h.scrollToEl(h.page.getByText('Coach review', { exact: true }).first(), 110); await h.spot(h.page.getByText('Coach review', { exact: true }).first().locator('xpath=..'), 'Coach review', 5); } },
      { chapter: 'Individual evaluations', caption: 'Then each player: present or not, a rating out of 10 and a short observation for the staff.',
        run: async (h) => { await h.clear(); await h.scrollToEl(h.page.getByText('Individual evaluation', { exact: true }).first(), 110); const row = h.page.locator(':text-is("Lucas Bourgeois"):visible').first().locator("xpath=ancestor::*[.//input[@type='text' or not(@type)] or .//textarea][1]"); await h.spot(row, 'One line per player', 6); } },
      { caption: 'Players’ own comments appear alongside, so you see how the session felt from the inside.',
        run: async (h) => { await h.clear(); await h.scrollBy(-2600, 40); const c = h.page.getByText('I was in it', { exact: false }).first(); if (await c.count()) { await c.scrollIntoViewIfNeeded(); await h.spot(c.locator('xpath=ancestor::*[2]'), 'Player comments', 7); } } },
      { chapter: 'The match sheet', caption: 'For a match, the review is the match sheet: score, and every goal, card and substitution on a timeline.',
        run: async (h) => { await h.clear(); await h.page.goBack(); await h.wait(1500); await h.ensure(); await h.click(h.page.locator('a[href$="/sessions/results/100"]').first(), 'Saturday’s match', 8, { after: 1800 }); await h.spot(h.page.getByText('Match events', { exact: true }).first().locator('xpath=..'), '4 — 4', 9); } },
      { caption: 'Team stats against the opponent, and playing time — which goes straight into each player’s load.',
        run: async (h) => { await h.clear(); await h.scrollToEl(h.page.getByText('Playing time', { exact: true }).first(), 300); await h.spot(h.page.getByText('Playing time', { exact: true }).first().locator('xpath=..'), 'Included in player load', 10); } },
      { caption: 'Share a read-only match summary with families through a public link — and revoke it any time.',
        run: async (h) => { await h.clear(); const s = h.page.getByText('Public match summary').first(); await s.scrollIntoViewIfNeeded(); await h.wait(500); await h.spot(s.locator('xpath=ancestor::div[2]'), 'Public link', 11); } },
    ],
  }],
};
