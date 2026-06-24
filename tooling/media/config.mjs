// Central config for the STRIVN marketing-media pipeline.
// Paths are derived relative to this file so the folder is portable.
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const HERE = dirname(fileURLToPath(import.meta.url));

export const DIR = {
  here: HERE,
  website: resolve(HERE, '../..'),
  public: resolve(HERE, '../../public'),
  screenshots: resolve(HERE, '../../public/screenshots'),
  videos: resolve(HERE, '../../public/videos'),
  content: resolve(HERE, 'content'),
  data: resolve(HERE, 'data'),
  work: resolve(HERE, '.work'), // gitignored: audio, raw video, finalize temp, narrated core
};

// The running strivn-app (Docker compose, project "p3rform", web on :8082).
export const BASE = process.env.STRIVN_APP_URL || 'http://localhost:8082';

// Demo credentials seeded by SampleDataSeeder + the tweaks documented in the README.
export const COACH = { phone: process.env.STRIVN_COACH_PHONE || '+32470112233', password: process.env.STRIVN_COACH_PW || 'password' };
export const PLAYER = { identifier: process.env.STRIVN_PLAYER_ID || 'kylian.moreau@acverel.test', password: process.env.STRIVN_PLAYER_PW || 'portalpass' };
export const TEAM = process.env.STRIVN_TEAM || '1';

// ElevenLabs voice (Adrien Clairon). Override with ELEVEN_VOICE_ID.
export const VOICE_ID = process.env.ELEVEN_VOICE_ID || 'c365oriviHmAhyLhpuN6';
export const ELEVEN_MODEL = 'eleven_multilingual_v2';

export const VIEWPORT = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 402, height: 860 },
};

// Reads ELEVENLABS_API_KEY from Website/.env (never logged, never committed).
export function elevenKey() {
  const env = readFileSync(resolve(DIR.website, '.env'), 'utf8');
  const m = env.match(/^ELEVENLABS_API_KEY=(.+)$/m);
  if (!m) throw new Error('ELEVENLABS_API_KEY missing in Website/.env');
  return m[1].trim().replace(/^["']|["']$/g, '');
}
