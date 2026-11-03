#!/usr/bin/env bash
# Put the demo club's content and the demo logins in one language before recording.
#   tooling/media/tutorials/data/use-locale.sh en|fr
# The generator writes French; localize-en.{sql,php} translate what the tutorials
# show, localize-fr.sql reverses it. Idempotent in both directions.
# STRIVN_PSQL / STRIVN_ARTISAN point it at the Docker stack (same values as the
# recorder, see README); the defaults fit a native checkout.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
APP="${STRIVN_APP_DIR:-$HERE/../../../../../P3rform}"
L="${1:?usage: use-locale.sh en|fr}"
PSQL="${STRIVN_PSQL:-psql -h ${PGHOST:-127.0.0.1} -U ${PGUSER:-p3rform} -d ${PGDATABASE:-p3rform}} -q"
ARTISAN="${STRIVN_ARTISAN:-cd $APP && php artisan}"
# SQL goes in on stdin and PHP as inline code, so the files need not exist where the app runs.
psql_file() { eval "$PSQL" < "$1"; }
case "$L" in
  en) psql_file "$HERE/localize-en.sql"
      eval "$ARTISAN tinker --execute=$(printf %q "$(tail -n +2 "$HERE/localize-en.php")")" >/dev/null ;;
  fr) psql_file "$HERE/localize-fr.sql" ;;
  *) echo "unknown locale: $L" >&2; exit 1 ;;
esac
# Coach, team and the portal player read the app in that language.
eval "$PSQL -c $(printf %q "UPDATE users SET locale = '$L' WHERE id = 1; UPDATE teams SET locale = '$L' WHERE id = 1; UPDATE players SET locale = '$L' WHERE id = 1;")"
eval "$ARTISAN cache:clear -q"
echo "demo content: $L"
