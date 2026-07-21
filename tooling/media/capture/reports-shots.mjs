import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, go, dismissBanner, playerLogin } from '../lib/browser.mjs';
const COACH = { phone: process.env.STRIVN_COACH_PHONE || '+32470112233', password: process.env.STRIVN_COACH_PW || 'password' };
const OUT = DIR.screenshots;
const browser = await chromium.launch();

// coach desktop: reports screens
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 940 }, locale: 'fr-FR', deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await p.goto(`${BASE}/login?lang=fr`, { waitUntil: 'domcontentloaded' });
  try { await p.waitForLoadState('networkidle', { timeout: 8000 }); } catch {}
  await p.fill('input[name=phone]', COACH.phone); await p.fill('input[name=password]', COACH.password);
  await p.press('input[name=password]', 'Enter').catch(()=>{});
  await p.waitForURL(/\/teams\//, { timeout: 15000 }).catch(()=>{});
  for (const [slug, name] of [
    ['reports', 'reports-hub'],
    ['reports/selection', 'reports-selection'],
    ['reports/builder', 'reports-builder'],
  ]) {
    try {
      console.log(slug, await go(p, `${BASE}/teams/${TEAM}/${slug}?lang=fr`, 2400, 60000));
      await dismissBanner(p);
      await p.waitForTimeout(1000);
      await p.screenshot({ path: resolve(OUT, `${name}-fr.png`), clip: { x:0, y:0, width: 1440, height: 940 } });
      console.log('saved', name);
    } catch (e) { console.log(name, 'ERR', e.message.slice(0, 70)); }
  }
  await ctx.close();
}

// player mobile: fitness page with personal load/readiness trends
{
  const ctx = await browser.newContext({ viewport: { width: 402, height: 860 }, locale: 'fr-FR', deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  await playerLogin(p, 'fr');
  try {
    console.log('fitness', await go(p, `${BASE}/portal/fitness?lang=fr`, 2200, 45000));
    await p.waitForTimeout(900);
    await p.screenshot({ path: resolve(OUT, 'portal-fitness-trends-fr.png'), clip: { x:0, y:0, width: 402, height: 860 } });
    console.log('saved portal-fitness-trends');
  } catch (e) { console.log('fitness ERR', e.message.slice(0, 70)); }
  await ctx.close();
}
await browser.close();
