"""
Turn the generated sound files in video/public/sfx/ into loopable beds.

  python3 video/scripts/make-beds.py

ElevenLabs gives 20s ambience clips and a 45s music track that fades in and
out. Each bed is the clip's steady middle, crossfaded into itself a few times
(so a loop seam comes rarely and softly) and levelled to one target, so every
place sits the same distance under the voice (about -18 dB mean):
  amb-<place>.mp3  -> -34 dB mean (16 dB under the voice)
  music-bed.mp3    -> left at the track's own level; sound.tsx sets it
Needs ffmpeg.
"""
import os, re, subprocess

SFX = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public', 'sfx')
PLACES = ['office', 'meeting', 'training', 'cafe', 'store', 'station']
AMB_TARGET = -34.0


def mean_db(path):
    out = subprocess.run(['ffmpeg', '-hide_banner', '-i', path, '-af', 'volumedetect', '-f', 'null', '-'],
                         capture_output=True, text=True).stderr
    return float(re.search(r'mean_volume: ([-0-9.]+)', out).group(1))


def bed(src, dst, start, end, copies, gain_db=0.0):
    tmp = dst + '.wav'
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', str(start), '-to', str(end), '-i', src, tmp], check=True)
    chain, last = [], '[0]'
    for k in range(1, copies):
        chain.append(f'{last}[{k}]acrossfade=d=2:c1=tri:c2=tri[x{k}]')
        last = f'[x{k}]'
    chain.append(f'{last}volume={gain_db}dB,afade=t=in:d=1[out]')
    subprocess.run(['ffmpeg', '-v', 'error', '-y', *sum([['-i', tmp] for _ in range(copies)], []),
                    '-filter_complex', ';'.join(chain), '-map', '[out]', '-ac', '2', '-b:a', '128k', dst], check=True)
    os.remove(tmp)


for p in PLACES:
    src = os.path.join(SFX, f'{p}.mp3')
    if not os.path.exists(src):
        print(f'  skip {p}: no {p}.mp3')
        continue
    gain = AMB_TARGET - mean_db(src)
    bed(src, os.path.join(SFX, f'amb-{p}.mp3'), 1, 19, 3, gain)
    print(f'  amb-{p}.mp3  {gain:+.1f} dB -> {mean_db(os.path.join(SFX, f"amb-{p}.mp3")):.1f} dB mean')

bed(os.path.join(SFX, 'music.mp3'), os.path.join(SFX, 'music-bed.mp3'), 2, 40, 3)
print('  music-bed.mp3')
