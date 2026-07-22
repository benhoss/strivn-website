#!/usr/bin/env bash
# One-shot, idempotent demo-data setup for the media pipeline.
#   ./data/setup-demo.sh [fr|en]
# Seeds (if empty) → fictional names + current-week planned data → label language
# → demo credentials → clears the Redis cache.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
# Auto-detect the compose project from whoever publishes :8082 (survives the
# stack being renamed, e.g. p3rform-* → strivn-app-*). Override with env vars.
PREFIX="$(docker ps --filter publish=8082 --format '{{.Names}}' 2>/dev/null | head -1)"; PREFIX="${PREFIX%-web-1}"
APP="${STRIVN_APP_CONTAINER:-${PREFIX:+${PREFIX}-app-1}}"; APP="${APP:-p3rform-app-1}"
PG="${STRIVN_PG_CONTAINER:-${PREFIX:+${PREFIX}-postgres-1}}"; PG="${PG:-p3rform-postgres-1}"
LANG_="${1:-fr}"
echo "using containers: app=$APP pg=$PG"

# ON_ERROR_STOP: psql otherwise reports a failed statement and carries on, so a
# broken seed still exits 0 and looks like a successful run. The teams probe
# below opts out via its own || fallback (an empty DB has no teams table yet).
psql() { docker exec -i "$PG" psql -U p3rform -d p3rform -v ON_ERROR_STOP=1 "$@"; }
artisan() { docker exec "$APP" php artisan "$@"; }

# 1. Base demo data — only if the DB is empty (the seeder isn't fully idempotent).
COUNT="$(psql -t -A -c 'SELECT count(*) FROM teams;' 2>/dev/null || echo 0)"
if [ "${COUNT:-0}" -eq 0 ]; then
  echo "seeding SampleDataSeeder…"; artisan db:seed --class=SampleDataSeeder --force
fi

# 2. Fictional names + current-week planned data (idempotent).
psql < "$HERE/setup-demo.sql"

# 3. Label language (FR is the default in setup-demo.sql; others via seed-<lang>.sql).
[ "$LANG_" != "fr" ] && [ -f "$HERE/seed-$LANG_.sql" ] && psql < "$HERE/seed-$LANG_.sql"

# 4. Deterministic demo credentials used by config.mjs (phone/email vary across
#    DBs, so we normalize them; password hashing needs PHP). The coach's stored
#    locale must follow the target language too: LocaleResolver::forUser gives
#    users.locale priority over ?lang=, so a stale coach locale silently forces
#    every authenticated capture back into that language.
artisan tinker --execute="
  \$u=\App\Models\User::find(1); \$u->phone='+32470112233'; \$u->password=\Illuminate\Support\Facades\Hash::make('password'); \$u->locale='${LANG_}'; \$u->save();
  \$p=\App\Models\Player::where('team_id',1)->orderBy('id')->first();
  \$p->email='kylian.moreau@acverel.test'; \$p->password='portalpass'; \$p->password_set_at=now(); \$p->locale='${LANG_}'; \$p->save();
  echo 'coach='.\$u->phone.' player='.\$p->email.' (id='.\$p->id.')';
"

# 5. Bust the cache (the plan is Redis-cached).
artisan cache:clear
echo "demo data ready (lang=${LANG_})"
