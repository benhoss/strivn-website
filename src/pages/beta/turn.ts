/**
 * One turn of the generated website, streamed to the browser as SSE:
 * the app composes items, this route renders each with the site's own
 * components and forwards the HTML (`html`), plus what the page draws as
 * buttons (`ask`, `suggestions`) and the visit's state (`status`, `profile`,
 * `done`, `error`).
 */
import type { APIRoute } from 'astro';
import { streamTurn } from '../../lib/compose/upstream';
import { renderItem, type Item } from '../../lib/compose/render';
import { betaLocale, clientIp } from '../../lib/compose/http';

export const prerender = false;

export const POST: APIRoute = async (ctx) => {
  const body = await ctx.request.json().catch(() => ({}));
  const token = typeof body.token === 'string' ? body.token.slice(0, 64) : '';
  const message = typeof body.message === 'string' ? body.message.trim().slice(0, 600) : '';
  const locale = betaLocale(body.locale);
  const pageUrl = typeof body.pageUrl === 'string' ? body.pageUrl.slice(0, 300) : '';
  const turnKey = String(Number(body.turn) || Date.now());
  const ip = clientIp(ctx);

  if (!token || !message) return new Response('Bad request', { status: 400 });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: string, data: unknown) =>
        controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
      let handoffUrl = typeof body.handoffUrl === 'string' ? body.handoffUrl : '';
      let index = 0;

      try {
        for await (const { event, data } of streamTurn(token, message, ip)) {
          if (event === 'item') {
            const item = data.item as Item;
            if (item.type === 'ask' || item.type === 'suggestions') {
              send(item.type, item);
              continue;
            }
            const html = await renderItem(item, { locale, key: `t${turnKey}-${index++}`, handoffUrl, pageUrl });
            if (html) send('html', { html, kind: item.type === 'section' ? item.section.kind : item.type });
          } else if (event === 'done') {
            handoffUrl = data.handoff_url ?? handoffUrl;
            send('done', data);
          } else {
            send(event, data);
          }
        }
      } catch {
        send('error', { code: 'failed' });
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'X-Accel-Buffering': 'no' },
  });
};
