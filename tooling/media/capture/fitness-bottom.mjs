import { resolve } from 'node:path';
import { DIR, BASE } from '../config.mjs';
import { chromium, go, playerLogin } from '../lib/browser.mjs';

const OUT = DIR.screenshots;
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 402, height: 860 }, locale: 'fr-FR', deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const p = await ctx.newPage();
await playerLogin(p, 'fr');
console.log('fitness', await go(p, `${BASE}/portal/fitness?lang=fr`, 2400, 45000));

// Anchor the frame on the load section so the charts fill the shot cleanly.
await p.evaluate(() => {
  const els = Array.from(document.querySelectorAll('h2, h3, p, div'));
  const t = els.find((e) => (e.textContent || '').trim().startsWith("Charge d'entra"));
  const card = t ? t.closest('section, article, div') : null;
  if (card) {
    card.scrollIntoView({ block: 'start' });
    window.scrollBy(0, -14);
  } else {
    window.scrollTo(0, document.body.scrollHeight);
  }
});
await p.waitForTimeout(1600);
await p.screenshot({ path: resolve(OUT, 'portal-fitness-trends-fr.png') });
console.log('saved portal-fitness-trends (charts)');
await browser.close();
