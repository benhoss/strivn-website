// Add branded intro/outro cards + burned-in subtitles to the narrated core.
// Usage: node explainer/finalize.mjs [lang=fr]
//   in : .work/explainer-core-<lang>.mp4, .work/audio/<lang>/*.mp3, content/explainer-<lang>.json
//   out: public/videos/explainer-load-planning-<lang>.mp4
//
// NOTE: this ffmpeg build has no libass/freetype, so subtitles are rendered as
// transparent PNGs (Playwright) and composited with the `overlay` filter.
import { chromium } from 'playwright';
import { readFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { DIR } from '../config.mjs';
import { ffprobe } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const AUD = resolve(DIR.work, 'audio', lang);
const WORK = resolve(DIR.work, 'finalize', lang);
mkdirSync(WORK, { recursive: true });
const LOGO = resolve(DIR.public, 'strivn-logo-full-white-web.png');

const core = resolve(DIR.work, `explainer-core-${lang}.mp4`);
const coreCopy = resolve(WORK, 'core.mp4');
copyFileSync(core, coreCopy);

const INTRO_D = 3.2, OUTRO_D = 4.0, MAXCH = 82;
const IDS = ['01-intro', '02-objectif', '03-acwr', '04-semaine', '05-exercices', '06-categories', '07-prevu-reel', '08-conclusion'];
const dur = IDS.map((id) => ffprobe(resolve(AUD, `${id}.mp3`)));
const { segments } = JSON.parse(readFileSync(resolve(DIR.content, `explainer-${lang}.json`), 'utf8'));

// ── cue list: displayed `caption` (fallback `text`), chunked to <= ~2 lines ──
const chunk = (t) => { const w = t.split(/\s+/), out = []; let cur = ''; for (const x of w) { if (cur && (cur + ' ' + x).length > MAXCH) { out.push(cur); cur = x; } else cur = cur ? cur + ' ' + x : x; } if (cur) out.push(cur); return out; };
const cues = []; let cum = INTRO_D;
segments.forEach((seg, i) => {
  const parts = (seg.caption || seg.text).split(/(?<=[.:?!])\s+/).map((s) => s.trim()).filter(Boolean).flatMap(chunk);
  const total = parts.reduce((a, p) => a + p.length, 0); let start = cum;
  parts.forEach((p) => { const d = dur[i] * (p.length / total); cues.push({ text: p, start, end: start + d }); start += d; });
  cum += dur[i];
});

// ── render intro / outro / subtitle PNGs ──
const fontLink = `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">`;
const cardCss = `*{margin:0;box-sizing:border-box}html,body{width:1280px;height:800px;font-family:'Inter',sans-serif;background:#07080f;color:#f8fafc;overflow:hidden}.wrap{position:relative;width:1280px;height:800px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;text-align:center}.wrap::before{content:'';position:absolute;inset:0;background:radial-gradient(60rem 40rem at 50% 28%, rgba(45,127,249,0.16), transparent 60%),radial-gradient(40rem 30rem at 50% 110%, rgba(11,30,58,0.6), transparent 70%)}.logo{height:64px;position:relative}.eyebrow{position:relative;font-family:'JetBrains Mono',monospace;font-size:15px;letter-spacing:0.28em;text-transform:uppercase;color:#4f94fb}h1{position:relative;font-size:58px;font-weight:600;letter-spacing:-0.02em;line-height:1.05}.sub{position:relative;font-size:24px;color:#b5c2d7;max-width:760px;line-height:1.4}.cta{position:relative;margin-top:8px;display:inline-flex;align-items:center;gap:10px;padding:14px 26px;border-radius:999px;background:#2d7ff9;color:#fff;font-size:22px;font-weight:600}`;
const logoData = 'data:image/png;base64,' + readFileSync(LOGO).toString('base64');
const card = (inner) => `<!doctype html><html><head><meta charset="utf-8">${fontLink}<style>${cardCss}</style></head><body><div class="wrap">${inner}</div></body></html>`;
const intro = card(`<img class="logo" src="${logoData}"/><div class="eyebrow">Démo guidée</div><h1>Planification de charge</h1><div class="sub">Construire la semaine, équilibrer la charge et anticiper le risque, en quelques minutes.</div>`);
const outro = card(`<img class="logo" src="${logoData}"/><h1>Planifiez. Suivez. Anticipez.</h1><div class="sub">La plateforme tout-en-un pour le staff, gratuite pour une équipe.</div><div class="cta">Commencer gratuitement · strivn.net</div>`);
const subHtml = (text) => `<!doctype html><html><head><meta charset="utf-8">${fontLink}<style>*{margin:0;box-sizing:border-box}html,body{width:1280px;height:800px;background:transparent;font-family:'Inter',sans-serif}.cap{position:absolute;left:50%;bottom:50px;transform:translateX(-50%);max-width:1080px;background:rgba(7,8,15,0.84);border:1px solid rgba(255,255,255,0.10);border-radius:12px;padding:11px 24px;color:#f8fafc;font-size:26px;font-weight:500;line-height:1.32;text-align:center;box-shadow:0 10px 34px rgba(0,0,0,0.45)}</style></head><body><div class="cap">${text.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</div></body></html>`;

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
for (const [html, name] of [[intro, 'intro'], [outro, 'outro']]) { await page.setContent(html, { waitUntil: 'networkidle' }); await page.waitForTimeout(400); await page.screenshot({ path: resolve(WORK, `${name}.png`) }); }
for (let i = 0; i < cues.length; i++) { await page.setContent(subHtml(cues[i].text), { waitUntil: 'networkidle' }); await page.waitForTimeout(120); await page.screenshot({ path: resolve(WORK, `cue-${i}.png`), omitBackground: true }); }
await browser.close();

// ── card clips (fades + silent audio) ──
const mkCard = (name, d) => execSync(`ffmpeg -y -loop 1 -i "${resolve(WORK, name + '.png')}" -f lavfi -i anullsrc=r=44100:cl=stereo -t ${d} -vf "scale=1280:800,fade=t=in:st=0:d=0.5,fade=t=out:st=${(d - 0.5).toFixed(2)}:d=0.5,format=yuv420p" -r 25 -c:v libx264 -profile:v high -crf 20 -c:a aac -b:a 160k -shortest "${resolve(WORK, name + '.mp4')}" -loglevel error`);
mkCard('intro', INTRO_D); mkCard('outro', OUTRO_D);

// ── concat intro + core + outro ──
const concatMp4 = resolve(WORK, 'concat.mp4');
execSync(`ffmpeg -y -i "${resolve(WORK, 'intro.mp4')}" -i "${coreCopy}" -i "${resolve(WORK, 'outro.mp4')}" -filter_complex "[0:v]fps=25,scale=1280:800,setsar=1[v0];[1:v]fps=25,scale=1280:800,setsar=1[v1];[2:v]fps=25,scale=1280:800,setsar=1[v2];[0:a]aformat=sample_rates=44100:channel_layouts=stereo[a0];[1:a]aformat=sample_rates=44100:channel_layouts=stereo[a1];[2:a]aformat=sample_rates=44100:channel_layouts=stereo[a2];[v0][a0][v1][a1][v2][a2]concat=n=3:v=1:a=1[vc][ac]" -map "[vc]" -map "[ac]" -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 22 -preset medium -c:a aac -b:a 160k "${concatMp4}" -loglevel error`);
const TOTAL = ffprobe(concatMp4);

// ── overlay subtitle PNGs (scaled to frame, timed) ──
const ins = cues.map((_, i) => `-loop 1 -framerate 25 -t ${TOTAL.toFixed(2)} -i "${resolve(WORK, 'cue-' + i + '.png')}"`).join(' ');
let pre = '', chainStr = '', prev = '[0:v]';
cues.forEach((c, i) => { pre += `[${i + 1}:v]scale=1280:800,setsar=1[s${i}];`; const o = i === cues.length - 1 ? '[vo]' : `[o${i}]`; chainStr += `${prev}[s${i}]overlay=enable='between(t,${c.start.toFixed(2)},${c.end.toFixed(2)})':x=0:y=0${o};`; prev = o; });
const fc = (pre + chainStr).replace(/;$/, '');

mkdirSync(DIR.videos, { recursive: true });
const out = resolve(DIR.videos, `explainer-load-planning-${lang}.mp4`);
execSync(`ffmpeg -y -i "${concatMp4}" ${ins} -filter_complex "${fc}" -map "[vo]" -map 0:a -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 23 -preset slow -c:a copy -movflags +faststart "${out}" -loglevel error`);
console.log('DONE', out, 'total=' + TOTAL.toFixed(1) + 's cues=' + cues.length);
