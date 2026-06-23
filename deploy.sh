#!/usr/bin/env bash
# deploy.sh — Build strivn-website and publish dist/ to Laravel Forge.
#
# Usage:
#   ./deploy.sh                 # build + rsync to forge
#   DRY_RUN=1 ./deploy.sh       # show what would be copied, no writes
#   REMOTE=forge@host:/path ./deploy.sh   # override destination
#
# Env (optional):
#   DRY_RUN=1    : pass --dry-run to rsync, no remote writes
#   REMOTE       : default "forge@strivn.net:/home/forge/p3rform-strivn-website.on-forge.com/public"
#
# Requires: Node + npm, rsync, ssh access to REMOTE (StrictHostKeyChecking=accept-new).

set -euo pipefail

# ─── Config ────────────────────────────────────────────────────────────────
REMOTE="${REMOTE:-forge@strivn.net:/home/forge/p3rform-strivn-website.on-forge.com/public}"
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
DIST="$SCRIPT_DIR/dist"
DRY_RUN_FLAG=""
[[ "${DRY_RUN:-0}" == "1" ]] && DRY_RUN_FLAG="--dry-run"

# ─── Preflight ─────────────────────────────────────────────────────────────
cd "$SCRIPT_DIR"

for cmd in node npm rsync ssh; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "✗ missing dependency: $cmd" >&2
    exit 1
  fi
done

if [[ ! -f "package.json" ]]; then
  echo "✗ package.json not found in $SCRIPT_DIR — run from the repo root" >&2
  exit 1
fi

# ─── Build ─────────────────────────────────────────────────────────────────
echo "→ building (npm run build)…"
if ! npm run build; then
  echo "✗ build failed — refusing to deploy" >&2
  exit 1
fi

if [[ ! -d "$DIST" ]] || [[ -z "$(ls -A "$DIST" 2>/dev/null)" ]]; then
  echo "✗ $DIST is empty or missing after build — refusing to deploy" >&2
  exit 1
fi

BUILT_AT="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
# Apparent byte size of the build, portable across BSD (macOS) and GNU du.
# `du -sb` is GNU-only; sum file sizes instead so it works everywhere.
BUILT_BYTES=$(find "$DIST" -type f -exec cat {} + | wc -c | tr -d '[:space:]')
echo "✓ build ok — $DIST ($(numfmt --to=iec --suffix=B "$BUILT_BYTES" 2>/dev/null || echo "${BUILT_BYTES} B")) at $BUILT_AT"

# ─── Publish ───────────────────────────────────────────────────────────────
echo ""
echo "→ target: $REMOTE"
if [[ -n "$DRY_RUN_FLAG" ]]; then
  echo "  (DRY_RUN=1 — no writes)"
fi
echo ""

# rsync flags:
#   -a                archive mode (recursive, perms, symlinks, times, etc.)
#   -v                verbose (file-by-file)
#   --delete          remove files on remote that are no longer in dist/
#   --exclude='.well-known/'  preserve Let's Encrypt / Forge metadata
#   -e ssh ...        enforce accept-new on first connect from a new host
RSYNC_FLAGS=(
  -av
  --delete
  --exclude='.well-known/'
  -e 'ssh -o StrictHostKeyChecking=accept-new -o ConnectTimeout=10'
)
[[ -n "$DRY_RUN_FLAG" ]] && RSYNC_FLAGS+=("$DRY_RUN_FLAG")

# Trailing-slash on the source is critical: it tells rsync to copy the
# *contents* of dist/ into the remote directory, not dist/ itself.
rsync "${RSYNC_FLAGS[@]}" "$DIST/" "$REMOTE"

echo ""
echo "✓ deployed"
