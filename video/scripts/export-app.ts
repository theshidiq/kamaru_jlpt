/**
 * Export an episode's audio for the app: one stitched MP3 plus the timeline
 * the lesson player follows.
 *
 *   cd video && npx tsx scripts/export-app.ts bjt-1-1
 *
 * Writes ../public/audio/lessons/<id>.mp3 and <id>.json (served from R2 like
 * the passage audio; upload with ../scripts/sync-audio-r2.sh or wrangler).
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
execFileSync('ffmpeg', ['-v', 'error', '-y', ...inputs, '-filter_complex', filter, '-map', '[out]',
  '-ac', '1', '-ar', '44100', '-b:a', '64k', mp3])

const lesson = {
  id, level: raw.level, chapter: raw.chapter, section: raw.section,
  title: ep.title, titleEn: ep.titleEn, label: ep.label, durationMs: ep.durationMs,
  audioUrl: `/audio/lessons/${id}.mp3`,
  // Line times become absolute; unit times stay relative to their line.
  segments: ep.segments.map(({ lines, dur: _dur, scene: _scene, ...s }) => ({
    ...s,
    prompt: s.prompt?.map(u => ({ parts: u.parts })),
    lines: lines.map(({ audio: _a, at, units, ...l }) => ({
      ...l, at: s.at + at,
      units: units.map(u => ({ parts: u.parts, start: u.start, end: u.end, ...(u.word ? { word: u.word } : {}) })),
    })),
  })),
}
fs.writeFileSync(path.join(outDir, `${id}.json`), JSON.stringify(lesson))
const kb = (f: string) => Math.round(fs.statSync(f).size / 1024)
console.log(`wrote public/audio/lessons/${id}.mp3 (${kb(mp3)} KB, ${(ep.durationMs / 60000).toFixed(1)} min) and ${id}.json (${kb(path.join(outDir, `${id}.json`))} KB)`)
