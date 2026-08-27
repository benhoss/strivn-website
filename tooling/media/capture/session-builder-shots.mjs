// Screenshots for the 2026-08-27 newsletter: the reworked session builder.
//
// ⚠️ The demo squad is seeded with REAL football personalities (Ballack,
// Simeone, Garcia, Kovac). They appear in the right-hand "Effectif convoqué"
// panel and in the runner's group maker, so every crop here is scoped to the
// déroulé column and never includes that panel.
//
// Requires built assets (public/build + no public/hot) — with the vite dev
// server unreachable from a host browser, Alpine never boots and every panel
// stays collapsed.
//
// Usage: STRIVN_APP_URL=... STRIVN_COACH_PHONE=+32400000099 STRIVN_COACH_PW=strivn1234 \
//        ./run.sh capture/session-builder-shots.mjs [fr]
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;

const BCP47 = { fr: 'fr-FR', en: 'en-GB', nl: 'nl-NL', de: 'de-DE', pt: 'pt-PT', es: 'es-ES' };
const browser = await chromium.launch();
// Tall viewport on purpose: the page scrolls inside its own container, so
// window.scrollBy does nothing and element rects stay viewport-relative. Making
// the viewport big enough to hold the whole déroulé sidesteps scrolling
// entirely and lets us clip straight off the element's box.
const ctx = await browser.newContext({ viewport: { width: 1600, height: 2600 }, locale: BCP47[lang] || 'fr-FR', deviceScaleFactor: 2 });
const p = await ctx.newPage();
await coachLogin(p, lang);

// Page is heavy on first hit (planning queries + Vue island).
await go(p, `${BASE}/teams/${TEAM}/next-session?lang=${lang}`, 3000, 120000);

// --- 1. the read-only déroulé: vitals + the "EN MÊME TEMPS" segment --------
{
  // Clip from the heading downward rather than walking up to a wrapper: the
  // nearest rounded ancestor is a hidden layout container.
  // :visible matters — the page renders a mobile and a desktop variant of this
  // heading, and .first() otherwise resolves to the hidden one.
  const heading = p.locator('h2:visible, h3:visible').filter({ hasText: 'Déroulé de la séance' }).first();
  await heading.waitFor({ state: 'visible', timeout: 20000 });
  await p.waitForTimeout(700);
  // Walk up in-page to the first VISIBLE ancestor that is column-width. Several
  // wrappers above the heading are display:contents / zero-box, so Playwright's
  // ancestor::div[1] returns no bounding box at all.
  const rect = await p.evaluate(() => {
    const h = [...document.querySelectorAll('h2, h3')]
      .filter((el) => el.offsetParent !== null)
      .find((el) => el.textContent.includes('Déroulé de la séance'));
    if (!h) return null;
    let el = h;
    while (el && el !== document.body) {
      const r = el.getBoundingClientRect();
      if (r.width > 500 && r.width < 1150 && r.height > 200) {
        return { x: r.x, y: h.getBoundingClientRect().y, width: r.width };
      }
      el = el.parentElement;
    }
    return null;
  });
  await p.screenshot({
    path: resolve(OUT, `builder-deroule${sfx}.png`),
    // Height-capped: the full déroulé runs past the fold, and the point is the
    // vitals bar plus the first parallel segment, not the whole session.
    clip: { x: rect.x - 14, y: rect.y - 26, width: rect.width + 28, height: 900 },
  });
  console.log('saved builder-deroule' + sfx);
}

// --- 2. the full-screen builder -------------------------------------------
{
  const edit = p.locator('a, button').filter({ hasText: 'Modifier le déroulé' }).first();
  await edit.click();
  // Library / timeline / inspector only lay out side by side at >=1280px.
  await p.waitForTimeout(2500);
  // Height-capped to the content: the tall viewport we need for the read-only
  // shot leaves a large empty area under the builder.
  const bottom = await p.evaluate(() => {
    const marks = [...document.querySelectorAll('*')]
      .filter((el) => /Charge externe estimée|Charge planifiée/i.test(el.textContent || '') && el.children.length === 0);
    const last = marks[marks.length - 1];
    return last ? last.getBoundingClientRect().bottom + 40 : 1200;
  });
  await p.screenshot({
    path: resolve(OUT, `builder-fullscreen${sfx}.png`),
    clip: { x: 0, y: 0, width: 1600, height: Math.min(bottom, 2600) },
  });
  console.log('saved builder-fullscreen' + sfx);
}

await ctx.close();
await browser.close();
