// Shared Playwright helpers: login, navigation, synthetic cursor + highlight.
import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
import { BASE, COACH, PLAYER } from '../config.mjs';

export { chromium };

export const ffprobe = (f) =>
  parseFloat(execSync(`ffprobe -v error -show_entries format=duration -of default=nokey=1:noprint_wrappers=1 "${f}"`).toString().trim());

export async function coachLogin(page, lang = 'fr') {
  await page.goto(`${BASE}/login?lang=${lang}`, { waitUntil: 'networkidle' });
  await page.fill('input[name=phone]', COACH.phone);
  await page.fill('input[name=password]', COACH.password);
  await Promise.all([page.waitForLoadState('networkidle'), page.click('form button[type=submit]')]);
}

export async function playerLogin(page, lang = 'fr') {
  await page.goto(`${BASE}/login?as=player&player_only=1&lang=${lang}`, { waitUntil: 'networkidle' });
  await page.fill('input[name=identifier]', PLAYER.identifier);
  await page.fill('#player_password', PLAYER.password);
  await Promise.all([page.waitForLoadState('networkidle'), page.locator('form:has(#player_password) button[type=submit]').click()]);
}

// Navigate without requiring networkidle (some screens poll/stream forever).
export async function go(page, url, settleMs = 1600, timeout = 30000) {
  const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout });
  try { await page.waitForLoadState('networkidle', { timeout: 7000 }); } catch {}
  await page.waitForTimeout(settleMs);
  return resp ? resp.status() : '??';
}

// Dismiss the "How the check-in works" onboarding banner if present.
export async function dismissBanner(page, labels = ['Compris', "J'ai compris", 'Got it']) {
  for (const label of labels) {
    const b = page.getByRole('button', { name: new RegExp(label, 'i') });
    if (await b.count()) { await b.first().click().catch(() => {}); await page.waitForTimeout(600); return; }
  }
}

// Self-healing synthetic cursor + highlight overlays for demo videos.
export function overlays(page) {
  const ensure = () => page.evaluate(() => {
    if (!document.getElementById('__cursor')) {
      const c = document.createElement('div'); c.id = '__cursor';
      Object.assign(c.style, { position: 'fixed', left: 0, top: 0, width: '20px', height: '20px', marginLeft: '-10px', marginTop: '-10px', borderRadius: '50%', background: 'rgba(79,148,251,0.35)', border: '2px solid #4f94fb', zIndex: 2147483647, pointerEvents: 'none', transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1)', transform: 'translate(720px,450px)' });
      document.body.appendChild(c);
    }
    if (!document.getElementById('__hl')) {
      const h = document.createElement('div'); h.id = '__hl';
      Object.assign(h.style, { position: 'fixed', left: 0, top: 0, width: 0, height: 0, border: '2px solid #4f94fb', borderRadius: '10px', boxShadow: '0 0 0 4px rgba(79,148,251,0.16)', zIndex: 2147483646, pointerEvents: 'none', opacity: 0, transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)' });
      document.body.appendChild(h);
    }
  });
  const moveTo = async (x, y) => { await ensure(); await page.evaluate(([x, y]) => { const c = document.getElementById('__cursor'); if (c) c.style.transform = `translate(${x}px,${y}px)`; }, [x, y]); await page.waitForTimeout(560); };
  const moveToEl = async (loc) => { const b = await loc.boundingBox().catch(() => null); if (b) await moveTo(b.x + b.width / 2, b.y + b.height / 2); };
  const pulse = async () => { await ensure(); await page.evaluate(() => { const c = document.getElementById('__cursor'); if (!c) return; c.style.transition = 'transform 0.1s ease'; c.style.background = 'rgba(79,148,251,0.6)'; setTimeout(() => { c.style.background = 'rgba(79,148,251,0.35)'; c.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1)'; }, 180); }); await page.waitForTimeout(220); };
  const highlight = async (loc, pad = 8) => { const b = await loc.boundingBox().catch(() => null); if (!b) return; await ensure(); await page.evaluate(([b, pad]) => { const h = document.getElementById('__hl'); Object.assign(h.style, { left: (b.x - pad) + 'px', top: (b.y - pad) + 'px', width: (b.width + 2 * pad) + 'px', height: (b.height + 2 * pad) + 'px', opacity: 1 }); }, [b, pad]); };
  const clearHl = () => page.evaluate(() => { const h = document.getElementById('__hl'); if (h) h.style.opacity = 0; });
  const scrollTo = async (to, steps = 24) => { const from = await page.evaluate(() => window.scrollY); for (let i = 1; i <= steps; i++) { await page.evaluate((y) => window.scrollTo(0, y), from + (to - from) * (i / steps)); await page.waitForTimeout(26); } };
  return { ensure, moveTo, moveToEl, pulse, highlight, clearHl, scrollTo };
}
