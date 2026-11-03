# Feature tutorials (YouTube / support)

Ten subtitled, click-by-click feature guides, in English and French, recorded from the **real strivn app**
on a fully seeded demo club. Real clicks, a visible cursor, spotlight highlights
with numbered callouts, burned-in subtitles, branded intro/outro cards.

| Tutorial | Script | Site video | YouTube kit |
|---|---|---|---|
| Plan your week & send call-ups | `scripts/01-calendar-callups.mjs` | `public/videos/tutorials/01-calendar-callups-en.mp4` | `youtube/01-calendar-callups/` |
| Morning check-in & squad readiness | `scripts/02-checkin-readiness.mjs` | `…/02-checkin-readiness-en.mp4` | `youtube/02-checkin-readiness/` |
| Track training load with RPE & ACWR | `scripts/03-training-load.mjs` | `…/03-training-load-en.mp4` | `youtube/03-training-load/` |
| Injuries & return to play | `scripts/04-injuries-rtp.mjs` | `…/04-injuries-rtp-en.mp4` | `youtube/04-injuries-rtp/` |
| Plan sessions from your exercise library | `scripts/05-session-planning.mjs` | `…/05-session-planning-en.mp4` | `youtube/05-session-planning/` |
| Read your GPS data | `scripts/06-gps-analysis.mjs` | `…/06-gps-analysis-en.mp4` | `youtube/06-gps-analysis/` |
| Review sessions & matches | `scripts/07-session-results.mjs` | `…/07-session-results-en.mp4` | `youtube/07-session-results/` |
| Your season in numbers | `scripts/08-season-statistics.mjs` | `…/08-season-statistics-en.mp4` | `youtube/08-season-statistics/` |
| Weekly reports & attendance | `scripts/09-reports-attendance.mjs` | `…/09-reports-attendance-en.mp4` | `youtube/09-reports-attendance/` |
| Draw a tactical board | `scripts/10-tactical-board.mjs` | `…/10-tactical-board-en.mp4` | `youtube/10-tactical-board/` |

Each `youtube/<id>/` folder holds what an upload needs:
- `<id>-en-youtube.mp4` — the same cut **without** burned-in subtitles (YouTube shows the captions track instead),
- `<id>-en.srt` — English captions, timed from the recording itself,
- `youtube.md` — title, description, YouTube-valid chapters (first at 0:00, each ≥ 10 s), tags, playlist.

The burned-in versions in `public/videos/tutorials/` are for the website, social posts and support replies.

## Languages (EN / FR)

Scripts are written once, in English. `TUTORIAL_LANG=fr` records the French cut:
`t()` (in `lib.mjs`) maps every UI label used as a selector, every callout, caption,
card and YouTube field through `i18n/fr.json`. Viewer-facing text missing from the
dictionary fails the build; run the pre-flight first:

```bash
node tutorials/i18n/check.mjs fr            # lists anything missing
tutorials/data/use-locale.sh fr             # French demo content + French logins
TUTORIAL_LANG=fr node tutorials/build.mjs 03-training-load
```

Outputs: `public/videos/tutorials/<id>-fr.mp4`, `youtube/<id>/<id>-fr.srt`,
`<id>-fr-youtube.mp4` and `youtube-fr.md`. Switch back with `use-locale.sh en`.

**Freeze the clock.** The captions quote the demo club's state on Sunday
1 November 2026 (who is at risk, ACWR values, response counts). Run the app under
`faketime` so a later take shows the same day: see `data/start-app.sh`
(`faketime -f "@2026-11-01 11:30:00" php artisan serve …`, same for `queue:work`).
On another day without it, re-check every caption that quotes a number.

## On the website

`site/embed.py` inserts the videos (FR + EN) into the feature pages under
`src/data/subpages/*.ts` — one `video` section right after each page's opening
section — and writes the posters (the title card) to `public/posters/tutorials/`.
Re-run it after re-recording; it replaces its own sections.

## How it works

- `lib.mjs` — capture via the Chrome DevTools **screencast** (crisp 1920×1080 JPEG frames, not
  Playwright's low-bitrate VP8), plus in-page overlays: arrow cursor (touch dot on phones),
  click ripple, spotlight box with a numbered callout. Every step logs a subtitle cue for the
  exact time it ran, held at least as long as the caption takes to read.
- `build.mjs <id> [scene|none]` — logs in (coach + player), runs the script's `setup()`
  (undoes the previous take's on-camera writes), records each scene, frames phone scenes in a
  device on a branded backdrop, adds intro/outro cards, concatenates, burns subtitles (PNG
  overlays rendered in Archivo) and writes the YouTube kit. `build.mjs <id> 1` re-records scene
  1 only; `build.mjs <id> none` re-assembles from the recorded scenes (setup is skipped for both).
- `scripts/<id>.mjs` — one tutorial: chapters, YouTube copy, scenes and steps (`caption` + `run`).

## Reproduce

1. **App** (no Docker needed): PostgreSQL + Redis running, `P3rform/.env` on `pgsql`,
   `APP_URL=http://127.0.0.1:8082`, `QUEUE_CONNECTION=redis` with a `queue:work` running (with
   `sync`, readiness narration jobs run inline and the readiness page takes ~80 s),
   `npm run build`, then `php artisan serve --host=127.0.0.1 --port=8082`.
   Without an OpenRouter key, set `OPENROUTER_URL=http://127.0.0.1:9/api/v1` so AI calls fail
   instantly and the app serves its deterministic fallbacks.
2. **Data** — the system demo club, 8 weeks replayed (≈40 min, mostly AI-retry backoff):
   ```bash
   php artisan migrate --force
   php artisan tinker --execute='App\Models\User::create(["name"=>"Thomas Renard","phone"=>"+32470112233","email"=>"thomas.renard@strivn.test","password"=>bcrypt("password"),"locale"=>"en"]);'
   DEMO_SHOWCASE_PASSWORD=portalpass php artisan strivn:demo-provision --sport=football --staff=+32470112233 --weeks=8 --locale=en
   psql … -f tooling/media/tutorials/data/localize-en.sql && php artisan cache:clear
   php artisan tinker --execute="require '<abs>/tooling/media/tutorials/data/localize-en.php';"   # GPS band names
   ```
   The generator writes French content; `data/localize-en.sql` translates the strings that
   appear on screen (exercises, event titles, RSVP notes, medical notes, RTP steps, alerts, plan
   blocks). Coach `+32470112233` / `password`; player `+32000001000` / `portalpass` (Nathan).
3. **Record** — `cd tooling/media && node tutorials/build.mjs 01-calendar-callups` (≈3–5 min each).
   Playwright resolves from `tooling/media/node_modules` (a symlink to a global install works).

### On a Mac, with Docker

No PHP or Postgres on the host: run a throwaway strivn-app stack and point the recorder at
its containers. Needs `brew install ffmpeg` (7+ works; `build.mjs` picks the right
filter-file flag) and `npx playwright install chromium chromium-headless-shell` in `tooling/media`.

- App image: the repo `Dockerfile` plus `apt-get install faketime`. Keep `vendor/` in a named
  volume: on the case-insensitive macOS disk, composer fails to unpack `sentry/sentry-laravel`.
- Container env: `QUEUE_CONNECTION=redis`, `SESSION_LIFETIME=525600` (otherwise the fake-dated
  session cookie has already expired for the real-time browser), `OPENROUTER_URL=http://127.0.0.1:9/api/v1`.
- Provision under `faketime -f "@2026-11-01 08:00:00"`, then serve under `@2026-11-01 11:30:00`
  with `php -S 0.0.0.0:8082 …/Foundation/resources/server.php` run from `public/`, **not**
  `artisan serve`, which strips `LD_PRELOAD` from its child server and loses the fake clock.
- Recorder env:
  ```bash
  export STRIVN_PSQL="docker exec -i -e PGPASSWORD=p3rform <stack>-postgres-1 psql -U p3rform -d p3rform"
  export STRIVN_ARTISAN="docker exec -i <stack>-app-1 php artisan"
  export TUTORIAL_NOW="2026-11-01 11:30:00"   # the browser's clock too (calendar's current week)
  ```
  `use-locale.sh` and every script's `setup()` go through `STRIVN_PSQL` / `STRIVN_ARTISAN`.

Verify with a contact sheet: `ffmpeg -i <out>.mp4 -vf "fps=1/4,scale=640:-1,tile=4x3" sheet-%d.png`.
