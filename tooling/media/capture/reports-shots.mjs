// Reports screens (coach desktop) + the player fitness trends page (mobile).
// Usage: ./run.sh capture/reports-shots.mjs [fr|en] [all|hub]
//   out: public/screenshots/reports-{hub,selection,builder}[-fr].png
//        public/screenshots/portal-fitness-trends[-fr].png
//   (EN = no suffix. Scope 'hub' captures only reports-hub + reports-selection.)
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, go, dismissBanner, playerLogin } from '../lib/browser.mjs';
const COACH = { phone: process.env.STRIVN_COACH_PHONE || '+32470112233', password: process.env.STRIVN_COACH_PW || 'password' };
const lang = process.argv[2] || 'fr';
const scope = process.argv[3] || 'all';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
const browser = await chromium.launch();

// coach desktop: reports screens
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 940 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await p.goto(`${BASE}/login?lang=${lang}`, { waitUntil: 'domcontentloaded' });
  try { await p.waitForLoadState('networkidle', { timeout: 8000 }); } catch {}
  await p.fill('input[name=phone]', COACH.phone); await p.fill('input[name=password]', COACH.password);
  await p.press('input[name=password]', 'Enter').catch(()=>{});
  await p.waitForURL(/\/teams\//, { timeout: 15000 }).catch(()=>{});
  const targets = [
    ['reports', 'reports-hub'],
    ['reports/selection', 'reports-selection'],
  ];
  if (scope === 'all') targets.push(['reports/builder', 'reports-builder']);
  for (const [slug, name] of targets) {
    try {
      console.log(slug, await go(p, `${BASE}/teams/${TEAM}/${slug}?lang=${lang}`, 2400, 60000));
      await dismissBanner(p);
      await p.waitForTimeout(1000);
      await p.screenshot({ path: resolve(OUT, `${name}${sfx}.png`), clip: { x:0, y:0, width: 1440, height: 940 } });
      console.log('saved', name + sfx);
    } catch (e) { console.log(name, 'ERR', e.message.slice(0, 70)); }
  }
  await ctx.close();
}

// player mobile: fitness page with personal load/readiness trends
if (scope === 'all') {
  const ctx = await browser.newContext({ viewport: { width: 402, height: 860 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  await playerLogin(p, lang);
  try {
    console.log('fitness', await go(p, `${BASE}/portal/fitness?lang=${lang}`, 2200, 45000));
    await p.waitForTimeout(900);
    await p.screenshot({ path: resolve(OUT, `portal-fitness-trends${sfx}.png`), clip: { x:0, y:0, width: 402, height: 860 } });
    console.log('saved portal-fitness-trends' + sfx);
  } catch (e) { console.log('fitness ERR', e.message.slice(0, 70)); }
  await ctx.close();
}
await browser.close();
