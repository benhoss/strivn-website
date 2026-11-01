// Tutorial 6 — GPS: squad status, a player's detail, matches vs his usual, comparing two matches.
import { coachPage } from '../lib.mjs';

export default {
  eyebrow: 'Feature guide · GPS',
  title: 'Read your GPS data',
  subtitle: 'Every import becomes a squad status, a player file and match-by-match comparisons — against each player’s own targets.',
  chapters: ['Squad status', 'One player in detail', 'Match by match', 'Compare two matches'],
  youtube: {
    title: 'Analyse GPS data for your squad | strivn feature guide',
    description: `How strivn turns GPS exports (Catapult, STATSports, Polar, SPT and CSV) into decisions: a squad status against each player's targets, a player file with speed zones and internal vs external load, each match read against the player's own usual output, and side-by-side comparison of two matches.`,
    tags: ['strivn', 'GPS tracking', 'football GPS', 'Catapult', 'STATSports', 'high intensity distance', 'sports science', 'performance analysis', 'load monitoring'],
  },
  scenes: [{
    prepare: (p) => coachPage(p, '/teams/1/gps'),
    steps: [
      { chapter: 'Squad status', caption: 'GPS › Analysis opens on the squad status: the latest value of every player, read against his own target.',
        run: async (h) => { await h.spot(h.page.getByText('GPS — squad status').first().locator('xpath=ancestor::div[2]'), 'Squad status', 1); await h.moveTo(1180, 450); } },
      { caption: 'Amber is under target, green on target, red above. The median line gives you the squad’s reference.',
        run: async (h) => { await h.clear(); const row = h.page.locator(':text-is("Lucas Bourgeois"):visible').first().locator("xpath=ancestor::*[.//text()[contains(., 'usual')]][1]"); await h.spot(row, 'Above target', 2); } },
      { caption: 'Filter by trainings or matches, and choose the period — from the last 7 days to the whole season.',
        run: async (h) => { await h.clear(); const seg = h.page.getByText('Trainings', { exact: true }).first().locator('xpath=..'); await h.click(seg.getByText('Matches', { exact: true }), 'Matches only', 3, { after: 1600 }); await h.click(h.page.getByText('Trainings', { exact: true }).first().locator('xpath=..').getByText('All', { exact: true }), null, null, { spotlight: false, after: 1200 }); } },
      { chapter: 'One player in detail', caption: 'Click a value to open the player: his speed zones session by session, and his targets per band.',
        run: async (h) => { await h.click(h.page.getByText('1 128', { exact: true }).first(), 'Lucas Bourgeois', 4, { after: 1800 }); await h.spot(h.page.getByText('Player GPS targets').first().locator('xpath=ancestor::div[1]'), null, null, 8); } },
      { caption: 'Further down, internal load (sRPE) against external load (GPS): a widening gap is an early warning.',
        run: async (h) => { await h.clear(); const panel = h.page.getByText('Internal / external load').first(); await panel.scrollIntoViewIfNeeded().catch(() => {}); await h.wait(600); await h.spot(panel.locator('xpath=following-sibling::*[1]'), 'Ratio vs his baseline', 5); } },
      { chapter: 'Match by match', caption: 'Matches reads every match against the player’s own recent form: the band is his usual spread.',
        run: async (h) => { await h.clear(); await h.page.keyboard.press('Escape'); await h.wait(500); await h.click(h.page.getByRole('link', { name: 'Matches', exact: true }).first(), 'Matches', 6, { after: 1800 }); } },
      { caption: 'Pick a player at the top: one row per match, each value with its gap to his usual output.',
        run: async (h) => { await h.click(h.page.getByText('Lucas', { exact: true }).first(), null, null, { spotlight: false, after: 1500 }); await h.spot(h.page.getByText('Match', { exact: true }).nth(1).locator("xpath=ancestor::*[.//text()[contains(., 'Top speed')]][1]"), 'Each match vs his usual', 7); } },
      { chapter: 'Compare two matches', caption: 'Comparisons puts two events side by side — here the last two matches, on the metrics you choose.',
        run: async (h) => { await h.clear(); await h.click(h.page.getByRole('link', { name: 'Comparisons', exact: true }).first(), 'Comparisons', 8, { after: 1600 }); await h.click(h.page.getByRole('button', { name: 'Compare', exact: true }).first(), 'Compare', 9, { after: 2000 }); } },
      { caption: 'Team averages first, then every player: who ran more, who sprinted less, and by how much.',
        run: async (h) => { await h.page.mouse.move(1000, 500); await h.scrollToEl(h.page.getByText('Per-player detail').first(), 120); await h.spot(h.page.getByText('Per-player detail').first().locator('xpath=ancestor::div[2]'), 'Per-player detail', 10); } },
      { caption: 'New data arrives through Imports — a file from your GPS system, or an automatic cloud sync on Pro.',
        run: async (h) => { await h.clear(); await h.scrollBy(-2000, 30); await h.click(h.page.getByRole('link', { name: 'Imports', exact: true }).first(), 'Imports', 11, { after: 1800 }); } },
    ],
  }],
};
