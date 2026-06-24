---
name: strivn-media
description: Regenerate STRIVN marketing media (real-app screenshots, the muted Load-planning demo loop, and the narrated explainer video with ElevenLabs voice-over + subtitles) from the running strivn-app. Use when asked to refresh/produce S&C page screenshots or the load-planner explainer/demo video.
---

# STRIVN marketing-media runbook

All media on the marketing site is **generated from the running strivn-app**, not
hand-made. The pipeline lives in `tooling/media/` (read its `README.md` first).

## Preconditions (check these before running anything)

1. strivn-app is up: `docker exec p3rform-app-1 php artisan --version` works and
   `http://localhost:8082` responds. If not: `cd ../strivn-app && docker compose up -d`.
2. Demo data is fictional + populated (teams `AC Verel` / `Hévron Rugby Club`, a
   populated planned week, portal player `kylian.moreau@acverel.test`). See
   `tooling/media/README.md#demo-data-setup`. Verify:
   `docker exec p3rform-postgres-1 psql -U p3rform -d p3rform -t -c "SELECT name FROM teams WHERE id=1;"` → `AC Verel`.
3. For the explainer: `ELEVENLABS_API_KEY` is in `Website/.env`.

Always invoke scripts with `./run.sh <script> <lang>` from `tooling/media/`
(it symlinks Playwright from strivn-app). `lang` is `fr` or `en`.

## Tasks

### Refresh app screenshots (S&C carousels)
The screenshot language = the **DB data** language, so set it first:
```bash
cd tooling/media
docker exec -i p3rform-postgres-1 psql -U p3rform -d p3rform < data/seed-fr.sql
docker exec p3rform-app-1 php artisan cache:clear
./run.sh capture/screenshots.mjs fr     # → public/screenshots/*-fr.png  (en → *.png)
```
EN screenshots: apply `data/seed-en.sql` + cache:clear, then `./run.sh capture/screenshots.mjs en`.

### Refresh the muted demo loop (first carousel slide)
```bash
./run.sh capture/demo-loop.mjs fr       # → public/videos/load-planning-fr.{mp4,webm}
```

### Regenerate the narrated explainer (3 steps, ~5 min)
```bash
# edit the script if needed: content/explainer-fr.json
#   text = spoken (Straïvine, numbers in words) | caption = shown (Strivn, digits)
docker exec -i p3rform-postgres-1 psql -U p3rform -d p3rform < data/seed-fr.sql   # FR labels in-app
docker exec p3rform-app-1 php artisan cache:clear
./run.sh explainer/tts.mjs fr [voiceId] # voiceId defaults to Adrien Clairon
rm -f .work/explainer-core-fr.mp4       # IMPORTANT before re-recording
./run.sh explainer/record.mjs fr        # synced walkthrough → narrated core
./run.sh explainer/finalize.mjs fr      # intro/outro + subtitles → public/videos/explainer-load-planning-fr.mp4
```
Only changing subtitle text / cards / timing? skip tts+record, just re-run `finalize.mjs`.

## Verify
Extract frames with `ffmpeg -ss <t> -i <out> -frames:v 1 /tmp/f.png` and read them.
Check: intro logo present, subtitles ≤ 2 lines showing `Strivn` + digits, the
"Prévu vs réalisé" tab actually switches (~78s), outro CTA.

## Conventions / gotchas
- EN assets have **no suffix**; FR assets use `-fr` (matches `src/data/scContent.ts`).
- After changing in-app data, **always `php artisan cache:clear`** (the plan is Redis-cached).
- Don't commit `tooling/media/.work/` (gitignored).
- This ffmpeg has no libass — subtitles are PNG overlays (handled in `finalize.mjs`).
- Full reference + data-setup SQL: `tooling/media/README.md`.
