// Screenshots for the 2026-08-27 newsletter: the new Vue live runner.
//
// The Vue runner sits behind FEATURE_RUNNER_VUE (default off), so we force it
// per-request with ?runner=vue — ?runner=blade would force the old one.
//
// ⚠️ Starting the session CREATES a live_sessions row. It is removed by the
// undo script alongside the rest of the demo data.
//
// ⚠️ The demo squad contains real football personalities, so the group sheets
// must never be opened for a capture.
//
// Usage: STRIVN_APP_URL=... STRIVN_COACH_PHONE=+32400000099 STRIVN_COACH_PW=strivn1234 \
//        ./run.sh capture/live-runner-vue-shots.mjs [fr]
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;

const BCP47 = { fr: 'fr-FR', en: 'en-GB', nl: 'nl-NL', de: 'de-DE', pt: 'pt-PT', es: 'es-ES' };
const browser = await chromium.launch();
// Phone-shaped: the runner is designed thumb-first for pitch-side use, and that
// is how a coach will actually meet it.
const ctx = await browser.newContext({
  viewport: { width: 430, height: 932 }, locale: BCP47[lang] || 'fr-FR',
  deviceScaleFactor: 3, isMobile: true, hasTouch: true,
});
const p = await ctx.newPage();
await coachLogin(p, lang);

await go(p, `${BASE}/teams/${TEAM}/next-session?lang=${lang}&runner=vue`, 3000, 120000);

// Start the session if it is not already running.
const start = p.locator('button:visible, a:visible').filter({ hasText: 'Démarrer la séance' }).first();
if (await start.count()) {
  await start.click();
  await p.waitForTimeout(6000);
}

await go(p, `${BASE}/teams/${TEAM}/next-session?lang=${lang}&runner=vue`, 4000, 120000);
console.log('vue runner mounted: ' + await p.locator('[data-runner-vue], #runner-vue, .runner-vue').count());

// "Lancer la séance" IS the runner's primary — the bell in its opening state.
// Until it is pressed the page still shows the pre-session view, not the scene.
const bell = p.locator('button:visible').filter({ hasText: /^\s*Lancer la séance\s*$/ }).first();
if (await bell.count()) {
  await bell.click();
  await p.waitForTimeout(5000);
  console.log('session launched');
}

// The bell keeps its place and changes its name: after the session opens it
// reads "Lancer" for the first block. Press it again so the scene shows a
// running chrono rather than an empty "à lancer" state.
const blockBell = p.locator('button:visible').filter({ hasText: /^\s*Lancer(\s+T\d+)?\s*$/ }).first();
if (await blockBell.count()) {
  await blockBell.click();
  await p.waitForTimeout(6000);
  console.log('first block running');
}

await p.screenshot({ path: resolve(OUT, `live-runner-vue${sfx}.png`) });
console.log('saved live-runner-vue' + sfx);

await ctx.close();
await browser.close();
