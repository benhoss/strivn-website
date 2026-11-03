// Tutorial 2 — Morning check-in (player phone) → team wellness & readiness (coach).
import { coachPage, go, sh, t, xq, PSQL, ARTISAN } from '../lib.mjs';

/** Drag a range input's thumb to `value`, with the visible cursor following. */
async function drag(h, input, value) {
  const b = await input.boundingBox(); if (!b) return;
  const [min, max, cur] = await input.evaluate((e) => [+e.min, +e.max, +e.value]);
  const x = (v) => b.x + 12 + ((v - min) / (max - min)) * (b.width - 24);
  const y = b.y + b.height / 2;
  await h.moveTo(x(cur), y, 450);
  await h.page.mouse.down();
  const steps = 14;
  for (let i = 1; i <= steps; i++) {
    const xi = x(cur) + ((x(value) - x(cur)) * i) / steps;
    await h.page.mouse.move(xi, y);
    await h.page.evaluate(([xx, yy]) => { const c = document.getElementById('__tut_cursor'); c.style.transition = 'none'; c.style.transform = `translate(${xx}px,${yy}px)`; window.__tutPos = [xx, yy]; }, [xi, y]);
    await h.wait(40);
  }
  await h.page.mouse.up();
  await h.wait(350);
}

export default {
  eyebrow: 'Feature guide · Wellness',
  title: 'Morning check-in & squad readiness',
  subtitle: 'Players answer four questions in ten seconds. You see who is ready, who to watch and why.',
  chapters: ['The player’s check-in', 'Team wellness', 'Readiness', 'Act on it'],
  player: { identifier: '+32000001000', password: 'portalpass' },
  youtube: {
    title: 'Morning wellness check-in & squad readiness | strivn feature guide',
    description: `How the daily check-in works in strivn: a player answers fatigue, sleep, stress and mood from the phone in about ten seconds, and the staff instantly see the squad's wellness trends and a readiness call for every player — combining check-ins, training load (ACWR) and medical status.`,
    tags: ['strivn', 'wellness questionnaire', 'athlete monitoring', 'readiness', 'ACWR', 'player check-in', 'sports science', 'football coaching app', 'load management'],
  },
  // Nathan answers on camera: clear today's answer from the previous take.
  setup: () => { sh(`${PSQL} -c "DELETE FROM wellness_entries WHERE player_id = 1 AND date = '2026-11-01'"`); sh(`${ARTISAN} cache:clear`); },
  scenes: [
    { device: 'mobile', as: 'player', eyebrow: 'Player app', title: 'The morning check-in',
      prepare: (p) => go(p, '/portal/agenda'),
      steps: [
        { chapter: 'The player’s check-in', caption: 'Every morning, players find their check-in at the top of the app — or get it by notification, WhatsApp or email.',
          run: async (h) => { await h.spot(h.page.getByText(t('Today’s check-in')).first().locator('xpath=ancestor::div[2]'), null, null, 10); } },
        { caption: 'One tap to start.', hold: 2200,
          run: async (h) => { await h.click(h.page.getByText(t('Do my check-in')).first(), null, null, { spotlight: false, after: 1600 }); } },
        { caption: 'Four sliders: fatigue, sleep, stress and mood. Nathan slept well and feels fresh today.',
          run: async (h) => { await h.scrollBy(380); const r = h.page.locator('input[type=range]'); await drag(h, r.nth(0), 3); await drag(h, r.nth(1), 8); await drag(h, r.nth(2), 2); await drag(h, r.nth(3), 8); } },
        { caption: 'Something hurts? Turning on Pain / Injury alerts the medical staff straight away.',
          run: async (h) => { await h.spot(h.page.getByText(t('Pain / Injury')).first().locator('xpath=..'), null, null, 8); await h.moveToEl(h.page.getByText(t('Pain / Injury')).first()); } },
        { caption: 'Confirm — about ten seconds in total.',
          run: async (h) => { await h.clear(); await h.click(h.page.getByRole('button', { name: t('Confirm'), exact: true }), null, null, { spotlight: false, after: 1800 }); await h.scrollBy(-600); } },
      ] },
    { prepare: (p) => coachPage(p, '/teams/1/wellness'),
      steps: [
        { chapter: 'Team wellness', caption: 'On the staff side, Team wellness gathers today’s answers and flags anyone whose 7-day trend is drifting.',
          run: async (h) => { await h.spot(h.page.getByText(t('7-day trend')).first().locator('xpath=..'), 'Players to watch', 1); await h.moveTo(1420, 320); } },
        { caption: 'Each bar is one day. Tom’s fatigue has been rising for three days in a row.',
          run: async (h) => { const row = h.page.locator('div').filter({ hasText: t('Tom Bastin') }).filter({ hasText: t('rising') }).filter({ hasNotText: t('Théo') }).last(); await h.spot(row, 'Fatigue rising', 2); await h.moveTo(1450, 380); } },
        { chapter: 'Readiness', caption: 'Readiness goes one step further: check-ins, training load and medical status become one call per player.',
          run: async (h) => { await h.clear(); await h.click(h.page.getByRole('link', { name: t('Readiness'), exact: true }).first(), 'Readiness', 3, { after: 1800 }); } },
        { caption: 'Today: 2 at risk, 8 to follow up and 10 ready — Nathan, who just checked in, is one of them.',
          run: async (h) => { await h.spot(h.page.locator('div').filter({ has: h.page.getByText(t('Overview'), { exact: true }) }).filter({ hasText: t('Checked in today') }).last(), 'Squad overview', 4); } },
        { caption: 'Louis Peeters is at risk: very high fatigue and his recent load is trending up (ACWR 0.99).',
          run: async (h) => { const card = h.page.getByText(t('Louis Peeters'), { exact: true }).first().locator(`xpath=ancestor::*[.//text()[contains(., ${xq(t('Ask the AI'))})]][1]`); await h.spot(card, 'At risk', 5); await h.moveToEl(h.page.getByText(t('ACWR')).first()); } },
        { caption: 'Maxime is under medical watch: pain and high fatigue, so the advice is to ease him off.',
          run: async (h) => { const card = h.page.locator(':text-is("Maxime Delhaize"):visible').first().locator(`xpath=ancestor::*[.//text()[contains(., ${xq(t('Ask the AI'))})]][1]`); await h.spot(card, 'Under medical watch', 6); } },
        { caption: 'Scroll down for players to follow up and those ready to train — every line says why.',
          run: async (h) => { await h.clear(); await h.page.mouse.move(700, 500); await h.scrollBy(900, 40); await h.wait(500); } },
        { chapter: 'Act on it', caption: 'The same signals feed Today’s “Decide now” list, so the staff starts every morning with what needs a decision.',
          run: async (h) => { await h.click(h.page.getByRole('link', { name: t('Today'), exact: true }).first(), 'Today', 7, { after: 1800 }); await h.spot(h.page.getByText(t('Decide now'), { exact: true }).first().locator('xpath=ancestor::div[2]'), 'Decide now', 8); } },
      ] },
  ],
};
