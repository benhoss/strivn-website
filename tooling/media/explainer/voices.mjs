// List ElevenLabs voices (needs the `voices_read` permission on the API key).
// Usage: node explainer/voices.mjs [filter]
import { elevenKey } from '../config.mjs';

const filter = (process.argv[2] || '').toLowerCase();
const res = await fetch('https://api.elevenlabs.io/v1/voices', { headers: { 'xi-api-key': elevenKey() } });
if (!res.ok) { console.error('HTTP', res.status, await res.text()); process.exit(1); }
const { voices = [] } = await res.json();
voices
  .filter((v) => !filter || `${v.name} ${v.labels?.language || ''} ${v.labels?.accent || ''}`.toLowerCase().includes(filter))
  .forEach((v) => console.log(`${v.voice_id}  ${(v.name || '').padEnd(18)} ${v.labels?.gender || ''} ${v.labels?.language || ''}/${v.labels?.accent || ''}`));
