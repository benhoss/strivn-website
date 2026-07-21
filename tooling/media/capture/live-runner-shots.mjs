// Capture the live-session runner (running state + scoreboard) at phone portrait
// and tablet landscape.
// Usage: STRIVN_APP_URL=http://localhost:8082 ./run.sh capture/live-runner-shots.mjs [fr|en] [phone|tablet]
//   out: public/screenshots/live-runner-{phone,tablet}-{board,compo,score}[-fr].png
//   (EN = no suffix; the optional 3rd arg limits the devices captured.)
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, go } from '../lib/browser.mjs';

const COACH = { phone: process.env.STRIVN_COACH_PHONE || '+32470112233', password: process.env.STRIVN_COACH_PW || 'password' };
const lang = process.argv[2] || 'fr';
const scope = process.argv[3] || 'both';
// Optional state filter, e.g. SHOT_STATES=board to stop after the board shot.
const states = (process.env.SHOT_STATES || 'board,compo,score').split(',');
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;

async function login(p) {
  await p.goto(`${BASE}/login?lang=${lang}`, { waitUntil: 'domcontentloaded' });
  try { await p.waitForLoadState('networkidle', { timeout: 8000 }); } catch {}
  await p.fill('input[name=phone]', COACH.phone);
  await p.fill('input[name=password]', COACH.password);
  await p.press('input[name=password]', 'Enter').catch(() => {});
  await p.waitForURL(/\/teams\//, { timeout: 15000 }).catch(() => {});
}

async function skipBlock(p) {
  const s = p.getByRole('button', { name: /passer ce bloc|skip this block/i });
  if (await s.count()) {
    await s.first().click().catch(() => {});
    await p.waitForTimeout(500);
    await p.getByRole('button', { name: /confirmer le passage|confirm skip/i }).first().click().catch(() => {});
    await p.waitForTimeout(1500);
  }
}

async function runToLive(p, prefix) {
  await go(p, `${BASE}/teams/${TEAM}/next-session?lang=${lang}`, 2200, 45000);
  await p.locator('[data-live-start]').first().click().catch(() => {});
  await p.waitForSelector('[data-live-confirm-start]', { timeout: 8000 }).catch(() => {});
  await p.waitForTimeout(600);
  const rows = p.locator('[data-live-presence-row]');
  const n = await rows.count();
  for (let i = 0; i < n; i++) { await rows.nth(i).click().catch(() => {}); await p.waitForTimeout(70); }
  console.log('presence rows:', n);
  await p.locator('[data-live-confirm-start]').first().click().catch(() => {});
  await p.waitForTimeout(1600);
  // Skip the warm-up (two-tap: "Passer ce bloc" arms → "Confirmer le passage" confirms)
  await skipBlock(p);
  // State A: the passing block — tactical board + consignes on the up-next card
  await p.screenshot({ path: resolve(OUT, `${prefix}-board${sfx}.png`) });
  console.log('saved', prefix, 'board');
  if (!states.includes('compo')) return;
  // Skip the passing block → the small-sided game (teams + coherent scoreboard)
  await skipBlock(p);
  // State B: live session with team composition (game block)
  await p.screenshot({ path: resolve(OUT, `${prefix}-compo${sfx}.png`) });
  console.log('saved', prefix, 'compo');
  if (!states.includes('score')) return;
  // Start the current block -> running block reveals the scoreboard
  await p.getByRole('button', { name: /démarrer le bloc|start block/i }).first().click().catch(() => {});
  await p.waitForSelector('[data-live-scoreboard]', { timeout: 10000 }).catch(() => {});
  await p.waitForTimeout(1200);
  const zones = p.locator('[data-live-score-zone]');
  const zc = await zones.count();
  console.log('score zones:', zc);
  if (zc >= 2) {
    await zones.nth(0).click().catch(() => {}); await p.waitForTimeout(550);
    await zones.nth(0).click().catch(() => {}); await p.waitForTimeout(550);
    await zones.nth(1).click().catch(() => {}); await p.waitForTimeout(700);
  }
  await p.waitForTimeout(700);
  // State B: running block with scoreboard
  await p.screenshot({ path: resolve(OUT, `${prefix}-score${sfx}.png`) });
  console.log('saved', prefix, 'score');
}

const browser = await chromium.launch();

// Phone portrait
if (scope === 'both' || scope === 'phone') {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  await login(p);
  await runToLive(p, 'live-runner-phone');
  await ctx.close();
}

// Tablet landscape
if (scope === 'both' || scope === 'tablet') {
  const ctx = await browser.newContext({ viewport: { width: 1194, height: 834 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  await login(p);
  await runToLive(p, 'live-runner-tablet');
  await ctx.close();
}

await browser.close();
console.log('DONE live-runner shots lang=' + lang + ' scope=' + scope);
