// Screenshots for the 2026-09-03 newsletter: what the player now sees.
//
// Three subjects, four captures:
//   1. portail-gps-fr        - the player's "Mes stats GPS" tab (#528)
//   1b. portail-records-fr   - the player's "Mes records" card (#528)
//   2. portail-blessure-fr   - declaring an injury on a 3D body (#522)
//   3. wellness-mots-fr      - the staff wellness table, read in the player's words (#539)
//   4. gps-visible-joueur-fr - the coach's "Visible au joueur" column (#528)
//
// ⚠️ Requires the app on origin/main (>= 2026-09-02) with the 8 migrations run,
// AND built assets: with public/hot present, Laravel points the browser at the
// Vite dev server, which the headless browser cannot reach - Alpine never boots
// and every panel stays collapsed. Remove public/hot before running.
//
// ⚠️ The demo squad used to carry real football personalities (Ballack, Garcia,
// Simeone, Kovac). They were renamed in the demo DB on 2026-08-30, so coach-side
// lists are safe to show whole. Verify before adding a new capture: the check
// below fails the run rather than shipping a real name.
//
// ⚠️ The 3D body is WebGL. It DOES render in the headless shell (verified
// 2026-08-30), but the app also ships a list fallback: if the capture comes back
// without a canvas, the slide would silently show the fallback instead.
//
// Usage: STRIVN_APP_URL=http://127.0.0.1:18082 \
//        STRIVN_COACH_PHONE=+32400000099 STRIVN_COACH_PW=strivn1234 \
//        STRIVN_PLAYER_ID=yanis.boulanger@demo.test STRIVN_PLAYER_PW=portalpass \
//        ./run.sh capture/portal-2026-09-03-shots.mjs [fr]
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, playerLogin, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
const BCP47 = { fr: 'fr-FR', en: 'en-GB', nl: 'nl-NL', de: 'de-DE', pt: 'pt-PT', es: 'es-ES' };
const DARK = () => { try { localStorage.setItem('strv-theme', 'dark'); } catch (e) {} };

// Anchors read from the app's own lang files, not translated afresh: a selector
// that guesses the wording silently clips the wrong region.
const S = {
  fr: { gps: 'Mes données GPS',    records: 'Mes records',    body: 'Où as-tu mal',      fatigue: 'Fatigue',      minutes: 'min jouées', recorded: 'Enregistré' },
  en: { gps: 'My GPS data',        records: 'My records',     body: 'Where does it hurt', fatigue: 'Fatigue',     minutes: 'min played', recorded: 'Recorded as' },
  nl: { gps: 'Mijn GPS-gegevens',  records: 'Mijn records',   body: 'Waar heb je pijn',  fatigue: 'Vermoeidheid', minutes: 'min gespeeld', recorded: 'Geregistreerd als' },
  de: { gps: 'Meine GPS-Daten',    records: 'Meine Rekorde',  body: 'Wo tut es weh',     fatigue: 'Ermüdung',     minutes: 'Min. gespielt', recorded: 'Erfasst als' },
  pt: { gps: 'Os meus dados GPS',  records: 'Os meus recordes', body: 'Onde dói',        fatigue: 'Fadiga',       minutes: 'min jogados', recorded: 'Registado como' },
  es: { gps: 'Mis datos GPS',      records: 'Mis récords',    body: '¿Dónde te duele',   fatigue: 'Fatiga',       minutes: 'min jugados', recorded: 'Registrado como' },
}[lang];
if (!S) throw new Error(`no anchor strings for locale "${lang}"`);

// Names that must never reach a capture, whatever the crop.
const BANNED = /Ballack|Simeone|Kovac|Rudi Garcia/i;
async function assertNoRealNames(page, where) {
  const t = await page.evaluate(() => document.body.innerText);
  const hit = t.match(BANNED);
  if (hit) throw new Error(`real personality name "${hit[0]}" on ${where} - fix the demo data, do not crop around it`);
}

const browser = await chromium.launch();

// --- player side -----------------------------------------------------------
{
  const ctx = await browser.newContext({
    viewport: { width: 430, height: 1500 }, locale: BCP47[lang] || 'fr-FR',
    deviceScaleFactor: 3, isMobile: true, hasTouch: true,
  });
  await ctx.addInitScript(DARK);
  const p = await ctx.newPage();
  await playerLogin(p, lang);

  // 1. Mes stats GPS -- clip to the first match card, which carries the whole
  // argument: real value, signed gap, the window it is compared against.
  await go(p, `${BASE}/portal/stats/gps?lang=${lang}`, 3500, 90000);
  await assertNoRealNames(p, 'portal GPS');
  const gps = await p.evaluate((A) => {
    const h = [...document.querySelectorAll('h1, h2')].find((e) => e.textContent.includes(A.gps));
    if (!h) return null;
    // Walk down to the first match card rather than clipping a fixed height:
    // the intro paragraph and the tab bar sit between the two.
    const anchor = [...document.querySelectorAll('*')]
      .find((e) => e.offsetParent && e.children.length === 0 && e.textContent.includes(A.minutes));
    const top = h.getBoundingClientRect().top - 16;
    const bottom = anchor ? anchor.getBoundingClientRect().top + 690 : top + 900;
    return { top, height: bottom - top };
  }, S);
  if (!gps) throw new Error('portal GPS heading not found');
  await p.screenshot({
    path: resolve(OUT, `portail-gps${sfx}.png`),
    clip: { x: 0, y: Math.max(0, gps.top), width: 430, height: gps.height },
  });
  console.log(`saved portail-gps${sfx}`);

  // 1b. The "Mes records" card, further down the same page. It is the half of the
  // screen that carries the reward, so it gets its own image rather than a taller
  // crop nobody can read at 300px wide in an email.
  const rec = await p.evaluate((A) => {
    const h = [...document.querySelectorAll('*')]
      .find((e) => e.offsetParent && e.children.length === 0 && e.textContent.trim() === A.records);
    if (!h) return null;
    let card = h;
    while (card && card !== document.body) {
      const r = card.getBoundingClientRect();
      if (r.width > 300 && r.height > 220) break;
      card = card.parentElement;
    }
    const r = card.getBoundingClientRect();
    return { top: h.getBoundingClientRect().top - 20, height: r.bottom - h.getBoundingClientRect().top + 40 };
  }, S);
  if (!rec) throw new Error('"Mes records" card not found');
  await p.evaluate((y) => window.scrollTo(0, 0), 0);
  await p.screenshot({
    path: resolve(OUT, `portail-records${sfx}.png`),
    clip: { x: 0, y: Math.max(0, rec.top), width: 430, height: rec.height },
  });
  console.log(`saved portail-records${sfx}`);

  // 2. The 3D body, with a zone actually selected: unselected it reads as an
  // empty form, and the point is that ONE tap fills zone AND side.
  await go(p, `${BASE}/portal/injuries/create?lang=${lang}`, 4000, 90000);
  const canvas = p.locator('canvas').first();
  if (!(await canvas.count())) throw new Error('no canvas: the 3D body fell back to the list');
  const box = await canvas.boundingBox();
  // Front of the thigh: one tap declares a quadriceps, the example the copy uses.
  // The hit test is against the rendered mesh, so a single fixed point misses as
  // soon as the model shifts. Try a short list and stop at the first hit.
  const aims = [[0.44, 0.66], [0.46, 0.64], [0.42, 0.68], [0.45, 0.70], [0.47, 0.62]];
  let picked = false;
  for (const [fx, fy] of aims) {
    await p.mouse.click(box.x + box.width * fx, box.y + box.height * fy);
    await p.waitForTimeout(1400);
    picked = await p.evaluate((A) => document.body.innerText.includes(A.recorded + ':'), S);
    if (picked) break;
  }
  if (!picked) throw new Error('no body zone selected: the capture would show an empty form');
  console.log(`  3D body: canvas ok, zone selected = ${picked}`);
  const inj = await p.evaluate((A) => {
    const h = [...document.querySelectorAll('*')]
      .find((e) => e.offsetParent && e.children.length === 0 && e.textContent.includes(A.body));
    const c = document.querySelector('canvas').getBoundingClientRect();
    const top = h ? h.getBoundingClientRect().top - 18 : c.top - 18;
    return { top, height: c.bottom + 210 - top };
  }, S);
  await p.screenshot({
    path: resolve(OUT, `portail-blessure${sfx}.png`),
    clip: { x: 0, y: Math.max(0, inj.top), width: 430, height: inj.height },
  });
  console.log(`saved portail-blessure${sfx}`);
  await ctx.close();
}

// --- coach side ------------------------------------------------------------
{
  const ctx = await browser.newContext({
    viewport: { width: 1180, height: 2000 }, locale: BCP47[lang] || 'fr-FR', deviceScaleFactor: 2,
  });
  await ctx.addInitScript(DARK);
  const p = await ctx.newPage();
  await coachLogin(p, lang);

  // 3. The player's fiche, where #539 put the player's own words under the
  // number. NOT teams/{team}/wellness: that index still shows bare scores -- the
  // words landed on players/show.blade.php.
  await go(p, `${BASE}/teams/${TEAM}/players/6?lang=${lang}`, 3500, 90000);
  await assertNoRealNames(p, 'player fiche');
  const w = await p.evaluate((A) => {
    // Anchor on the fatigue label and take the signals card around it: a fixed
    // clip would drift the first time the header grows.
    const lbl = [...document.querySelectorAll('*')]
      .find((e) => e.offsetParent && e.children.length === 0 && e.textContent.trim() === A.fatigue);
    if (!lbl) return null;
    let card = lbl;
    while (card && card !== document.body) {
      const r = card.getBoundingClientRect();
      if (r.width > 420 && r.height > 150) break;
      card = card.parentElement;
    }
    const r = card.getBoundingClientRect();
    return { x: r.x - 16, y: r.y - 16, w: r.width + 32, h: r.height + 32 };
  }, S);
  if (!w) throw new Error('wellness signals card not found on the player fiche');
  await p.screenshot({
    path: resolve(OUT, `wellness-mots${sfx}.png`),
    clip: { x: Math.max(0, w.x), y: Math.max(0, w.y), width: w.w, height: w.h },
  });
  console.log(`saved wellness-mots${sfx}`);
  await ctx.close();
}

await browser.close();
