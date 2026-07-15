import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, go, dismissBanner } from '../lib/browser.mjs';
const COACH = { phone: process.env.STRIVN_COACH_PHONE || '+32470112233', password: process.env.STRIVN_COACH_PW || 'password' };
const OUT = DIR.screenshots;
const shot = (p, name, h) => p.screenshot({ path: resolve(OUT, `${name}-fr.png`), clip: { x:0, y:0, width: p.viewportSize().width, height: h } }).then(()=>console.log('saved', name));
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 980 }, locale: 'fr-FR', deviceScaleFactor: 2 });
const p = await ctx.newPage();
await p.goto(`${BASE}/login?lang=fr`, { waitUntil: 'domcontentloaded' });
try { await p.waitForLoadState('networkidle', { timeout: 8000 }); } catch {}
await p.fill('input[name=phone]', COACH.phone); await p.fill('input[name=password]', COACH.password);
await p.press('input[name=password]', 'Enter').catch(()=>{});
await p.waitForURL(/\/teams\//, { timeout: 15000 }).catch(()=>{});
console.log('ns status:', await go(p, `${BASE}/teams/${TEAM}/next-session?lang=fr`, 2500, 45000));
await dismissBanner(p);
await p.waitForTimeout(900);
await shot(p, 'live-session', 980);                 // next-session page with déroulé
// open the runner pre-session screen
const start = p.locator('[data-live-start]').first();
if (await start.count()) {
  await start.click().catch(()=>{});
  await p.waitForSelector('[data-live-confirm]', { timeout: 8000 }).catch(()=>{});
  await p.waitForTimeout(1200);
  await shot(p, 'live-session-presession', 980);
}
await browser.close();
