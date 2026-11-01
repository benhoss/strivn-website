import { BASE } from '../config.mjs';
export const COACH = { phone: process.env.STRIVN_COACH_PHONE || '+32470112233', password: process.env.STRIVN_COACH_PW || 'password' };
export async function coachLogin(page) {
  await page.goto(`${BASE}/login?lang=en`, { waitUntil: 'domcontentloaded' });
  const tab = page.locator('[role=tab]').nth(0); if (await tab.count()) await tab.click().catch(() => {});
  await page.fill('input[name=phone]', COACH.phone);
  await page.fill('input[name=password]', COACH.password);
  await page.click('form button[type=submit]');
  await page.waitForURL(/\/teams\//, { timeout: 30000 });
}
export async function playerLogin(page, player) {
  await page.goto(`${BASE}/login?as=player&player_only=1&lang=en`, { waitUntil: 'domcontentloaded' });
  const tab = page.locator('[role=tab]').nth(1); if (await tab.count()) await tab.click().catch(() => {});
  await page.fill('input[name=identifier]', player.identifier);
  await page.fill('#player_password', player.password);
  await page.locator('form:has(#player_password) button[type=submit]').click();
  await page.waitForURL(/\/portal\//, { timeout: 30000 });
}
