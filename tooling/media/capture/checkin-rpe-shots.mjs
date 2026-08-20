// Screenshots for the 2026-08-20 newsletter: the RPE page, the Wellness 7-day
// trend, the player-portal check-in CTA, and the calendar's check-in chips.
//
// The demo teams carry REAL club names (sidebar, top bar, page H1, and the
// portal's own header), so every shot here is cropped to a specific element
// BELOW those chrome areas — never a full-page capture.
//
// All four pages are fully translated, so this runs per locale. The anchors we
// select on are rendered strings, which differ by locale: they are listed in
// STRINGS rather than guessed, and come straight from the app's lang files
// (calendar.checkin.state_off, rpe.grid.title, wellness.trend_title,
// portal.*.checkin_action).
//
// Usage: STRIVN_APP_URL=http://127.0.0.1:18082 ./run.sh capture/checkin-rpe-shots.mjs [fr|en|nl|de|pt|es]
import { resolve } from 'node:path';
import { DIR, BASE } from '../config.mjs';
import { chromium, coachLogin, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
const TEAM = process.env.STRIVN_TEAM || '1';
const PLAYER_ID = process.env.STRIVN_PORTAL_ID || 'kylian.demo@strivn.test';
const PLAYER_PW = process.env.STRIVN_PORTAL_PW || 'portalpass';

const STRINGS = {
  fr: { off: 'Off',        grid: 'RPE par séance',  trend: 'Tendance sur 7 jours', cta: 'Faire mon check-in' },
  en: { off: 'Off',        grid: 'RPE by session',  trend: '7-day trend',          cta: 'Do my check-in' },
  nl: { off: 'Uit',        grid: 'RPE per sessie',  trend: 'Trend over 7 dagen',   cta: 'Mijn check-in doen' },
  de: { off: 'Aus',        grid: 'RPE pro Einheit', trend: '7-Tage-Trend',         cta: 'Meinen Check-in machen' },
  pt: { off: 'Desligado',  grid: 'RPE por sessão',  trend: 'Tendência de 7 dias',  cta: 'Fazer o meu check-in' },
  es: { off: 'Off',        grid: 'RPE por sesión',  trend: 'Tendencia de 7 días',  cta: 'Hacer mi check-in' },
};
const S = STRINGS[lang];
if (!S) { throw new Error('Unsupported locale: ' + lang); }

const BCP47 = { fr: 'fr-FR', en: 'en-GB', nl: 'nl-NL', de: 'de-DE', pt: 'pt-PT', es: 'es-ES' };
const browser = await chromium.launch();

/* ---------- coach side ---------- */
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1200 }, locale: BCP47[lang], deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await coachLogin(p, lang);

  // RPE — KPI row through the end of the per-session grid. Clipped from the
  // KPI card's top so the H1 ("RPE — <club>") stays out of frame.
  await go(p, `${BASE}/teams/${TEAM}/rpe?lang=${lang}`, 2000, 30000);
  {
    // No <section> wraps this card, and the innermost matching <div> is only
    // the header — walk up from the heading to the nearest rounded card box.
    const grid = p.locator(`h2:text-is("${S.grid}")`)
      .locator('xpath=ancestor::div[contains(@class,"rounded")][1]');
    // Horizontal extent comes from <main>, not from an individual card: the
    // KPI text node is only one column wide and would crop the row.
    const mainBox = await p.locator('main').first().boundingBox();
    const gridBox = await grid.boundingBox();
    // Start at the real top of the KPI cards. A fixed offset below the H1
    // catches the range/type filter pills, which sit to its right and hang
    // lower — they bleed into the frame as a clipped fragment.
    const top = await p.evaluate(() => {
      const h1 = document.querySelector('main h1');
      const h1Bottom = h1 ? h1.getBoundingClientRect().bottom : 0;
      const tops = [...document.querySelectorAll('main div[class*="rounded"]')]
        .map((el) => el.getBoundingClientRect())
        .filter((r) => r.top > h1Bottom + 4 && r.width > 180 && r.height > 60)
        .map((r) => r.top);
      return (tops.length ? Math.min(...tops) : h1Bottom + 26) - 14;
    });
    await p.screenshot({
      path: resolve(OUT, `checkin-rpe-grid${sfx}.png`),
      clip: { x: mainBox.x, y: top, width: mainBox.width, height: (gridBox.y + gridBox.height) - top + 16 },
    });
    console.log('saved checkin-rpe-grid' + sfx);
  }

  // Wellness — the 7-day trend block. The heading sits OUTSIDE the list card
  // (title row + badge, then the card below), so neither element alone frames
  // it: clip from the heading down to the bottom of the card that follows.
  await go(p, `${BASE}/teams/${TEAM}/wellness?lang=${lang}`, 2000, 30000);
  {
    const heading = p.locator(`h2:text-is("${S.trend}"), h3:text-is("${S.trend}")`).first();
    const list = heading.locator('xpath=following::div[contains(@class,"rounded")][1]');
    const mainBox = await p.locator('main').first().boundingBox();
    const hBox = await heading.boundingBox();
    const lBox = await list.boundingBox();
    await p.screenshot({
      path: resolve(OUT, `checkin-wellness-trend${sfx}.png`),
      clip: { x: mainBox.x, y: hBox.y - 16, width: mainBox.width, height: (lBox.y + lBox.height) - hBox.y + 32 },
    });
    console.log('saved checkin-wellness-trend' + sfx);
  }

  // Calendar — the week-grid day headers carry the per-day check-in chip.
  await go(p, `${BASE}/teams/${TEAM}/calendar?lang=${lang}`, 2500, 30000);
  {
    // The chip renders its STATE as its label (the off-state string until a
    // day is armed). :visible matters — the mobile agenda renders the same
    // partial, and those hidden copies have no bounding box.
    const off = new RegExp(`^\\s*${S.off.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`);
    const chips = p.locator('button:visible').filter({ hasText: off });
    const n = await chips.count();
    if (n > 0) {
      // Four columns, not the whole week: the full 7-day strip is ~9:1, which
      // shrinks to an unreadable 54px tall at the newsletter's 504px width.
      const lastIdx = Math.min(n, 4) - 1;
      const first = await chips.first().boundingBox();
      const last = await chips.nth(lastIdx).boundingBox();
      const left = Math.min(first.x, last.x);
      const right = Math.max(first.x + first.width, last.x + last.width);
      // Day-header band only: the event rows below list a real fixture.
      await p.screenshot({
        path: resolve(OUT, `checkin-calendar-chips${sfx}.png`),
        clip: { x: left - 26, y: first.y - 86, width: (right - left) + 52, height: first.height + 104 },
      });
      console.log('saved checkin-calendar-chips' + sfx);
    } else {
      console.log('  NO CHIPS for ' + lang + ' (off label "' + S.off + '" not matched)');
    }
  }

  await ctx.close();
}

/* ---------- player portal ---------- */
{
  const ctx = await browser.newContext({ viewport: { width: 402, height: 900 }, locale: BCP47[lang], deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  // ?player_only=1 renders the player form alone — clicking an audience tab
  // would re-navigate and clear the fields we just typed.
  await p.goto(`${BASE}/login?as=player&player_only=1&lang=${lang}`, { waitUntil: 'domcontentloaded' });
  await p.fill('#identifier', PLAYER_ID);
  await p.fill('#player_password', PLAYER_PW);
  await p.click('form button[type=submit]');
  await p.waitForURL(/\/portal\//, { timeout: 20000 });
  await p.waitForTimeout(1500);

  // The amber check-in card. Cropped tight: the portal header above it shows
  // the club name, and the agenda below lists a real fixture.
  const cta = p.locator('a,button').filter({ hasText: S.cta }).first();
  const card = cta.locator('xpath=ancestor::*[self::div or self::section][1]');
  await card.screenshot({ path: resolve(OUT, `checkin-portal-cta${sfx}.png`) });
  console.log('saved checkin-portal-cta' + sfx);

  await ctx.close();
}

await browser.close();
