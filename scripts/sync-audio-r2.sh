#!/usr/bin/env bash
# Upload public/audio/** to an R2 bucket and print the env var to set.
#
# One-time setup (dashboard, needs your login):
#   1. Cloudflare dashboard → R2 → Enable
#   2. Create bucket:  npx wrangler r2 bucket create kamaru-audio
#   3. R2 → kamaru-audio → Settings → Public access → Allow
#   4. Copy the public bucket URL (https://pub-<hash>.r2.dev)
#
# Then:  ./scripts/sync-audio-r2.sh kamaru-audio
set -euo pipefail

BUCKET="${1:-kamaru-audio}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

count=0
while IFS= read -r f; do
  key="${f#public/}"                       # audio/passages/n2-1-1.mp3
  echo "  → $key"
  npx wrangler r2 object put "$BUCKET/$key" --file "$f" --remote >/dev/null
  count=$((count+1))
done < <(find public/audio -type f \( -name '*.mp3' -o -name '*.wav' -o -name '*.json' \) | sort)

echo
echo "Uploaded $count objects to r2://$BUCKET"
echo
echo "Now set this in .env (and in the Pages project's env vars):"
echo "  VITE_AUDIO_BASE_URL=https://pub-<hash>.r2.dev"
echo
echo "Then 'npm run deploy'. Audio under public/ can be removed from git afterwards."
