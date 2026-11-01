/**
 * The composer in strivn-app, seen from the beta's Node routes. Server to
 * server: the visitor's browser only ever talks to strivn.net.
 *
 * DISCOVER_API (runtime env, e.g. https://app.strivn.net/api/discover) points
 * at the app; without it the routes run the scripted offline composer
 * (mock.ts), for design, demos and screenshots. DISCOVER_PROXY_KEY is the
 * shared secret that lets the app trust the X-Discovery-Client-Ip header, so
 * its per-visitor limits see the visitor and not this server.
 */
import { mockSession, mockTurn } from './mock';

export interface UpstreamSession {
  token: string;
  locale: string;
  turns: number;
  max_turns: number;
  available: boolean;
  page: { turn: number; prompt: string; items: any[] }[];
  profile: Record<string, string>;
  handoff_url: string;
}

export type UpstreamEvent = { event: string; data: any };

const API = (process.env.DISCOVER_API ?? '').replace(/\/$/, '');
export const MOCK = API === '';

function headers(clientIp: string, json = true): Record<string, string> {
  const h: Record<string, string> = { Accept: json ? 'application/json' : 'text/event-stream' };
  if (process.env.DISCOVER_PROXY_KEY) {
    h['X-Discovery-Key'] = process.env.DISCOVER_PROXY_KEY;
    h['X-Discovery-Client-Ip'] = clientIp;
  }
  return h;
}

export async function getSession(token: string, clientIp: string): Promise<UpstreamSession | null> {
  if (MOCK) return null;
  const res = await fetch(`${API}/sessions/${encodeURIComponent(token)}`, { headers: headers(clientIp) }).catch(() => null);
  return res?.ok ? ((await res.json()) as UpstreamSession) : null;
}

export async function createSession(locale: string, referrer: string | null, clientIp: string): Promise<UpstreamSession> {
  if (MOCK) return mockSession(locale);
  const res = await fetch(`${API}/sessions`, {
    method: 'POST',
    headers: { ...headers(clientIp), 'Content-Type': 'application/json' },
    body: JSON.stringify({ locale, referrer }),
  });
  if (!res.ok) throw new Error(`session ${res.status}`);
  return (await res.json()) as UpstreamSession;
}

/** The turn's events, as the app streams them. Errors become an `error` event with a code. */
export async function* streamTurn(token: string, message: string, clientIp: string): AsyncGenerator<UpstreamEvent> {
  if (MOCK) {
    yield* mockTurn(message);
    return;
  }

  let res: Response;
  try {
    res = await fetch(`${API}/sessions/${encodeURIComponent(token)}/turns`, {
      method: 'POST',
      headers: { ...headers(clientIp, false), 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
  } catch {
    yield { event: 'error', data: { code: 'network' } };
    return;
  }

  if (res.status === 429) {
    const body = await res.json().catch(() => ({}));
    yield { event: 'error', data: { code: body?.error === 'session_exhausted' ? 'exhausted' : 'rate', handoff_url: body?.handoff_url } };
    return;
  }
  if (res.status === 503) {
    yield { event: 'error', data: { code: 'unavailable' } };
    return;
  }
  if (!res.ok || !res.body) {
    yield { event: 'error', data: { code: 'failed' } };
    return;
  }

  const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
  let buffer = '';
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += value;
    let cut: number;
    while ((cut = buffer.indexOf('\n\n')) !== -1) {
      const frame = buffer.slice(0, cut);
      buffer = buffer.slice(cut + 2);
      let event = 'message';
      let data = '';
      for (const line of frame.split('\n')) {
        if (line.startsWith('event:')) event = line.slice(6).trim();
        else if (line.startsWith('data:')) data += line.slice(5).trim();
      }
      try {
        yield { event, data: JSON.parse(data) };
      } catch {
        /* a malformed frame is skipped */
      }
    }
  }
}
