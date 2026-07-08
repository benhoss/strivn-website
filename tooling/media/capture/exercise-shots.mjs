// One-off: capture Exercise Library screenshots for the weekly-update email.
// Usage: STRIVN_APP_URL=http://localhost:8092 ./run.sh capture/exercise-shots.mjs fr
//   out: public/screenshots/exercise-library-fr.png (index: media tiles + WhatsApp hint)
//        public/screenshots/exercise-inbox-fr.png   (inbox triage)
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR, BASE, TEAM } from '../config.mjs';
import { chromium, go, dismissBanner } from '../lib/browser.mjs';

const COACH = { phone: process.env.STRIVN_COACH_PHONE || '+32470112233', password: process.env.STRIVN_COACH_PW || 'password' };

async function robustCoachLogin(page, lang) {
  await page.goto(`${BASE}/login?lang=${lang}`, { waitUntil: 'domcontentloaded' });
  try { await page.waitForLoadState('networkidle', { timeout: 8000 }); } catch {}
  await page.fill('input[name=phone]', COACH.phone);
  await page.fill('input[name=password]', COACH.password);
  // Submit natively via Enter (works without JS), then fall back to the named button.
  await page.press('input[name=password]', 'Enter').catch(() => {});
  const landed = await page.waitForURL(/\/teams\//, { timeout: 8000 }).then(() => true).catch(() => false);
  if (!landed) {
    const btn = page.getByRole('button', { name: /se connecter comme coach/i });
    if (await btn.count()) await btn.first().click().catch(() => {});
    await page.waitForURL(/\/teams\//, { timeout: 15000 }).catch(() => {});
  }
  await page.waitForTimeout(500);
}

const lang = process.argv[2] || 'fr';
const sfx = lang === 'en' ? '' : `-${lang}`;
const OUT = DIR.screenshots;
mkdirSync(OUT, { recursive: true });

const shot = (page, name, h) =>
  page.screenshot({ path: resolve(OUT, `${name}${sfx}.png`), clip: { x: 0, y: 0, width: page.viewportSize().width, height: h } })
      .then(() => console.log('  saved', name + sfx));

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2 });
const coach = await ctx.newPage();
await robustCoachLogin(coach, lang);

for (const [slug, name] of [
  ['exercises', 'exercise-library'],
  ['exercises/inbox', 'exercise-inbox'],
]) {
  try {
    console.log(slug, await go(coach, `${BASE}/teams/${TEAM}/${slug}?lang=${lang}`, 2000, 45000));
    await dismissBanner(coach);
    await coach.waitForTimeout(900);
    await shot(coach, name, 900);
  } catch (e) { console.log(name, 'ERR', e.message.slice(0, 80)); }
}

await browser.close();
console.log('DONE exercises lang=' + lang);
