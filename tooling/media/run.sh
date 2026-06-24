#!/usr/bin/env bash
# Run a pipeline script. ESM `import 'playwright'` resolves via a node_modules
# symlink to the sibling strivn-app (which already has playwright installed),
# so this folder needs no npm install.
#
#   ./run.sh capture/screenshots.mjs fr
#   ./run.sh explainer/finalize.mjs fr
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
TARGET="../../../strivn-app/node_modules"
if [ ! -e "$HERE/node_modules" ]; then
  if [ -d "$HERE/$TARGET/playwright" ]; then
    ln -s "$TARGET" "$HERE/node_modules"
  else
    echo "playwright not found at $HERE/$TARGET — run: (cd $HERE && npm install playwright)" >&2
    exit 1
  fi
fi
exec node "$@"
