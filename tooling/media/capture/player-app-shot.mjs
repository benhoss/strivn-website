// Capture the player-agenda shot used in the landing page's "player app" block.
// Usage: node capture/player-app-shot.mjs [lang=fr]
//   out: public/screenshots/player-app-agenda[-<lang>].png   (EN = no suffix)
//
// Same screen as portal-agenda, but framed like the native app block wants it:
// cropped just above the bottom tab bar, so it reads as a device surface rather
// than a browser viewport. The landing page sizes it via pngSize(), so the exact
// height can move between locales without causing layout shift.
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR, BASE } from '../config.mjs';
import { chromium, playerLogin, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const BROWSER_LOCALE = { fr: 'fr-FR', en: 'en-GB', nl: 'nl-BE', pt: 'pt-PT', es: 'es-ES' }[lang] || 'en-GB';
const OUT = DIR.screenshots;
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 402, height: 860 }, locale: BROWSER_LOCALE, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const page = await ctx.newPage();

await playerLogin(page, lang);
await go(page, `${BASE}/portal/agenda?lang=${lang}`, 1500);

// Crop just above the sticky bottom tab bar (its top edge, minus a little
// breathing room). Falls back to a fixed height if the bar can't be found.
const cut = await page.evaluate(() => {
  const bars = [...document.querySelectorAll('nav, footer, div')].filter((el) => {
    const s = getComputedStyle(el);
    if (s.position !== 'fixed' && s.position !== 'sticky') return false;
    const r = el.getBoundingClientRect();
    return r.height > 40 && r.height < innerHeight * 0.3 && r.width > innerWidth * 0.7
      && r.top > innerHeight * 0.5 && r.bottom > innerHeight - 40;
  });
  const top = Math.min(...bars.map((el) => el.getBoundingClientRect().top));
  return Number.isFinite(top) ? Math.round(top) : null;
});
const height = Math.max(320, (cut ?? 780) - 12);
console.log(`  tab bar at y=${cut ?? '?'} → crop height ${height}`);

await page.screenshot({ path: resolve(OUT, `player-app-agenda${sfx}.png`), clip: { x: 0, y: 0, width: 402, height } });
console.log('  saved player-app-agenda' + sfx);

await browser.close();
console.log('DONE lang=' + lang);
