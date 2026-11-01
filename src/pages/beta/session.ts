/**
 * Opens a visit, or restores one (the token kept in the visitor's browser),
 * with its page already rendered by the site's components.
 */
import type { APIRoute } from 'astro';
import { createSession, getSession, MOCK } from '../../lib/compose/upstream';
import { renderItem, type Item } from '../../lib/compose/render';
import { betaLocale, clientIp, json } from '../../lib/compose/http';

export const prerender = false;

export const POST: APIRoute = async (ctx) => {
  const body = await ctx.request.json().catch(() => ({}));
  const locale = betaLocale(body.locale);
  const ip = clientIp(ctx);
  const token = typeof body.token === 'string' && body.token.length <= 64 ? body.token : null;

  try {
    const session = (token ? await getSession(token, ip) : null) ?? (await createSession(locale, typeof body.referrer === 'string' ? body.referrer.slice(0, 500) : null, ip));
    const pageUrl = typeof body.pageUrl === 'string' ? body.pageUrl : '';
    const restoredLocale = betaLocale(session.locale);

    const turns = [];
    for (const turn of session.page ?? []) {
      const html: string[] = [];
      for (const [index, item] of (turn.items ?? []).entries()) {
        const out = await renderItem(item as Item, { locale: restoredLocale, key: `t${turn.turn}-${index}`, handoffUrl: session.handoff_url, pageUrl });
        if (out) html.push(out);
      }
      turns.push({ prompt: turn.prompt, html });
    }
    const last = (session.page ?? []).at(-1);
    const suggestions = last?.items?.find((i: any) => i.type === 'suggestions')?.items ?? [];

    return json({
      token: session.token,
      locale: restoredLocale,
      turns: session.turns,
      available: session.available !== false,
      profile: session.profile ?? {},
      handoff_url: session.handoff_url,
      page: turns,
      suggestions,
      mock: MOCK,
    });
  } catch {
    return json({ available: false }, 503);
  }
};
