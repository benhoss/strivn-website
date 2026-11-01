// Tutorial 1 — Plan the week and send call-ups (calendar, RSVP, new event wizard).
import { coachPage, sh } from '../lib.mjs';

const ev = (id) => `[data-coach-target='calendar_event:${id}'][data-ev]:visible`;
const panel = (p) => p.locator('[x-show]').filter({ has: p.getByText('Targeted RSVP reminder') }).first();

export default {
  eyebrow: 'Feature guide · Calendar',
  title: 'Plan your week & send call-ups',
  subtitle: 'Schedule sessions, call up the squad and see who is coming — without a single WhatsApp poll.',
  chapters: ['Your week at a glance', 'Check who is coming', 'Create an event', 'Follow up call-ups'],
  youtube: {
    title: 'Plan your week & send call-ups | strivn feature guide',
    description: `How to run your team's week in strivn: read the match-day microcycle, check who confirmed for Saturday's match, create a new event with its call-up, and follow every send from one panel. Players answer on WhatsApp, email or the strivn app — answers land in the calendar automatically.`,
    tags: ['strivn', 'football coaching app', 'team calendar', 'call-ups', 'RSVP', 'convocation', 'team management', 'coach software', 'attendance tracking'],
  },
  // A real event is created on camera: remove the previous take's copy first.
  setup: () => { sh(`psql -h 127.0.0.1 -U p3rform -d p3rform -c "DELETE FROM calendar_events WHERE title = 'Video analysis — CS Pierrefonds'"`); },
  scenes: [{
    prepare: (p) => coachPage(p, '/teams/1/calendar'),
    steps: [
      { chapter: 'Your week at a glance', caption: 'Sessions & matches shows your whole week. Each day is tagged against the next match: MD-4, MD-1, match day.',
        run: async (h) => { await h.spot(h.page.locator('.grid.grid-cols-7').first(), 'Match-day microcycle', 1); await h.moveTo(1180, 270); } },
      { caption: 'Right below, the week’s attendance: who trained, who missed, at a glance.',
        run: async (h) => { await h.clear(); await h.scrollBy(330); await h.spot(h.page.getByText("This week's attendance").first().locator('xpath=ancestor::div[1]/following-sibling::*[1]'), 'Attendance', 2); } },
      { chapter: 'Check who is coming', caption: 'Open any session or match. Here, last Saturday’s match.',
        run: async (h) => { await h.clear(); await h.scrollBy(-330); await h.click(h.page.locator(ev(100)).first(), 'Open the match', 3, { after: 1200 }); } },
      { caption: '18 players confirmed, 1 is unsure. Answers arrive automatically from WhatsApp, email or the player app.',
        run: async (h) => { await h.spot(h.page.getByText('Responses', { exact: true }).first().locator('xpath=ancestor::div[2]'), 'Live responses', 4); } },
      { caption: 'The Players tab lists everyone called up, with their answer and any note they left.',
        run: async (h) => { await h.click(h.page.getByText('Players (').first(), 'Players', 5, { after: 700 }); await h.scrollBy(380); await h.wait(600); } },
      { caption: 'Close the panel when you’re done.', hold: 1800,
        run: async (h) => { await h.page.keyboard.press('Escape'); await h.wait(600); } },
      { chapter: 'Create an event', caption: 'To schedule something new, click + Event and choose a type.',
        run: async (h) => { await h.click(h.page.getByRole('button', { name: 'Event', exact: true }), '+ Event', 6, { after: 900 }); } },
      { caption: 'Let’s book a video session before the next match: pick Meeting.',
        run: async (h) => { await h.click(h.page.getByText('Meeting', { exact: true }).first(), 'Meeting', 7, { after: 900 }); } },
      { caption: 'Fill in the essentials: title, date, time, duration and place.',
        run: async (h) => {
          const p = h.page;
          await h.moveToEl(p.locator('input[name=title]:visible')); await h.type(p.locator('input[name=title]:visible'), 'Video analysis — CS Pierrefonds', 45);
          await h.moveToEl(p.locator('input[x-model=startHour]:visible')); await p.locator('input[x-model=startHour]:visible').fill('18:00'); await h.wait(300);
          await h.click(p.getByRole('button', { name: '1h', exact: true }), null, null, { spotlight: false, after: 300 });
          await h.moveToEl(p.locator('input[name=location]:visible')); await h.type(p.locator('input[name=location]:visible'), 'Clubhouse', 55);
        } },
      { caption: 'Next, the call-up: the whole active squad is selected — switch to Selection to pick players.',
        run: async (h) => { await h.click(h.page.getByRole('button', { name: 'Continue', exact: true }), 'Continue', 8, { after: 900 }); await h.spot(h.page.getByRole('button', { name: 'Active team', exact: true }).last().locator('xpath=..'), 'Who is called up', 9); } },
      { caption: 'Players confirm before the deadline, and this is the exact message they’ll receive.',
        run: async (h) => { await h.clear(); await h.page.mouse.move(1300, 600); await h.scrollBy(500); await h.spot(h.page.getByText('WhatsApp message', { exact: false }).last().locator('xpath=ancestor::div[1]'), 'Message preview', 10); } },
      { caption: 'Create the event. The call-up goes out on its own — no group chat needed.',
        run: async (h) => { await h.click(h.page.getByRole('button', { name: 'Create event', exact: true }), 'Create event', 11, { after: 1500 }); await h.page.keyboard.press('Escape'); await h.wait(700); } },
      { caption: 'Here it is on Monday. Answers will fill in here as players reply.',
        run: async (h) => { await h.click(h.page.getByRole('button', { name: 'Next week' }), null, null, { spotlight: false, after: 1400 }); const c = h.page.locator('[data-coach-target^="calendar_event:"]:visible').filter({ hasText: 'Video analysis' }).first(); await h.spot(c, 'New event', 12); await h.moveToEl(c); } },
      { chapter: 'Follow up call-ups', caption: 'Call-ups tracks every send: what went out, what’s scheduled and who still has to answer.',
        run: async (h) => { await h.clear(); await h.click(h.page.locator('button[aria-label^="View the timeline"]:visible').first(), 'Call-ups', 13, { after: 1400 }); await h.page.mouse.move(1300, 500); await h.scrollBy(300); } },
      { caption: 'Need to nudge latecomers? On any event, Send reminder only reaches players who haven’t answered yet.',
        run: async (h) => { await h.page.keyboard.press('Escape'); await h.wait(700); await h.click(h.page.locator(ev(105)).first(), null, null, { spotlight: false, after: 1200 }); await h.spot(h.page.getByRole('button', { name: /Send reminder/ }).first(), 'Targeted reminder', 14); await h.moveToEl(h.page.getByRole('button', { name: /Send reminder/ }).first()); } },
    ],
  }],
};
