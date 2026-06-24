#!/usr/bin/env bash
# One-shot, idempotent demo-data setup for the media pipeline.
#   ./data/setup-demo.sh [fr|en]
# Seeds (if empty) → fictional names + current-week planned data → label language
# → demo credentials → clears the Redis cache.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
APP="${STRIVN_APP_CONTAINER:-p3rform-app-1}"
PG="${STRIVN_PG_CONTAINER:-p3rform-postgres-1}"
LANG_="${1:-fr}"

psql() { docker exec -i "$PG" psql -U p3rform -d p3rform "$@"; }
artisan() { docker exec "$APP" php artisan "$@"; }

# 1. Base demo data — only if the DB is empty (the seeder isn't fully idempotent).
COUNT="$(psql -t -A -c 'SELECT count(*) FROM teams;' 2>/dev/null || echo 0)"
if [ "${COUNT:-0}" -eq 0 ]; then
  echo "seeding SampleDataSeeder…"; artisan db:seed --class=SampleDataSeeder --force
fi

# 2. Fictional names + current-week planned data (idempotent).
psql < "$HERE/setup-demo.sql"

# 3. Planned-label language (FR is the default in setup-demo.sql).
[ "$LANG_" = "en" ] && psql < "$HERE/seed-en.sql"

# 4. Demo credentials used by config.mjs (password hashing needs PHP).
artisan tinker --execute="
  \App\Models\User::where('id',1)->update(['password'=>\Illuminate\Support\Facades\Hash::make('password')]);
  \$p=\App\Models\Player::find(6); \$p->email='kylian.moreau@acverel.test'; \$p->password='portalpass'; \$p->password_set_at=now(); \$p->locale='${LANG_}'; \$p->save();
"

# 5. Bust the cache (the plan is Redis-cached).
artisan cache:clear
echo "demo data ready (lang=${LANG_})"
