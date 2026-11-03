#!/usr/bin/env bash
# Put the demo club's content and the demo logins in one language before recording.
#   tooling/media/tutorials/data/use-locale.sh en|fr
# The generator writes French; localize-en.{sql,php} translate what the tutorials
# show, localize-fr.sql reverses it. Idempotent in both directions.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
APP="${STRIVN_APP_DIR:-$HERE/../../../../../P3rform}"
L="${1:?usage: use-locale.sh en|fr}"
PSQL=(psql -h "${PGHOST:-127.0.0.1}" -U "${PGUSER:-p3rform}" -d "${PGDATABASE:-p3rform}" -q)
case "$L" in
  en) "${PSQL[@]}" -f "$HERE/localize-en.sql"
      (cd "$APP" && php artisan tinker --execute="require '$HERE/localize-en.php';" >/dev/null) ;;
  fr) "${PSQL[@]}" -f "$HERE/localize-fr.sql" ;;
  *) echo "unknown locale: $L" >&2; exit 1 ;;
esac
# Coach, team and the portal player read the app in that language.
"${PSQL[@]}" -c "UPDATE users SET locale = '$L' WHERE id = 1; UPDATE teams SET locale = '$L' WHERE id = 1; UPDATE players SET locale = '$L' WHERE id = 1;"
(cd "$APP" && php artisan cache:clear -q)
echo "demo content: $L"
