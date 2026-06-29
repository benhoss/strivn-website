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
2. Demo data is fictional + populated. Establish/refresh with **one idempotent
   command** (fictional names + current-week planned week + demo logins + cache clear):
   ```bash
   cd tooling/media && ./data/setup-demo.sh fr      # or: en
   ```
   Verify: `docker exec p3rform-postgres-1 psql -U p3rform -d p3rform -t -c "SELECT name FROM teams WHERE id=1;"` → `AC Verel`.
3. For the explainer: `ELEVENLABS_API_KEY` is in `Website/.env`.

Always invoke pipeline scripts with `./run.sh <script> <lang>` from `tooling/media/`
(it symlinks Playwright from strivn-app). `lang` is `fr` or `en`.

## Tasks

### Refresh app screenshots (S&C carousels)
The screenshot language = the **DB data** language, so run the matching setup first:
```bash
cd tooling/media
./data/setup-demo.sh fr                 # fictional data + FR labels + cache clear
./run.sh capture/screenshots.mjs fr     # → public/screenshots/*-fr.png  (en → *.png)
```
EN screenshots: `./data/setup-demo.sh en` then `./run.sh capture/screenshots.mjs en`.

### Refresh the muted demo loop (first carousel slide)
```bash
./data/setup-demo.sh fr
./run.sh capture/demo-loop.mjs fr       # → public/videos/load-planning-fr.{mp4,webm}
```

### Refresh the muted readiness loop (morning story)
```bash
./data/setup-demo.sh fr                 # also seeds today's wellness check-ins
./run.sh capture/readiness-loop.mjs fr  # → public/videos/readiness-fr.{mp4,webm}
```

### Regenerate the narrated explainer (~5 min)
```bash
cd tooling/media
./data/setup-demo.sh fr                 # FR data in-app (+ cache clear)
# edit the script if needed: content/explainer-fr.json
#   text = spoken (Straïvine, numbers in words) | caption = shown (Strivn, digits)
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

### Product-overview video (multi-screen tour, ~2:15-2:30, FR + NL)
`overview/{tts,record,finalize}.mjs` + `content/overview-<lang>.json` (one scene
per segment; desktop coach screens + a mobile portal scene). Produce:
```bash
cd tooling/media
./data/setup-demo.sh fr                 # (or nl — applies seed-nl.sql)
./run.sh overview/tts.mjs fr
./run.sh overview/record.mjs fr          # → .work/overview/scenes/fr/*.mp4
./run.sh overview/finalize.mjs fr        # → public/videos/overview-fr.mp4
```

## Conventions / gotchas
- **Capture needs built assets, not Vite dev.** If Playwright hangs on page load,
  remove the Vite `hot` file + stop the vite container (assets point at the
  unreachable `:5173`): `docker exec <app> sh -c 'rm -f public/hot'; docker stop <project>-vite-1`.
- Playwright is installed locally in `tooling/media` (it's no longer guaranteed in
  the sibling repo). `run.sh` uses it; if missing: `npm install playwright && npx playwright install chromium`.
- EN assets have **no suffix**; FR assets use `-fr` (matches `src/data/scContent.ts`).
- `setup-demo.sh` is **idempotent + date-relative** (rebuilds the planned week on
  the current week) and clears the cache for you. Re-run it whenever data looks stale.
- Don't commit `tooling/media/.work/` (gitignored).
- This ffmpeg has no libass — subtitles are PNG overlays (handled in `finalize.mjs`).
- Full reference + data setup: `tooling/media/README.md`, `data/setup-demo.{sh,sql}`.
