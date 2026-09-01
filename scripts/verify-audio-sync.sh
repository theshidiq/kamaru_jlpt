#!/usr/bin/env bash
# Verify every manifest entry's timings match the duration of its own mp3.
#
# eleven_v3 is non-deterministic, so timings are only valid for the render
# they came from. If an mp3 is regenerated but its manifest entry is not
# replaced (or vice versa), the word highlighting drifts against the audio
# with nothing else looking wrong — the timings stay monotonic and complete.
#
# Run after any generation, and before deploying.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
python3 - <<'PY'
import json, subprocess, os, sys
man='public/audio/passages/manifest.json'
if not os.path.exists(man):
    sys.exit('manifest not found — run ./scripts/pull-audio-r2.sh first')
m=json.load(open(man)); bad=[]
for e in m['entries']:
    f=f"public/audio/passages/{e['id']}.mp3"
    if not os.path.exists(f):
        bad.append(f"{e['id']}: mp3 missing"); continue
    r=float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration',
        '-of','csv=p=0',f],capture_output=True,text=True).stdout.strip())
    s=e['durationMs']/1000
    if abs(s-r)>0.5:
        bad.append(f"{e['id']}: mp3={r:.2f}s timings={s:.2f}s drift={s-r:+.2f}s")
print(f'checked {len(m["entries"])} entries')
if bad:
    print(f'\n{len(bad)} MISMATCHED — regenerate these so audio and timings come from one render:')
    for b in bad: print('  ', b)
    sys.exit(1)
print('all timings match their audio')
PY
