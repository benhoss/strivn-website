// Exercise library: visibility grid (Public/Privé badges) + the public-link share panel.
// Crops to <main> so the demo team's name never appears in the shot.
// Usage: ./run.sh capture/exercise-share-shot.mjs [fr|en]
//   out: public/screenshots/exercise-library-public-fr.png, public/screenshots/exercise-share-link-fr.png
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, coachLogin, go } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;

const BCP47 = { fr: 'fr-FR', en: 'en-GB', nl: 'nl-NL', de: 'de-DE', pt: 'pt-PT', es: 'es-ES' };
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: BCP47[lang] || 'en-GB', deviceScaleFactor: 2 });
const p = await ctx.newPage();
await coachLogin(p, lang);

await go(p, `${BASE}/teams/${TEAM}/workouts/library?lang=${lang}`, 1500, 30000);

// Grid with Public/Privé badges — start just below the "Visibilité" filter row.
// Anchored on the `visibility=published` query param (stable across locales),
// not translated link text, so this works whatever language is loaded.
{
  const box = await p.locator('main').first().boundingBox();
  const visFilter = p.locator('a[href*="visibility=published"]').first();
  const visBox = await visFilter.boundingBox();
  const yStart = visBox ? visBox.y - box.y - 10 : 210;
  await p.screenshot({
    path: resolve(OUT, `exercise-library-public${sfx}.png`),
    clip: { x: box.x, y: box.y + yStart, width: box.width, height: Math.min(box.height - yStart, 430) },
  });
  console.log('saved exercise-library-public' + sfx);
}

// Open the first exercise's quick-view, then its Share panel.
// `[data-quick-open]` and `[data-exercise-share]` are markup hooks, not
// translated text, so both steps are locale-independent.
// owner=mine restricts the grid to team-owned exercises — the global Strivn
// catalog (team_id null) can't be shared, and the default view mixes both.
{
  await go(p, `${BASE}/teams/${TEAM}/workouts/library?lang=${lang}&owner=mine`, 1200, 30000);
  await p.locator('[data-quick-open="0"]').first().click();
  const shareBtn = p.locator('[data-exercise-share] button').first();
  await shareBtn.waitFor({ state: 'visible', timeout: 10000 });
  await shareBtn.click();
  const dialog = p.locator('[data-exercise-share] [role="dialog"]').first();
  await dialog.waitFor({ state: 'visible', timeout: 10000 });
  await p.waitForTimeout(300);
  const box = await dialog.boundingBox();
  await p.screenshot({ path: resolve(OUT, `exercise-share-link${sfx}.png`), clip: box });
  console.log('saved exercise-share-link' + sfx);
}

await ctx.close();
await browser.close();
