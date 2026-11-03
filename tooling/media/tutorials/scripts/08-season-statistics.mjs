// Tutorial 8 — Season statistics: record, form, goals, players.
import { coachPage, t, tk } from '../lib.mjs';

const tab = (h, name) => h.page.getByRole('tab', { name: tk('tab', name), exact: true }).first();

export default {
  eyebrow: 'Feature guide · Statistics',
  title: 'Your season in numbers',
  subtitle: 'Record, form, goals and every player’s season — built from the match sheets you already fill in.',
  chapters: ['Record & form', 'Goals', 'Players', 'Training'],
  youtube: {
    title: 'Team & player season statistics | strivn feature guide',
    description: `Where strivn's statistics come from and how to read them: the team record and form, home vs away, holding a lead, set-piece insights, how goals were scored and conceded, every player's minutes, goals and assists, and training attendance — all built automatically from match sheets and session reviews.`,
    tags: ['strivn', 'football statistics', 'team statistics', 'player statistics', 'match record', 'goals analysis', 'set pieces', 'football coaching app', 'season review'],
  },
  scenes: [{
    prepare: (p) => coachPage(p, '/teams/1/statistiques'),
    steps: [
      { chapter: 'Record & form', caption: 'Analytics › Statistics opens on the record: the form strip, points per match, goals for and against.',
        run: async (h) => { await h.spot(h.page.getByText(t('Form'), { exact: true }).first().locator('xpath=ancestor::div[2]'), 'Last 18 matches', 1); } },
      { caption: 'Home and away side by side, and what happens once you take the lead.',
        run: async (h) => { await h.clear(); await h.scrollToEl(h.page.getByText(t('Holding a result')).first(), 260); await h.spot(h.page.getByText(t('Holding a result')).first().locator('xpath=ancestor::div[2]'), 'Points dropped while leading', 2); } },
      { caption: 'strivn also flags what stands out — here, 65 % of goals conceded come from set pieces.',
        run: async (h) => { await h.clear(); await h.scrollBy(-900); await h.spot(h.page.getByText(t('of the goals conceded'), { exact: false }).first().locator('xpath=ancestor::div[1]'), 'Insight', 3); } },
      { caption: 'Filter by period, competition or venue — every figure updates.',
        run: async (h) => { await h.clear(); await h.click(h.page.getByRole('link', { name: t('Last 5 games') }).first(), 'Last 5 games', 4, { after: 1600 }); await h.click(h.page.getByRole('link', { name: t('This season') }).first(), null, null, { spotlight: false, after: 1400 }); } },
      { chapter: 'Goals', caption: 'Goals breaks down how you score and concede: minute, situation and who was involved.',
        run: async (h) => { await h.click(tab(h, 'Goals'), 'Goals', 5, { after: 1800 }); await h.page.mouse.move(1000, 500); await h.scrollBy(400); } },
      { chapter: 'Players', caption: 'Players shows each one’s contribution: minutes, goals, assists, and goals conceded while on the pitch.',
        run: async (h) => { await h.scrollBy(-600); await h.click(tab(h, 'Players'), 'Players', 6, { after: 1800 }); await h.page.mouse.move(1000, 500); await h.scrollBy(300); } },
      { chapter: 'Training', caption: 'Training shows who misses sessions, planned vs actual load, and how hard each type of block really felt.',
        run: async (h) => { await h.scrollBy(-500); await h.click(tab(h, 'Training'), 'Training', 7, { after: 1800 }); await h.page.mouse.move(1000, 500); await h.scrollBy(300); } },
      { caption: 'Nothing to type twice: these numbers come from the match sheets and session reviews you already complete.',
        run: async (h) => { await h.scrollBy(-500); await h.click(tab(h, 'Record'), 'Record', 8, { after: 1600 }); } },
    ],
  }],
};
