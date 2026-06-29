// Assemble the product-overview: intro card + scene clips + outro card, with
// burned-in subtitles and the voice-over track.
// Usage: ./run.sh overview/finalize.mjs fr
//   in : .work/overview/scenes/<lang>/*.mp4, .work/overview/audio/<lang>/*.mp3, content/overview-<lang>.json
//   out: public/videos/overview-<lang>.mp4
import { chromium } from 'playwright';
import { readFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { DIR } from '../config.mjs';
import { ffprobe } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const AUD = resolve(DIR.work, 'overview', 'audio', lang);
const SCN = resolve(DIR.work, 'overview', 'scenes', lang);
const WORK = resolve(DIR.work, 'overview', 'finalize', lang);
mkdirSync(WORK, { recursive: true });
const LOGO = resolve(DIR.public, 'strivn-logo-full-white-web.png');

const INTRO_D = 3.4, OUTRO_D = 4.2, MAXCH = 82;
const { cards, segments } = JSON.parse(readFileSync(resolve(DIR.content, `overview-${lang}.json`), 'utf8'));
const IDS = segments.map((s) => s.id);
const dur = IDS.map((id) => ffprobe(resolve(AUD, `${id}.mp3`)));

// ── subtitle cues (caption fallback text), chunked ≤2 lines, offset by intro ──
const chunk = (t) => { const w = t.split(/\s+/), out = []; let c = ''; for (const x of w) { if (c && (c + ' ' + x).length > MAXCH) { out.push(c); c = x; } else c = c ? c + ' ' + x : x; } if (c) out.push(c); return out; };
const cues = []; let cum = INTRO_D;
segments.forEach((seg, i) => {
  const parts = (seg.caption || seg.text).split(/(?<=[.:?!])\s+/).map((s) => s.trim()).filter(Boolean).flatMap(chunk);
  const tot = parts.reduce((a, p) => a + p.length, 0); let start = cum;
  parts.forEach((p) => { const d = dur[i] * (p.length / tot); cues.push({ text: p, start, end: start + d }); start += d; });
  cum += dur[i];
});

// ── render intro / outro / subtitle PNGs ──
const fontLink = `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">`;
const cardCss = `*{margin:0;box-sizing:border-box}html,body{width:1280px;height:800px;font-family:'Inter',sans-serif;background:#07080f;color:#f8fafc;overflow:hidden}.wrap{position:relative;width:1280px;height:800px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px;text-align:center}.wrap::before{content:'';position:absolute;inset:0;background:radial-gradient(60rem 40rem at 50% 28%, rgba(45,127,249,0.16), transparent 60%),radial-gradient(40rem 30rem at 50% 110%, rgba(11,30,58,0.6), transparent 70%)}.logo{height:62px;position:relative}.eyebrow{position:relative;font-family:'JetBrains Mono',monospace;font-size:15px;letter-spacing:0.28em;text-transform:uppercase;color:#4f94fb}h1{position:relative;font-size:54px;font-weight:600;letter-spacing:-0.02em;line-height:1.06;max-width:1000px}.sub{position:relative;font-size:23px;color:#b5c2d7;max-width:780px;line-height:1.4}.cta{position:relative;margin-top:6px;display:inline-flex;align-items:center;gap:10px;padding:13px 26px;border-radius:999px;background:#2d7ff9;color:#fff;font-size:21px;font-weight:600}`;
const logoData = 'data:image/png;base64,' + readFileSync(LOGO).toString('base64');
const card = (inner) => `<!doctype html><html><head><meta charset="utf-8">${fontLink}<style>${cardCss}</style></head><body><div class="wrap">${inner}</div></body></html>`;
const intro = card(`<img class="logo" src="${logoData}"/>${cards.introEyebrow ? `<div class="eyebrow">${cards.introEyebrow}</div>` : ''}<h1>${cards.introTitle}</h1><div class="sub">${cards.introSub || ''}</div>`);
const outro = card(`<img class="logo" src="${logoData}"/><h1>${cards.outroTitle}</h1><div class="sub">${cards.outroSub || ''}</div>${cards.outroCta ? `<div class="cta">${cards.outroCta}</div>` : ''}`);
const subHtml = (text) => `<!doctype html><html><head><meta charset="utf-8">${fontLink}<style>*{margin:0;box-sizing:border-box}html,body{width:1280px;height:800px;background:transparent;font-family:'Inter',sans-serif}.cap{position:absolute;left:50%;bottom:48px;transform:translateX(-50%);max-width:1080px;background:rgba(7,8,15,0.84);border:1px solid rgba(255,255,255,0.10);border-radius:12px;padding:11px 24px;color:#f8fafc;font-size:26px;font-weight:500;line-height:1.32;text-align:center;box-shadow:0 10px 34px rgba(0,0,0,0.45)}</style></head><body><div class="cap">${text.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</div></body></html>`;

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
for (const [html, name] of [[intro, 'intro'], [outro, 'outro']]) { await page.setContent(html, { waitUntil: 'networkidle' }); await page.waitForTimeout(400); await page.screenshot({ path: resolve(WORK, `${name}.png`) }); }
for (let i = 0; i < cues.length; i++) { await page.setContent(subHtml(cues[i].text), { waitUntil: 'networkidle' }); await page.waitForTimeout(110); await page.screenshot({ path: resolve(WORK, `cue-${i}.png`), omitBackground: true }); }
await browser.close();

// ── card clips (video-only, fades) ──
const mkCard = (name, d) => execSync(`ffmpeg -y -loop 1 -i "${resolve(WORK, name + '.png')}" -t ${d} -vf "scale=1280:800,fade=t=in:st=0:d=0.5,fade=t=out:st=${(d - 0.5).toFixed(2)}:d=0.5,format=yuv420p" -r 25 -an -c:v libx264 -profile:v high -crf 20 "${resolve(WORK, name + '.mp4')}" -loglevel error`);
mkCard('intro', INTRO_D); mkCard('outro', OUTRO_D);

// ── concat intro + scene clips + outro (video only) ──
const parts = [resolve(WORK, 'intro.mp4'), ...IDS.map((id) => resolve(SCN, `${id}.mp4`)), resolve(WORK, 'outro.mp4')];
const inA = parts.map((p) => `-i "${p}"`).join(' ');
const cc = parts.map((_, i) => `[${i}:v]fps=25,scale=1280:800,setsar=1[v${i}]`).join(';');
const cv = parts.map((_, i) => `[v${i}]`).join('');
const body = resolve(WORK, 'body.mp4');
execSync(`ffmpeg -y ${inA} -filter_complex "${cc};${cv}concat=n=${parts.length}:v=1:a=0[v]" -map "[v]" -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 22 -preset medium "${body}" -loglevel error`);
const TOTAL = ffprobe(body);

// ── overlay subtitle PNGs (timed) ──
const subIns = cues.map((_, i) => `-loop 1 -framerate 25 -t ${TOTAL.toFixed(2)} -i "${resolve(WORK, 'cue-' + i + '.png')}"`).join(' ');
let pre = '', chain = '', prev = '[0:v]';
cues.forEach((c, i) => { pre += `[${i + 1}:v]scale=1280:800,setsar=1[s${i}];`; const o = i === cues.length - 1 ? '[vo]' : `[o${i}]`; chain += `${prev}[s${i}]overlay=enable='between(t,${c.start.toFixed(2)},${c.end.toFixed(2)})':x=0:y=0${o};`; prev = o; });
const subbed = resolve(WORK, 'subbed.mp4');
execSync(`ffmpeg -y -i "${body}" ${subIns} -filter_complex "${(pre + chain).replace(/;$/, '')}" -map "[vo]" -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 23 -preset medium "${subbed}" -loglevel error`);

// ── narration (concat segments) + mux, delayed by the intro card ──
const narration = resolve(WORK, 'narration.m4a');
const audIn = IDS.map((id) => `-i "${resolve(AUD, id + '.mp3')}"`).join(' ');
const audCat = IDS.map((_, i) => `[${i}:a]`).join('');
execSync(`ffmpeg -y ${audIn} -filter_complex "${audCat}concat=n=${IDS.length}:v=0:a=1[a]" -map "[a]" -c:a aac -b:a 160k "${narration}" -loglevel error`);

mkdirSync(DIR.videos, { recursive: true });
const out = resolve(DIR.videos, `overview-${lang}.mp4`);
const delayMs = Math.round(INTRO_D * 1000);
// adelay shifts narration past the intro card; apad keeps audio running under
// the outro card; -shortest then trims audio to the (longer) video length.
execSync(`ffmpeg -y -i "${subbed}" -i "${narration}" -filter_complex "[1:a]adelay=${delayMs}|${delayMs},apad[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 160k -movflags +faststart -shortest "${out}" -loglevel error`);
console.log('DONE', out, 'total=' + TOTAL.toFixed(1) + 's cues=' + cues.length);
