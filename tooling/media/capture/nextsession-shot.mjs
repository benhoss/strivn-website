// Next-session page (déroulé) + the runner pre-session screen.
// Usage: ./run.sh capture/nextsession-shot.mjs [fr|en]
//   out: public/screenshots/live-session[-fr].png, live-session-presession[-fr].png
//   (EN = no suffix, matching the site's content files.)
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, go, dismissBanner } from '../lib/browser.mjs';
const COACH = { phone: process.env.STRIVN_COACH_PHONE || '+32470112233', password: process.env.STRIVN_COACH_PW || 'password' };
const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
const shot = (p, name, h) => p.screenshot({ path: resolve(OUT, `${name}${sfx}.png`), clip: { x:0, y:0, width: p.viewportSize().width, height: h } }).then(()=>console.log('saved', name + sfx));
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 980 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2 });
const p = await ctx.newPage();
await p.goto(`${BASE}/login?lang=${lang}`, { waitUntil: 'domcontentloaded' });
try { await p.waitForLoadState('networkidle', { timeout: 8000 }); } catch {}
await p.fill('input[name=phone]', COACH.phone); await p.fill('input[name=password]', COACH.password);
await p.press('input[name=password]', 'Enter').catch(()=>{});
await p.waitForURL(/\/teams\//, { timeout: 15000 }).catch(()=>{});
console.log('ns status:', await go(p, `${BASE}/teams/${TEAM}/next-session?lang=${lang}`, 2500, 45000));
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
