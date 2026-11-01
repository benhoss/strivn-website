// Tutorial 9 — Weekly reports and attendance export.
import { coachPage } from '../lib.mjs';

export default {
  eyebrow: 'Feature guide · Reports',
  title: 'Weekly reports & attendance',
  subtitle: 'Ready-made reports for the staff meeting, and attendance you can export in one click.',
  chapters: ['Load & availability', 'Team report', 'Player report', 'Attendance'],
  youtube: {
    title: 'Weekly staff reports & attendance export | strivn feature guide',
    description: `The reports strivn prepares for your weekly staff meeting: load and availability (ACWR, weekly load, days unavailable, matches missed), the team report (check-in response, fatigue, mood, load ratio and players at risk), a one-player report, and an attendance table you can export to CSV or send to your inbox.`,
    tags: ['strivn', 'weekly report', 'staff meeting', 'attendance tracking', 'ACWR', 'player availability', 'football coaching app', 'team report', 'export CSV'],
  },
  scenes: [{
    prepare: (p) => coachPage(p, '/teams/1/reports'),
    steps: [
      { chapter: 'Load & availability', caption: 'Automatic reports holds three weekly reports, ready for the staff meeting.',
        run: async (h) => { await h.spot(h.page.getByText('Weekly reports', { exact: true }).first().locator('xpath=following-sibling::*[1]'), 'Weekly reports', 1); } },
      { caption: 'Load & availability: each player’s load ratio and load over the last four weeks…',
        run: async (h) => { await h.clear(); await h.click(h.page.getByText('Load & availability').first(), 'Load & availability', 2, { after: 2000 }); } },
      { caption: '…then who was unavailable, and for how many days and matches.',
        run: async (h) => { await h.page.mouse.move(1000, 500); await h.scrollToEl(h.page.getByText('Days unavailable').first(), 140); await h.spot(h.page.getByText('Days unavailable').first().locator('xpath=ancestor::div[2]'), 'Availability', 3); } },
      { chapter: 'Team report', caption: 'The team report puts check-in response, fatigue, mood and load ratio in one table, with the change since last week.',
        run: async (h) => { await h.clear(); await h.page.goBack(); await h.wait(1500); await h.ensure(); await h.click(h.page.getByText('Team report').first(), 'Team report', 4, { after: 2000 }); await h.spot(h.page.getByText('Players at risk', { exact: false }).first().locator('xpath=ancestor::div[2]'), '2 at risk', 5); } },
      { caption: 'Switch to 4 or 12 weeks for a longer view. Any report opens in the Explorer to dig further.',
        run: async (h) => { await h.clear(); await h.click(h.page.getByRole('link', { name: '4 weeks', exact: true }).first(), '4 weeks', 6, { after: 1800 }); } },
      { chapter: 'Player report', caption: 'The player report follows one player: fatigue, sleep, load ratio and minutes over the last days.',
        run: async (h) => { await h.page.goBack(); await h.wait(1200); await h.page.goBack(); await h.wait(1500); await h.ensure(); await h.click(h.page.getByText('Player report').first(), 'Player report', 7, { after: 2200 }); await h.page.mouse.move(1000, 500); await h.scrollBy(300); } },
      { chapter: 'Attendance', caption: 'Attendance, under Tracking, shows who attended which event over any period.',
        run: async (h) => { await h.click(h.page.getByRole('link', { name: 'Attendance', exact: true }).first(), 'Attendance', 8, { after: 1800 }); await h.click(h.page.getByText('Last month', { exact: true }).first(), 'Last month', 9, { after: 2000 }); } },
      { caption: 'One row per player, one column per event — with each player’s attendance rate.',
        run: async (h) => { await h.page.mouse.move(1000, 520); await h.scrollBy(300); await h.wait(600); } },
      { caption: 'Export it as a CSV, or send it to your inbox for the club.',
        run: async (h) => { await h.scrollBy(-400); const ex = h.page.getByText('Export CSV', { exact: true }).first(); await h.spot(ex.locator('xpath=ancestor::*[.//text()[contains(., "Send to my email")]][1]'), 'Export', 10); await h.moveToEl(ex); } },
    ],
  }],
};
