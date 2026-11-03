import type { APIContext } from 'astro';
import type { BetaLocale } from '../../data/betaContent';

/**
 * The visitor's address as nginx saw it (X-Real-IP, set by the /beta location
 * block), falling back to the socket. The app rate-limits on it.
 */
export function clientIp(ctx: APIContext): string {
  const real = ctx.request.headers.get('x-real-ip');
  if (real) return real.trim();
  try {
    return ctx.clientAddress;
  } catch {
    return '';
  }
}

export function betaLocale(value: unknown): BetaLocale {
  return value === 'en' ? 'en' : 'fr';
}

export const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
