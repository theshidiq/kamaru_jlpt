#!/usr/bin/env bash
# Restore public/audio/** from the R2 bucket.
#
# Audio is no longer committed (see .gitignore). The generator scripts skip
# passages whose mp3 already exists, so run this before regenerating anything
# or every passage will be re-synthesised at full credit cost.
#
# Usage:  ./scripts/pull-audio-r2.sh [base-url]
set -euo pipefail

BASE="${1:-https://pub-759202bcea084cbcad4053145504e638.r2.dev}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

mkdir -p public/audio/passages

echo "Fetching manifest from $BASE ..."
curl -fsS "$BASE/audio/passages/manifest.json" -o public/audio/passages/manifest.json

# Pull every mp3 the manifest references, in parallel.
python3 -c "
import json
m = json.load(open('public/audio/passages/manifest.json'))
for e in m['entries']:
    print(e['audioUrl'].lstrip('/'))
" | xargs -P 8 -I{} sh -c 'curl -fsS "'"$BASE"'/{}" --create-dirs -o "public/{}" && echo "  <- {}"'

echo
echo "Restored $(find public/audio -name '*.mp3' | wc -l | tr -d ' ') mp3 files."
echo "Listening/ambiance clips are not in the passage manifest; fetch those"
echo "individually if needed, or recover them from git history at ee912f5."
