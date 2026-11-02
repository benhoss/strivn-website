#!/bin/bash
# Local strivn stack for the tutorial recordings, clock frozen to the demo day.
cd "${STRIVN_APP_DIR:-$(dirname "$0")/../../../../../P3rform}"
export FAKETIME_DONT_FAKE_MONOTONIC=1
NOW="${TUTORIAL_NOW:-2026-11-01 11:30:00}"
PHP_CLI_SERVER_WORKERS=6 nohup faketime -f "@$NOW" php -d memory_limit=1G artisan serve --host=127.0.0.1 --port=8082 > /tmp/serve.log 2>&1 &
nohup faketime -f "@$NOW" php artisan queue:work redis --queue=default,broadcasts --sleep=1 > /tmp/queue.log 2>&1 &
