// Capture the live-session runner (running state + scoreboard) at phone portrait
// and tablet landscape. Usage: STRIVN_APP_URL=http://localhost:8083 ./run.sh capture/live-runner-shots.mjs
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, go } from '../lib/browser.mjs';

const COACH = { phone: process.env.STRIVN_COACH_PHONE || '+32470112233', password: process.env.STRIVN_COACH_PW || 'password' };
const OUT = DIR.screenshots;

async function login(p) {
  await p.goto(`${BASE}/login?lang=fr`, { waitUntil: 'domcontentloaded' });
  try { await p.waitForLoadState('networkidle', { timeout: 8000 }); } catch {}
  await p.fill('input[name=phone]', COACH.phone);
  await p.fill('input[name=password]', COACH.password);
  await p.press('input[name=password]', 'Enter').catch(() => {});
  await p.waitForURL(/\/teams\//, { timeout: 15000 }).catch(() => {});
}

async function runToLive(p, prefix) {
  await go(p, `${BASE}/teams/${TEAM}/next-session?lang=fr`, 2200, 45000);
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
  // so the current/next block is the small-sided game (coherent scoreboard).
  const skip = p.getByRole('button', { name: /passer ce bloc/i });
  if (await skip.count()) {
    await skip.first().click().catch(() => {});
    await p.waitForTimeout(500);
    await p.getByRole('button', { name: /confirmer le passage/i }).first().click().catch(() => {});
    await p.waitForTimeout(1500);
  }
  // State A: live session with team composition (game block)
  await p.screenshot({ path: resolve(OUT, `${prefix}-compo-fr.png`) });
  console.log('saved', prefix, 'compo');
  // Start the current block -> running block reveals the scoreboard
  await p.getByRole('button', { name: /démarrer le bloc/i }).first().click().catch(() => {});
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
  await p.screenshot({ path: resolve(OUT, `${prefix}-score-fr.png`) });
  console.log('saved', prefix, 'score');
}

const browser = await chromium.launch();

// Phone portrait
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, locale: 'fr-FR', deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  await login(p);
  await runToLive(p, 'live-runner-phone');
  await ctx.close();
}

// Tablet landscape
{
  const ctx = await browser.newContext({ viewport: { width: 1194, height: 834 }, locale: 'fr-FR', deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  await login(p);
  await runToLive(p, 'live-runner-tablet');
  await ctx.close();
}

await browser.close();
console.log('DONE live-runner shots');
