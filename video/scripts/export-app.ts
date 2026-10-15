/**
 * Export an episode's audio for the app: one stitched MP3 plus the timeline
 * the lesson player follows.
 *
 *   cd video && npx tsx scripts/export-app.ts bjt-1-1
 *
 * Writes ../public/audio/lessons/<id>.mp3 (voice only), <id>-sound.mp3 (with
 * music, effects and the place sound) and <id>.json (served from R2 like the
 * passage audio; upload with wrangler). --no-sound skips the sound version.
 * --json-only rewrites just the timeline, leaving both MP3s as they are
 * (for a change to the JSON's shape, without re-rendering any audio).
 *
 * The sound bed is rendered by Remotion from the same SoundLayer as the
 * video, with the voices off, then laid under the voice file here: rendering
 * the voices through Remotion too turns them down ~2.4 dB.
 *
 * Uses the same schedule() as the video, so the app and the MP4 share one
 * pacing: every gap, including the quiz's thinking time, is baked into the
 * file. One file rather than 78 clips so playback survives a locked phone
 * screen, where iOS will not start the next clip on its own.
 */
import { execFileSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { schedule } from '../src/timeline'

const VIDEO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const ROOT = path.dirname(VIDEO)
const id = process.argv[2]
const jsonOnly = process.argv.includes('--json-only')
const withSound = !process.argv.includes('--no-sound') && !jsonOnly
if (!id) { console.error('usage: npx tsx scripts/export-app.ts <episode-id>'); process.exit(1) }

const raw = JSON.parse(fs.readFileSync(path.join(VIDEO, 'src', 'data', `${id}.json`), 'utf-8'))
const ep = schedule(raw)
const outDir = path.join(ROOT, 'public', 'audio', 'lessons')
fs.mkdirSync(outDir, { recursive: true })

// Every clip delayed to its slot and mixed; the lines never overlap, so the
// mix is a plain concatenation with exact silences in between.
const clips = ep.segments.flatMap(s => s.lines.map(l => ({ file: path.join(VIDEO, 'public', l.audio), at: s.at + l.at })))
const inputs = clips.flatMap(c => ['-i', c.file])
const filter = clips.map((c, i) => `[${i}:a]adelay=${Math.round(c.at)}:all=1[a${i}]`).join(';') +
  ';' + clips.map((_, i) => `[a${i}]`).join('') +
  `amix=inputs=${clips.length}:normalize=0:dropout_transition=0,apad=whole_dur=${(ep.durationMs / 1000).toFixed(3)}[out]`
const mp3 = path.join(outDir, `${id}.mp3`)
if (!jsonOnly) execFileSync('ffmpeg', ['-v', 'error', '-y', ...inputs, '-filter_complex', filter, '-map', '[out]',
  '-ac', '1', '-ar', '44100', '-b:a', '64k', mp3])

// The sound version: Remotion renders the bed alone (no frames are drawn for
// an audio codec), then ffmpeg adds it under the untouched voice.
const soundMp3 = path.join(outDir, `${id}-sound.mp3`)
if (withSound) {
  const bed = path.join(VIDEO, 'out', `${id}-bed.wav`)
  fs.mkdirSync(path.dirname(bed), { recursive: true })
  execFileSync('npx', ['remotion', 'render', 'src/index.ts', id, bed, '--codec=wav', '--log=error',
    `--props=${JSON.stringify({ sound: 'music', voices: false })}`], { cwd: VIDEO, stdio: 'inherit' })
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', mp3, '-i', bed, '-filter_complex',
    // The voice goes to both channels at full level (a plain mono->stereo
    // conversion drops it 3 dB). The approved sample had that drop, so the bed
    // comes up the same 3 dB to keep the balance that was signed off.
    '[0:a]pan=stereo|c0=c0|c1=c0[v];[1:a]volume=3dB[b];[v][b]amix=inputs=2:normalize=0:duration=first[out]',
    '-map', '[out]', '-ar', '44100', '-b:a', '96k', soundMp3])
  fs.rmSync(bed)
}

const lesson = {
  id, level: raw.level, chapter: raw.chapter, section: raw.section,
  title: ep.title, titleEn: ep.titleEn, label: ep.label, durationMs: ep.durationMs,
  // Each block's scene, the monitor text, and each segment's length and
  // scene let the app play the lesson as an interactive video.
  blocks: ep.blocks,
  ...(ep.screen ? { screen: ep.screen } : {}),
  audioUrl: `/audio/lessons/${id}.mp3`,
  ...(fs.existsSync(soundMp3) ? { soundUrl: `/audio/lessons/${id}-sound.mp3` } : {}),
  // Line times become absolute; unit times stay relative to their line.
  segments: ep.segments.map(({ lines, ...s }) => ({
    ...s,
    prompt: s.prompt?.map(u => ({ t: u.t, parts: u.parts })),
    lines: lines.map(({ audio: _a, at, units, ...l }) => ({
      ...l, at: s.at + at,
      units: units.map(u => ({ t: u.t, parts: u.parts, start: u.start, end: u.end, ...(u.word ? { word: u.word } : {}) })),
    })),
  })),
}
fs.writeFileSync(path.join(outDir, `${id}.json`), JSON.stringify(lesson))
const kb = (f: string) => Math.round(fs.statSync(f).size / 1024)
if (withSound) console.log(`wrote public/audio/lessons/${id}-sound.mp3 (${kb(soundMp3)} KB)`)
if (jsonOnly) console.log(`wrote public/audio/lessons/${id}.json (${kb(path.join(outDir, `${id}.json`))} KB), audio untouched`)
else console.log(`wrote public/audio/lessons/${id}.mp3 (${kb(mp3)} KB, ${(ep.durationMs / 60000).toFixed(1)} min) and ${id}.json (${kb(path.join(outDir, `${id}.json`))} KB)`)
