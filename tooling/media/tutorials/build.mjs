// Build one feature tutorial end to end:
//   record scenes (real app) → phone framing for mobile scenes → intro/outro
//   cards → concat → burned-in subtitles.
// Usage: node tutorials/build.mjs <tutorial-id>   (see tutorials/scripts/*.mjs)
// Out:   public/videos/tutorials/<id>-en.mp4          (subtitles burned in)
//        tooling/media/tutorials/youtube/<id>/         (clean mp4 for YouTube + .srt + chapters/description)
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { DIR } from '../config.mjs';
import { chromium, recordScene, sh, go } from './lib.mjs';
import { coachLogin, playerLogin } from './login.mjs';

const id = process.argv[2];
if (!id) { console.error('usage: node tutorials/build.mjs <id>'); process.exit(1); }
const only = process.argv[3]; // optional: re-record one scene index and reuse the rest; `none` re-assembles without recording
const tut = (await import(`./scripts/${id}.mjs`)).default;
const WORK = resolve(DIR.work, 'tutorials', id); mkdirSync(WORK, { recursive: true });
const OUT_SITE = resolve(DIR.videos, 'tutorials'); mkdirSync(OUT_SITE, { recursive: true });
const OUT_YT = resolve(DIR.here, 'tutorials', 'youtube', id); mkdirSync(OUT_YT, { recursive: true });

const font = (f) => 'data:font/woff2;base64,' + readFileSync(resolve(DIR.public, 'fonts', f)).toString('base64');
const FONTS = `@font-face{font-family:Archivo;src:url(${font('archivo-latin.woff2')}) format('woff2');font-weight:100 900;font-stretch:62% 125%}
@font-face{font-family:JBM;src:url(${font('jetbrains-mono-latin.woff2')}) format('woff2');font-weight:100 800}`;
const LOGO = 'data:image/png;base64,' + readFileSync(resolve(DIR.public, 'strivn-logo-full-white-web.png')).toString('base64');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const BG = `background:#050B17;background-image:radial-gradient(70rem 45rem at 50% 18%, rgba(45,127,249,.20), transparent 62%),radial-gradient(50rem 36rem at 85% 110%, rgba(17,40,73,.9), transparent 70%)`;
const page = (body, css = '') => `<!doctype html><html><head><meta charset="utf-8"><style>${FONTS}*{margin:0;box-sizing:border-box}
html,body{width:1920px;height:1080px;overflow:hidden;font-family:Archivo,sans-serif;color:#F3F6FB}${css}</style></head><body>${body}</body></html>`;

// ── 1. record ────────────────────────────────────────────────────────────
const browser = await chromium.launch();
const ctxA = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'en-GB' });
const pa = await ctxA.newPage(); await coachLogin(pa); const coachState = await ctxA.storageState(); await ctxA.close();
let playerState = null;
if (tut.scenes.some((s) => s.as === 'player')) {
  const ctxP = await browser.newContext({ viewport: { width: 390, height: 844 }, locale: 'en-GB', isMobile: true, hasTouch: true });
  const pp = await ctxP.newPage(); await playerLogin(pp, tut.player); playerState = await ctxP.storageState(); await ctxP.close();
}
if (tut.setup && only === undefined) await tut.setup(); // a partial re-take keeps the data the reused scenes were recorded on

const scenes = [];
for (let i = 0; i < tut.scenes.length; i++) {
  const sc = tut.scenes[i];
  const meta = resolve(WORK, `scene-${i}.json`);
  if (only !== undefined && String(i) !== only && existsSync(meta)) { scenes.push(JSON.parse(readFileSync(meta, 'utf8'))); console.log(`scene ${i}: reused`); continue; }
  console.log(`scene ${i}: recording (${sc.device || 'desktop'}) …`);
  const r = await recordScene(browser, sc, { workDir: WORK, storageState: sc.as === 'player' ? playerState : coachState, name: String(i) });
  r.title = sc.title; r.eyebrow = sc.eyebrow;
  writeFileSync(meta, JSON.stringify(r));
  scenes.push(r);
  console.log(`  ${r.duration.toFixed(1)}s, ${r.cues.length} cues`);
}

// ── 2. stills: intro, outro, phone backdrop, subtitles ───────────────────
const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
const pg = await ctx.newPage();
const shot = async (html, file, transparent = false) => { await pg.setContent(html); await pg.evaluate(() => document.fonts.ready); await pg.waitForTimeout(150); await pg.screenshot({ path: file, omitBackground: transparent }); };

await shot(page(`<div class="w"><img src="${LOGO}" class="logo"><div class="eb">${esc(tut.eyebrow || 'Feature guide')}</div><h1>${esc(tut.title)}</h1><p>${esc(tut.subtitle)}</p>
  <ol>${tut.chapters.map((c, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span>${esc(c)}</li>`).join('')}</ol></div>`,
  `body{${BG}}.w{height:1080px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:26px}
  .logo{height:58px;margin-bottom:18px}.eb{font-family:JBM;font-size:20px;letter-spacing:.3em;text-transform:uppercase;color:#5D9CFA}
  h1{font-size:92px;font-weight:600;font-stretch:88%;letter-spacing:-.02em;line-height:1}p{font-size:31px;color:#B5C2D7;max-width:1200px;line-height:1.35}
  ol{list-style:none;display:flex;gap:14px;margin-top:26px;flex-wrap:wrap;justify-content:center;max-width:1600px}
  li{font-size:21px;color:#D7DEEA;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:10px 20px;background:rgba(255,255,255,.03)}
  li span{font-family:JBM;color:#5D9CFA;margin-right:10px;font-size:18px}`), resolve(WORK, 'intro.png'));

await shot(page(`<div class="w"><img src="${LOGO}" class="logo"><h1>${esc(tut.outroTitle || 'Try it with your team')}</h1>
  <p>${esc(tut.outroSub || 'Free for one team. Your whole staff, one platform.')}</p><div class="cta">Start free · strivn.net</div>
  <div class="help">More guides: docs.strivn.net</div></div>`,
  `body{${BG}}.w{height:1080px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:30px}
  .logo{height:64px;margin-bottom:14px}h1{font-size:84px;font-weight:600;font-stretch:88%;letter-spacing:-.02em}p{font-size:32px;color:#B5C2D7}
  .cta{margin-top:12px;background:#0F6DF8;color:#fff;font-size:30px;font-weight:600;padding:20px 40px;border-radius:999px}
  .help{font-family:JBM;font-size:20px;color:#8A9AB4;letter-spacing:.08em;margin-top:8px}`), resolve(WORK, 'outro.png'));

// Phone layout: screen 397×860 at (1180,60), with a bezel drawn behind it.
const PH = { x: 1180, y: 56, w: 398, h: 862 };
for (const [i, s] of scenes.entries()) {
  if (!s.mobile) continue;
  await shot(page(`<div class="side"><div class="eb">${esc(s.eyebrow || 'Player app')}</div><h2>${esc(s.title || '')}</h2></div>
    <div class="phone"></div>`,
    `body{${BG}}.side{position:absolute;left:180px;top:0;height:1000px;width:840px;display:flex;flex-direction:column;justify-content:center;gap:22px}
    .eb{font-family:JBM;font-size:20px;letter-spacing:.3em;text-transform:uppercase;color:#5D9CFA}h2{font-size:72px;font-weight:600;font-stretch:88%;line-height:1.02;letter-spacing:-.02em}
    .phone{position:absolute;left:${PH.x - 16}px;top:${PH.y - 16}px;width:${PH.w + 32}px;height:${PH.h + 32}px;border-radius:58px;background:#0B1424;
      border:2px solid rgba(255,255,255,.18);box-shadow:0 40px 90px rgba(0,0,0,.6),inset 0 0 0 6px #050B17}`), resolve(WORK, `phone-${i}.png`));
}

// Subtitle cues on the final timeline.
const INTRO = 4.5, OUTRO = 4.5, FADE = 0.4;
const all = []; let t = INTRO;
for (const s of scenes) { for (const c of s.cues) all.push({ ...c, start: c.start + t, end: c.end + t }); t += s.duration; }
const total = t + OUTRO;
// Split long captions into ≤2-line chunks, time-shared by length.
const MAXCH = 84;
const cues = [];
for (const c of all) {
  const sentences = c.text.split(/(?<=[.!?])\s+/);
  const parts = []; for (const s of sentences) { if (s.length <= MAXCH * 2) parts.push(s); else { const w = s.split(' '); let cur = ''; for (const x of w) { if ((cur + ' ' + x).length > MAXCH * 1.6) { parts.push(cur.trim()); cur = x; } else cur += ' ' + x; } if (cur.trim()) parts.push(cur.trim()); } }
  const merged = []; for (const p of parts) { const last = merged[merged.length - 1]; if (last && (last + ' ' + p).length <= MAXCH * 2) merged[merged.length - 1] = last + ' ' + p; else merged.push(p); }
  const len = merged.reduce((a, p) => a + p.length, 0); let st = c.start;
  merged.forEach((p, k) => { const d = (c.end - c.start) * (p.length / len); cues.push({ text: p, start: st, end: k === merged.length - 1 ? c.end : st + d, chapter: k === 0 ? c.chapter : undefined }); st += d; });
}
for (const [i, c] of cues.entries()) {
  await shot(page(`<div class="cap">${esc(c.text)}</div>`,
    `html,body{background:transparent}.cap{position:absolute;left:50%;bottom:44px;transform:translateX(-50%);max-width:1560px;width:max-content;
     background:rgba(5,11,23,.88);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:14px 30px;font-size:36px;font-weight:500;
     line-height:1.3;text-align:center;box-shadow:0 12px 36px rgba(0,0,0,.5);text-wrap:balance}`), resolve(WORK, `cue-${i}.png`), true);
}
await browser.close();

// ── 3. assemble ──────────────────────────────────────────────────────────
const enc = '-c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -r 30';
const card = (png, d, out) => sh(`ffmpeg -y -loop 1 -t ${d} -i "${png}" -vf "fade=t=in:st=0:d=${FADE},fade=t=out:st=${d - FADE}:d=${FADE},format=yuv420p" ${enc} "${out}" -loglevel error`);
card(resolve(WORK, 'intro.png'), INTRO, resolve(WORK, 'c-intro.mp4'));
card(resolve(WORK, 'outro.png'), OUTRO, resolve(WORK, 'c-outro.mp4'));
const parts = [resolve(WORK, 'c-intro.mp4')];
for (const [i, s] of scenes.entries()) {
  const out = resolve(WORK, `p-${i}.mp4`);
  if (s.mobile) {
    sh(`ffmpeg -y -loop 1 -i "${resolve(WORK, `phone-${i}.png`)}" -i "${s.clip}" -filter_complex "[1:v]scale=${PH.w}:${PH.h}:flags=lanczos,format=rgba,geq=r='r(X,Y)':g='g(X,Y)':b='b(X,Y)':a='if(gt(hypot(max(0,abs(X-W/2)-(W/2-42)),max(0,abs(Y-H/2)-(H/2-42))),42),0,255)'[ph];[0:v][ph]overlay=${PH.x}:${PH.y}:shortest=1,fade=t=in:st=0:d=${FADE},fade=t=out:st=${(s.duration - FADE).toFixed(2)}:d=${FADE}" ${enc} "${out}" -loglevel error`);
  } else {
    sh(`ffmpeg -y -i "${s.clip}" -vf "fade=t=in:st=0:d=${FADE},fade=t=out:st=${(s.duration - FADE).toFixed(2)}:d=${FADE}" ${enc} "${out}" -loglevel error`);
  }
  parts.push(out);
}
parts.push(resolve(WORK, 'c-outro.mp4'));
writeFileSync(resolve(WORK, 'concat.txt'), parts.map((p) => `file '${p}'`).join('\n'));
const clean = resolve(WORK, 'clean.mp4');
sh(`ffmpeg -y -f concat -safe 0 -i "${resolve(WORK, 'concat.txt')}" -f lavfi -t ${total.toFixed(2)} -i anullsrc=r=48000:cl=stereo -map 0:v -map 1:a -shortest ${enc} -c:a aac -b:a 128k -movflags +faststart "${clean}" -loglevel error`);

// Burn subtitles: chained overlays, each enabled for its cue window.
const inputs = cues.map((_, i) => `-i "${resolve(WORK, `cue-${i}.png`)}"`).join(' ');
let fc = '', prev = '0:v';
cues.forEach((c, i) => { const o = `v${i}`; fc += `[${prev}][${i + 1}:v]overlay=0:0:enable='between(t,${c.start.toFixed(3)},${(c.end - 0.04).toFixed(3)})'[${o}];`; prev = o; });
writeFileSync(resolve(WORK, 'subs.filter'), fc.replace(/;$/, ''));
const burned = resolve(OUT_SITE, `${id}-en.mp4`);
sh(`ffmpeg -y -i "${clean}" ${inputs} -filter_complex_script "${resolve(WORK, 'subs.filter')}" -map "[${prev}]" -map 0:a -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -c:a copy -movflags +faststart "${burned}" -loglevel error`);

// ── 4. YouTube kit: clean upload + SRT + chapters/description ────────────
const ts = (x) => { const h = Math.floor(x / 3600), m = Math.floor((x % 3600) / 60), s = x % 60; return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${s.toFixed(3).padStart(6, '0').replace('.', ',')}`; };
writeFileSync(resolve(OUT_YT, `${id}-en.srt`), cues.map((c, i) => `${i + 1}\n${ts(c.start)} --> ${ts(c.end)}\n${c.text}\n`).join('\n'));
sh(`cp "${clean}" "${resolve(OUT_YT, `${id}-en-youtube.mp4`)}"`);
const mmss = (x) => `${Math.floor(x / 60)}:${String(Math.floor(x % 60)).padStart(2, '0')}`;
// YouTube only shows chapters when the first starts at 0:00 and each lasts
// at least 10 s: the intro folds into the first chapter, the outro into the
// last, and a chapter shorter than 10 s merges into the one before it.
const marks = cues.filter((c) => c.chapter).map((c) => ({ t: c.start, title: c.chapter }));
if (marks.length) marks[0].t = 0;
const chapters = [];
for (const [i, m] of marks.entries()) {
  const end = i + 1 < marks.length ? marks[i + 1].t : total;
  if (chapters.length && end - m.t < 10) continue;
  chapters.push(m);
}
const chap = chapters.map((m) => `${mmss(m.t)} ${m.title}`);
writeFileSync(resolve(OUT_YT, 'youtube.md'), `# ${tut.youtube.title}

**Duration:** ${mmss(total)} · **Language:** English · **Captions:** \`${id}-en.srt\` (upload as English subtitles)

## Title
${tut.youtube.title}

## Description
${tut.youtube.description}

Chapters
${chap.join('\n')}

Start free with one team → https://strivn.net
Help center → https://docs.strivn.net

## Tags
${tut.youtube.tags.join(', ')}

## Playlist
strivn — Feature guides
`);
console.log(`\n✓ ${burned}  (${total.toFixed(1)}s, ${cues.length} cues)\n✓ ${OUT_YT}`);
