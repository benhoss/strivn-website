# STRIVN marketing-media pipeline

Generates the real-app media used on the marketing site, all driven from the
**running strivn-app**:

- **App screenshots** for the S&C showcase carousels → `public/screenshots/`
- **Muted demo loop** of the Load planner (first carousel slide) → `public/videos/load-planning-<lang>.{mp4,webm}`
- **Muted readiness loop** of the morning story (player check-in → briefing → readiness → Planning) → `public/videos/readiness-<lang>.{mp4,webm}`
- **Narrated explainer** (intro + voice-over walkthrough + subtitles + outro) → `public/videos/explainer-load-planning-<lang>.mp4`

Everything is reproducible: screenshots and videos are derived artifacts, not
hand-made. Localized per language (`fr`, `en`).

---

## Prerequisites

1. **strivn-app running** (Docker compose, project `p3rform`, web on `:8082`).
   ```bash
   cd ../../../strivn-app && docker compose up -d
   ```
   The pipeline drives the *real* coach UI + player portal, so the app must be
   reachable at `http://localhost:8082` (override with `STRIVN_APP_URL`).

2. **Demo data** seeded and made *fictional* (no real club names). See
   [Demo data setup](#demo-data-setup) — this is a one-time thing per DB.

3. **ffmpeg + ffprobe** on `PATH` (Homebrew). Note: this build has **no libass /
   freetype**, so subtitles are rendered as PNG overlays (handled automatically).

4. **Playwright** — reused from strivn-app via a `node_modules` symlink that
   `run.sh` creates on first run. No `npm install` needed here.

5. **ElevenLabs API key** for the voice-over: add to `Website/.env`
   ```
   ELEVENLABS_API_KEY=...
   ```
   (read at runtime, never logged or committed.)

Always run scripts via `./run.sh <script> [lang]` so Playwright resolves.

---

## Quick start

```bash
# 0. Demo data: fictional names + current-week planned week + logins + cache (idempotent)
./data/setup-demo.sh fr                  # run with `en` before EN captures

# Screenshots (coach + portal) for a locale → public/screenshots/
./run.sh capture/screenshots.mjs fr      # FR → *-fr.png   |  en → *.png (no suffix)

# Muted Load-planning loop → public/videos/load-planning-<lang>.{mp4,webm}
./run.sh capture/demo-loop.mjs fr

# Muted readiness loop (player check-in → briefing → readiness → Planning)
./run.sh capture/readiness-loop.mjs fr

# Narrated explainer (3 steps):
./run.sh explainer/tts.mjs fr            # 1. voice-over → .work/audio/fr/*.mp3
./run.sh explainer/record.mjs fr         # 2. synced walkthrough → .work/explainer-core-fr.mp4
./run.sh explainer/finalize.mjs fr       # 3. intro/outro + subtitles → public/videos/explainer-load-planning-fr.mp4
```

`./run.sh explainer/voices.mjs adrien` lists voices (needs the `voices_read`
permission on the key).

---

## Layout

```
tooling/media/
  config.mjs            # paths, BASE url, demo creds, voice id, viewport, .env reader
  run.sh                # runs a script with playwright resolved from strivn-app
  lib/browser.mjs       # login, navigation, synthetic cursor + highlight helpers
  capture/
    screenshots.mjs     # coach + portal screenshots for a locale
    demo-loop.mjs       # muted Load-planning loop
    readiness-loop.mjs  # muted readiness loop (check-in → briefing → readiness → Planning)
  explainer/
    tts.mjs             # ElevenLabs voice-over, one mp3 per segment
    record.mjs          # walkthrough paced to the voice-over → narrated core
    finalize.mjs        # intro/outro cards + burned-in subtitles → final mp4
    voices.mjs          # list ElevenLabs voices
  content/
    explainer-fr.json   # narration script (see schema below)
  data/
    seed-fr.sql         # localize the planned-week demo data → FR
    seed-en.sql         # …→ EN
  .work/                # gitignored: TTS audio, raw recordings, finalize temp, narrated core
```

---

## Narration script schema (`content/explainer-<lang>.json`)

```jsonc
{
  "segments": [
    {
      "id": "02-objectif",
      "text":    "… Straïvine … quatre mille deux cent vingt-cinq …", // SPOKEN (TTS)
      "caption": "… Strivn … 4225 …",                                  // DISPLAYED (subtitles, optional)
      "action":  "…note for the walkthrough…"                          // human note, not used by code
    }
  ]
}
```

- `text` is what the **voice** says — spell things out for correct pronunciation
  (`Straïvine` for the brand, numbers in words: `quatre mille…`).
- `caption` is what the **subtitle** shows — real brand name `Strivn`, digits
  `4225`. Falls back to `text` if omitted.
- Subtitles are auto-split to **≤ 2 lines** (`MAXCH` in `finalize.mjs`).
- The 8 `id`s are fixed and map to the walkthrough actions in `record.mjs`. To
  cover a different feature, edit both the script and `record.mjs`'s `acts[]`.

---

## Demo data setup (one command)

The seeder uses real club names and leaves the Load planner empty. One
idempotent script fixes both — fictional names + a **current-week planned week**
+ demo logins + cache clear:

```bash
./data/setup-demo.sh fr      # or: ./data/setup-demo.sh en
```

What it does (`data/setup-demo.sh` → `data/setup-demo.sql`):
1. `db:seed --class=SampleDataSeeder` **only if the DB is empty**;
2. renames teams/venue/opponent to fictional, adult names (`AC Verel`, …);
3. rebuilds `planned_weeks` + `planned_slots` (12 exercises, ~4225 UA) for the
   **current ISO week**, so the Load-planner screens are always populated;
4. sets the language of the planned-week labels (`fr` default, `en` applies `seed-en.sql`);
5. **upserts today's wellness check-ins** for team 1's active players (a spread
   of green/yellow/red scores) so the morning briefing and readiness dashboard
   are populated for capture;
6. sets the demo logins used by `config.mjs` (coach pw, portal player `kylian.moreau@acverel.test`);
7. `php artisan cache:clear` (the plan is Redis-cached).

It is date-relative and safe to re-run. Container names default to
`p3rform-app-1` / `p3rform-postgres-1` (override with `STRIVN_APP_CONTAINER` /
`STRIVN_PG_CONTAINER`).

> **Always run `setup-demo.sh <lang>` (or at least `cache:clear`) before
> capturing in a given language** — the screenshot/voice language follows the
> *stored data*, not just `?lang=`. `data/seed-{fr,en}.sql` only toggle the
> existing labels' language.

---

## Gotchas

- **Run via `./run.sh`** (not bare `node`) so Playwright resolves. Playwright is
  installed locally in this folder (`npm install playwright` + `npx playwright install chromium`).
- **Capture against built assets, not the Vite dev server.** If Playwright hangs
  loading *any* page, the app is in Vite dev mode: a `public/hot` file points
  asset URLs at `:5173`, which isn't published to the host, so the page never
  finishes loading. Fix: build once and disable hot —
  `docker exec <app> sh -c 'rm -f public/hot'` and stop the vite container
  (`docker stop <project>-vite-1`). The app then serves `public/build/*`.
- **Product video overview**: `overview/{tts,record,finalize}.mjs` +
  `content/overview-<lang>.json` (scene per segment, desktop + mobile portal).
- **Language of the screenshots = language of the DB data**, not just `?lang=`.
  Run `./data/setup-demo.sh <lang>` first (or at least `data/seed-<lang>.sql` + `cache:clear`).
- **Re-recording the narration?** delete `.work/explainer-core-<lang>.mp4` and
  re-run `record.mjs` before `finalize.mjs`, otherwise finalize reuses the old core.
- The walkthrough trims the login intro **dynamically** (login time varies), so
  no fixed offset to maintain.
- Subtitles are PNG overlays (no libass); they're rendered at 2× and scaled to
  the 1280×800 frame inside `finalize.mjs`.
- `record.mjs` paces the walkthrough to each segment's **audio** duration, so the
  visuals stay in sync with the voice automatically.

See the project skill **`strivn-media`** for a step-by-step runbook.
