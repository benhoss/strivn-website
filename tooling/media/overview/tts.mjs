// Voice-over for the product-overview video. One mp3 per segment.
// Usage: ./run.sh overview/tts.mjs fr [voiceId]
//   in : content/overview-<lang>.json
//   out: .work/overview/audio/<lang>/<id>.mp3
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR, VOICE_ID, ELEVEN_MODEL, elevenKey } from '../config.mjs';

const lang = process.argv[2] || 'fr';
const voiceId = process.argv[3] || VOICE_ID;
const PROJECT = process.env.MEDIA_PROJECT || 'overview'; // 'overview' | 'scouting' | …
const key = elevenKey();
const out = resolve(DIR.work, PROJECT, 'audio', lang);
mkdirSync(out, { recursive: true });
const { segments } = JSON.parse(readFileSync(resolve(DIR.content, `${PROJECT}-${lang}.json`), 'utf8'));

for (const seg of segments) {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: { 'xi-api-key': key, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: seg.text, model_id: ELEVEN_MODEL, voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0, use_speaker_boost: true } }),
  });
  if (!res.ok) { console.error(seg.id, 'HTTP', res.status, (await res.text()).slice(0, 200)); process.exit(1); }
  writeFileSync(resolve(out, `${seg.id}.mp3`), Buffer.from(await res.arrayBuffer()));
  console.log('ok', seg.id);
}
console.log('DONE voice=' + voiceId + ' lang=' + lang);
