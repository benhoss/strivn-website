// Record the product-overview as one short clip per scene, each trimmed to its
// segment's voice-over duration. Desktop scenes reuse a coach session; the
// portal scene uses a mobile player session.
// Usage: ./run.sh overview/record.mjs fr
//   in : .work/overview/audio/<lang>/*.mp3, content/overview-<lang>.json, running app
//   out: .work/overview/scenes/<lang>/<id>.mp4   (1280x800, silent)
import { mkdirSync, renameSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { DIR, BASE } from '../config.mjs';
import { chromium, ffprobe, coachLogin, playerLogin, overlays } from '../lib/browser.mjs';

const lang = process.argv[2] || 'fr';
const PROJECT = process.env.MEDIA_PROJECT || 'overview';
const AUD = resolve(DIR.work, PROJECT, 'audio', lang);
const RAW = resolve(DIR.work, PROJECT, 'raw');
const OUT = resolve(DIR.work, PROJECT, 'scenes', lang);
mkdirSync(RAW, { recursive: true });
mkdirSync(OUT, { recursive: true });

const { segments } = JSON.parse(readFileSync(resolve(DIR.content, `${PROJECT}-${lang}.json`), 'utf8'));

const browser = await chromium.launch();

// Authenticate once; reuse the storage state per scene (no re-login each time).
const c0 = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 1 });
const cp0 = await c0.newPage(); await coachLogin(cp0, lang); const coachState = await c0.storageState(); await c0.close();
const p0 = await browser.newContext({ viewport: { width: 402, height: 860 }, locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const pp0 = await p0.newPage(); await playerLogin(pp0, lang); const playerState = await p0.storageState(); await p0.close();

// Per-scene action. Keep it light + defensive (skip selectors that aren't there).
async function sceneAction(id, page, ov, seg) {
  const { moveTo, moveToEl, highlight, clearHl, scrollTo } = ov;
  const byText = (re) => page.getByText(re).first();
  if (id === '02-calendrier') { await moveTo(700, 360); await moveTo(420, 430); await moveTo(900, 430); }
  else if (id === '03-portail') { await page.waitForTimeout(800); await scrollTo(420); await page.waitForTimeout(600); await scrollTo(0); }
  else if (id === '04-briefing') { const t = byText(/réponses|responses|Aujourd|risque/i); if (await t.count()) { await highlight(t.locator('xpath=ancestor::*[1]'), 8); await moveToEl(t); } else await moveTo(700, 380); }
  else if (id === '05-charge') { await scrollTo(280); const t = byText(/Entraînement|Force \+ activation/i); if (await t.count()) { await highlight(t.locator('xpath=ancestor::*[1]'), 8); await moveToEl(t); } }
  else if (id === '06-medical') { const t = byText(/Lefèvre|genou|Retour|réathl|indispo|partiel/i); if (await t.count()) { await highlight(t.locator('xpath=ancestor::*[1]'), 8); await moveToEl(t); } else await moveTo(700, 380); }
  else if (id === '07-assistant') {
    const box = page.locator('textarea, input[type=text]').first();
    if (await box.count()) { await moveToEl(box); await box.click().catch(() => {}); await box.type(seg.scene.type || 'Qui est à risque cette semaine ?', { delay: 55 }).catch(() => {}); }
  }
  // ── Scouting-report demo scenes (full authoring path) ──
  else if (id === 'sc-01-dossier') { const t = byText(/Joueurs à surveiller|DANGER|Analyse tactique|Effectif/i); if (await t.count()) { await highlight(t.locator('xpath=ancestor::*[1]'), 8); await moveToEl(t); } await page.waitForTimeout(900); }
  else if (id === 'sc-02-session') { await page.waitForTimeout(900); const t = byText(/Pressing déclenché|Diego Lambert|Observations/i); if (await t.count()) { await highlight(t.locator('xpath=ancestor::*[1]'), 8); await moveToEl(t); } await page.waitForTimeout(900); await scrollTo(180); }
  // Aperçu global filtré: scroll to the dossier's cross-session Observations and click a tag filter.
  else if (id === 'sc-03-apercu') { await scrollTo(540); await page.waitForTimeout(800); const f = byText(/^Pressing$|^Construction$|^Transition offensive$/i); if (await f.count()) { await moveToEl(f); await f.click().catch(() => {}); await page.waitForTimeout(900); } else await scrollTo(640); }
  // Création + glisser: new report → ensure a section → drag two compose items in.
  else if (id === 'sc-04-creation') {
    const nb = page.locator('[data-new-report]').first();
    if (await nb.count()) { await moveToEl(nb); await nb.click().catch(() => {}); await page.waitForURL(/reports\/\d+\/edit/, { timeout: 15000 }).catch(() => {}); }
    await page.waitForTimeout(2200);
    if (await page.locator('[data-section-id]').count() === 0) { await page.locator('[data-add-section]').first().click().catch(() => {}); await page.waitForTimeout(1100); }
    const cards = page.locator('[data-compose-panel] [draggable="true"]');
    const sec = page.locator('[data-section-id]').first();
    const n = await cards.count();
    if (n) { await moveToEl(cards.nth(0)); await cards.nth(0).dragTo(sec, { timeout: 8000 }).catch(() => {}); await page.waitForTimeout(1000); }
    if (n > 1) { const last = n - 1; await moveToEl(cards.nth(last)); await cards.nth(last).dragTo(sec, { timeout: 8000 }).catch(() => {}); await page.waitForTimeout(1000); }
  }
  else if (id === 'sc-05-rapport') { await page.waitForTimeout(1600); await moveTo(420, 300); await scrollTo(320); await page.waitForTimeout(700); await scrollTo(680); await page.waitForTimeout(800); await scrollTo(980); await page.waitForTimeout(600); await scrollTo(0); }
  else if (id === 'sc-06-partage') {
    await page.waitForTimeout(1400);
    const btn = page.getByRole('button', { name: /Partager/i }).first();
    if (await btn.count()) { await moveToEl(btn); await btn.click().catch(() => {}); await page.waitForTimeout(1200); }
    const match = byText(/match|destinataire|lien|Notifier|à venir/i); if (await match.count()) await moveToEl(match);
  }
  else if (id === 'sc-07-joueur-event') { await page.waitForTimeout(700); const t = byText(/Rapports à consulter|Plan de match|consulter/i); if (await t.count()) { await scrollTo(220); await highlight(t.locator('xpath=ancestor::*[1]'), 6); await moveToEl(t); } else await scrollTo(220); }
  else if (id === 'sc-08-joueur-rapport') { await page.waitForTimeout(700); await scrollTo(240); await page.waitForTimeout(700); await scrollTo(520); await page.waitForTimeout(800); await scrollTo(820); await page.waitForTimeout(700); await scrollTo(0); }
  else { await moveTo(720, 380); }
}

// Montage scene: a slideshow of pre-captured full-page screenshots (the "other
// features" overview). Capture each shot with the coach session, then build an
// equal-time crossfaded slideshow that fills the segment's voice-over duration.
async function buildMontage(seg, dur) {
  const imgDir = resolve(RAW, 'montage', seg.id);
  mkdirSync(imgDir, { recursive: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: lang === 'fr' ? 'fr-FR' : 'nl-BE', deviceScaleFactor: 1, storageState: coachState });
  const page = await ctx.newPage();
  const files = [];
  for (let i = 0; i < seg.scene.shots.length; i++) {
    const slug = seg.scene.shots[i];
    const url = slug.startsWith('/') ? `${BASE}${slug}?lang=${lang}` : `${BASE}/teams/1/${slug}?lang=${lang}`;
    try { await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 }); } catch {}
    try { await page.waitForLoadState('networkidle', { timeout: 6000 }); } catch {}
    await page.waitForTimeout(900);
    const f = resolve(imgDir, `s${i}.png`);
    await page.screenshot({ path: f, clip: { x: 0, y: 0, width: 1440, height: 900 } });
    files.push(f);
  }
  await ctx.close();
  // 1440x900 and 1280x800 share a 1.6 aspect ratio → a plain scale, no crop.
  const per = dur / files.length;
  const clips = files.map((f, i) => {
    const c = resolve(imgDir, `c${i}.mp4`);
    execSync(`ffmpeg -y -loop 1 -i "${f}" -t ${per.toFixed(2)} -vf "scale=1280:800,fade=t=in:st=0:d=0.4,fade=t=out:st=${(per - 0.4).toFixed(2)}:d=0.4,format=yuv420p" -r 25 -an -c:v libx264 -profile:v high -crf 22 "${c}" -loglevel error`);
    return c;
  });
  const listFile = resolve(imgDir, 'list.txt');
  writeFileSync(listFile, clips.map((c) => `file '${c}'`).join('\n'));
  execSync(`ffmpeg -y -f concat -safe 0 -i "${listFile}" -c copy "${resolve(OUT, `${seg.id}.mp4`)}" -loglevel error`);
}

const cumScenes = [];
for (const seg of segments) {
  const dur = ffprobe(resolve(AUD, `${seg.id}.mp3`));
  if (seg.scene.kind === 'montage') { await buildMontage(seg, dur); cumScenes.push(seg.id); console.log('scene', seg.id, 'dur=' + dur.toFixed(1) + 's (montage ' + seg.scene.shots.length + ')'); continue; }
  const mobile = seg.scene.device === 'mobile';
  const ctx = await browser.newContext({
    viewport: mobile ? { width: 402, height: 860 } : { width: 1440, height: 900 },
    locale: lang === 'fr' ? 'fr-FR' : 'en-GB', deviceScaleFactor: mobile ? 2 : 1,
    isMobile: mobile, hasTouch: mobile, storageState: mobile ? playerState : coachState,
    recordVideo: { dir: RAW, size: mobile ? { width: 402, height: 860 } : { width: 1440, height: 900 } },
  });
  const page = await ctx.newPage();
  const t0ctx = Date.now();
  try { await page.goto(`${BASE}${seg.scene.route}?lang=${lang}`, { waitUntil: 'domcontentloaded', timeout: 30000 }); } catch {}
  try { await page.waitForLoadState('networkidle', { timeout: 6000 }); } catch {}
  await page.waitForTimeout(1200);
  // dismiss the load-plan onboarding banner if present
  for (const l of ['Compris', "J'ai compris", 'Got it', 'Begrepen', 'Oké']) { const b = page.getByRole('button', { name: new RegExp(l, 'i') }); if (await b.count()) { await b.first().click().catch(() => {}); await page.waitForTimeout(400); break; } }
  // Data-heavy screens (briefing, medical) can show a white loading state for a
  // second or two — block until their real content renders so we never record a
  // blank frame. The wait extends startOffset, so it's trimmed off the front.
  const READY = {
    '04-briefing': /réponses|responses|antwoorden|risque|risk|frais|fresh|fatigue|surveiller|decision|décision/i,
    '06-medical': /Lefèvre|disponib|availab|beschikb|blessé|injur|geblesseerd|revalidat|rehab|return/i,
    'sc-01-dossier': /FC Aldenne|Effectif|surveiller|Analyse tactique/i,
    'sc-02-session': /Analyse vidéo|Observations|Pressing déclenché|Diego/i,
    'sc-03-apercu': /Observations|Pressing|Construction|session/i,
    'sc-05-rapport': /bloc défensif|surveiller|relances|Aldenne/i,
    'sc-06-partage': /bloc défensif|surveiller|relances|Aldenne/i,
    'sc-08-joueur-rapport': /bloc défensif|Diego|Notre plan|Schéma|Aldenne/i,
  };
  if (READY[seg.id]) { await page.getByText(READY[seg.id]).first().waitFor({ timeout: 15000 }).catch(() => {}); await page.waitForTimeout(500); }
  const ov = overlays(page); await ov.ensure();
  const startOffset = (Date.now() - t0ctx) / 1000; // seconds of nav/settle to trim off the front
  try { await sceneAction(seg.id, page, ov, seg); } catch (e) { console.log(seg.id, 'act ERR', e.message.slice(0, 50)); }
  while ((Date.now() - t0ctx) / 1000 < startOffset + dur) await page.waitForTimeout(50);

  const video = page.video();
  await ctx.close();
  const raw = resolve(RAW, `${seg.id}.webm`);
  renameSync(await video.path(), raw);

  // Trim to exactly the segment duration; normalize every scene to a 1280x800
  // canvas (mobile is scaled to fit height and centered on a dark background).
  const clip = resolve(OUT, `${seg.id}.mp4`);
  const vf = mobile
    ? `scale=-2:760,pad=1280:800:(ow-iw)/2:(oh-ih)/2:color=0x07080f`
    : `scale=1280:800`;
  execSync(`ffmpeg -y -ss ${startOffset.toFixed(2)} -t ${dur.toFixed(2)} -i "${raw}" -an -vf "${vf},format=yuv420p" -r 25 -c:v libx264 -profile:v high -crf 22 -preset medium "${clip}" -loglevel error`);
  cumScenes.push(seg.id);
  console.log('scene', seg.id, 'dur=' + dur.toFixed(1) + 's', mobile ? '(mobile)' : '');
}
await browser.close();
console.log('DONE scenes:', cumScenes.length);
