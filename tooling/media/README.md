# STRIVN marketing-media pipeline

Generates the real-app media used on the marketing site, all driven from the
**running strivn-app**:

- **App screenshots** for the S&C showcase carousels → `public/screenshots/`
- **Muted demo loop** of the Load planner (first carousel slide) → `public/videos/load-planning-<lang>.{mp4,webm}`
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
# Screenshots (coach + portal) for a locale → public/screenshots/
./run.sh capture/screenshots.mjs fr      # FR → *-fr.png   |  en → *.png (no suffix)

# Muted Load-planning loop → public/videos/load-planning-<lang>.{mp4,webm}
./run.sh capture/demo-loop.mjs fr

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

## Demo data setup (one-time, makes screenshots coherent + fictional)

The seeder uses real club names; the pipeline expects **fictional** ones and a
populated planned week. Applied once on the `p3rform` DB:

```bash
APP="docker exec p3rform-app-1 php artisan"
PG="docker exec -i p3rform-postgres-1 psql -U p3rform -d p3rform"

$APP db:seed --class=SampleDataSeeder --force          # if empty
# fictional teams + venue + opponent (adult, no age category):
$PG -c "UPDATE teams SET name='AC Verel' WHERE id=1; UPDATE teams SET name='Hévron Rugby Club' WHERE id=2;"
$PG -c "UPDATE calendar_events SET location='Stade Communal de Verel' WHERE team_id=1 AND location LIKE 'Stade%';
        UPDATE calendar_events SET title='Match: AC Verel vs FC Aldenne 🏆' WHERE team_id=1 AND title LIKE 'Match:%';"
# coach + portal demo logins used by config.mjs:
$APP tinker --execute="\App\Models\User::where('id',1)->update(['password'=>\Illuminate\Support\Facades\Hash::make('password')]);"
$APP tinker --execute="\$p=\App\Models\Player::find(6); \$p->email='kylian.moreau@acverel.test'; \$p->password='portalpass'; \$p->password_set_at=now(); \$p->locale='fr'; \$p->save();"
```

A populated **planned week** (`planned_weeks` + `planned_slots` + `load_categories`)
is required for the Load-planner screens. The localized exercise labels live in
`data/seed-<lang>.sql`.

### Switching the app's data language (for `fr` vs `en` captures)

The planned-week labels are stored data, so set them before capturing, and
**clear the cache** (the plan is cached in Redis):

```bash
docker exec -i p3rform-postgres-1 psql -U p3rform -d p3rform < data/seed-fr.sql
docker exec p3rform-app-1 php artisan cache:clear
```

---

## Gotchas

- **Run via `./run.sh`** (not bare `node`) so Playwright resolves.
- **Language of the screenshots = language of the DB data**, not just `?lang=`.
  Apply `data/seed-<lang>.sql` + `cache:clear` first.
- **Re-recording the narration?** delete `.work/explainer-core-<lang>.mp4` and
  re-run `record.mjs` before `finalize.mjs`, otherwise finalize reuses the old core.
- The walkthrough trims the login intro **dynamically** (login time varies), so
  no fixed offset to maintain.
- Subtitles are PNG overlays (no libass); they're rendered at 2× and scaled to
  the 1280×800 frame inside `finalize.mjs`.
- `record.mjs` paces the walkthrough to each segment's **audio** duration, so the
  visuals stay in sync with the voice automatically.

See the project skill **`strivn-media`** for a step-by-step runbook.
