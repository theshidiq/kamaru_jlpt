/**
 * Audio for the BJT reading passages: emails, chats, meetings, memos,
 * notices. Run: npx tsx scripts/generate-bjt-passages.ts [--chapter 1] [--section 2] [--dry-run]
 *
 * Differs from generate-passages.ts (the JLPT narratives) in one way that
 * matters: a business text is voiced line by line, each line by whoever says
 * it (the narrator for documents, a character per speaker for chats and
 * meetings), and the clips are stitched with pauses into one MP3. The output
 * is the same manifest entry, so the reader needs nothing new.
 *
 * Clips live in audio-src/passages/<id>/ (committed: v3 never repeats a take,
 * so a lost clip costs credits). A line is re-voiced only when its text or
 * voice changes. A line that an audio lesson (video/) already voiced with the
 * same text and voice is reused from there for free.
 *
 * Needs ELEVENLABS_API_KEY in .env and ffmpeg. Writes
 * public/audio/passages/<id>.mp3 and merges into public/audio/passages/
 * manifest.json, which must first be the copy from R2:
 *   curl -s "$VITE_AUDIO_BASE_URL/audio/passages/manifest.json" -o public/audio/passages/manifest.json
 */
import { execFileSync } from 'child_process'
import crypto from 'crypto'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { PASSAGES_BJT } from '../src/lib/passages_bjt'
import type { PassageManifest, PassageTiming, SectionPassage } from '../src/types/passage'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const MODEL = 'eleven_v3'
const CREDITS_PER_CHAR = 0.4 // measured on the two BJT lessons

const NARRATOR = 'tTLw7unlQfMjcUKIUVzS'  // hikari: documents are read aloud
const SPEAKER_VOICE: Record<string, string> = {
  '田中課長': 'KJje3wzepLiSIQjVGCB6',  // Riku: calm, middle-aged
  '中村': 'KJje3wzepLiSIQjVGCB6',
  '木村': 'gHBfNp2PWSyFgpPlzCOd',      // Sakura
  '小林': 'gHBfNp2PWSyFgpPlzCOd',
  '山田': 'KJje3wzepLiSIQjVGCB6',
  '佐藤': 'iIeTr6tHs1VoWSqmCths',      // Sushio: casual, younger male
}
// Tokens the voice should read from kana. The display keeps the kanji; timing
// maps the spoken span back onto the token, so the highlight is unaffected.
const SPEAK_AS: Record<string, string> = {
  '何か所': 'なんかしょ', '聴読解': 'ちょうどっかい', 'BJT': 'ビージェーティー',
  '十か所': 'じゅっかしょ', '十日': 'とおか', '三十分': 'さんじゅっぷん', '三冊': 'さんさつ', '三人': 'さんにん', 'IT': 'アイティー',
}
// Pauses between lines, ms. A change of speaker gets a beat longer, and the
// header / signature of a document stand apart from its body.
const LEAD_IN = 400, SAME = 450, CHANGE = 700, APART = 800, TAIL = 800

const env: Record<string, string> = {}
for (const line of fs.readFileSync(path.join(ROOT, '.env'), 'utf-8').split('\n')) {
  const i = line.indexOf('=')
  if (i > 0 && !line.startsWith('#')) env[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '')
}
const args = process.argv.slice(2)
const arg = (n: string) => { const i = args.indexOf(`--${n}`); return i >= 0 ? Number(args[i + 1]) : undefined }
const dry = args.includes('--dry-run')

type CharTimes = [number, number][] // per displayed character, ms within the clip
type Clip = { file: string; durationMs: number; chars: CharTimes }

const idOf = (p: SectionPassage) => `${p.level.toLowerCase()}-${p.chapter}-${p.section}`
const textOf = (s: SectionPassage['sentences'][number]) => s.seg.map(t => t.t).join('')
/** A token as spoken: SPEAK_AS applied inside it (BJT sits within 「：BJT」). */
const say = (t: string) => Object.entries(SPEAK_AS).reduce((x, [k, v]) => x.split(k).join(v), t)
const spokenOf = (s: SectionPassage['sentences'][number]) => s.seg.map(t => say(t.t)).join('')
const voiceOf = (s: SectionPassage['sentences'][number]) => {
  if (!s.speaker) return NARRATOR
  const v = SPEAKER_VOICE[s.speaker]
  if (!v) throw new Error(`no voice for speaker ${s.speaker}: add it to SPEAKER_VOICE`)
  return v
}
const hash = (voice: string, text: string) => crypto.createHash('sha1').update(`${MODEL}|${voice}|${text}`).digest('hex').slice(0, 12)
const durationOf = (f: string) => Math.round(Number(execFileSync('ffprobe',
  ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString()) * 1000)

/** Lines already voiced by an audio lesson, keyed by voice + displayed text. */
function lessonClips(): Map<string, Clip> {
  const out = new Map<string, Clip>()
  const dataDir = path.join(ROOT, 'video', 'src', 'data')
  if (!fs.existsSync(dataDir)) return out
  for (const f of fs.readdirSync(dataDir)) {
    const ep = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf-8'))
    const epScript = JSON.parse(fs.readFileSync(path.join(ROOT, 'video', 'episodes', f), 'utf-8'))
    for (const seg of ep.segments) for (const l of seg.lines) {
      const text = l.units.map((u: { t: string }) => u.t).join('')
      // Unit times spread evenly over the unit's characters.
      const chars: CharTimes = []
      for (const u of l.units as { t: string; start: number; end: number }[]) {
        const step = (u.end - u.start) / u.t.length
        for (let k = 0; k < u.t.length; k++) chars.push([u.start + step * k, u.start + step * (k + 1)])
      }
      out.set(`${epScript.voices[l.sp].id}|${text}`, { file: path.join(ROOT, 'video', 'public', l.audio), durationMs: l.durationMs, chars })
    }
  }
  return out
}

async function tts(voice: string, text: string) {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}/with-timestamps`, {
    method: 'POST',
    headers: { 'xi-api-key': env.ELEVENLABS_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, model_id: MODEL }),
  })
  if (!res.ok) throw new Error(`${res.status} ${(await res.text()).slice(0, 200)}`)
  return await res.json() as { audio_base64: string; alignment: { characters: string[]; character_start_times_seconds: number[]; character_end_times_seconds: number[] } }
}

async function main() {
  const todo = PASSAGES_BJT.filter(p =>
    (arg('chapter') === undefined || p.chapter === arg('chapter')) && (arg('section') === undefined || p.section === arg('section')))
  const reuse = lessonClips()

  // 1. what each line needs
  const plan = todo.map(p => {
    const dir = path.join(ROOT, 'audio-src', 'passages', idOf(p))
    return { p, dir, lines: p.sentences.map((s, si) => {
      const voice = voiceOf(s), text = textOf(s), spoken = spokenOf(s), h = hash(voice, spoken)
      const base = path.join(dir, String(si).padStart(2, '0'))
      const cached = fs.existsSync(`${base}.json`) && JSON.parse(fs.readFileSync(`${base}.json`, 'utf-8')).hash === h
      const from = cached ? 'cache' : reuse.has(`${voice}|${text}`) ? 'lesson' : 'voice'
      return { s, si, voice, text, spoken, h, base, from }
    }) }
  })
  for (const { p, lines } of plan) {
    const n = (k: string) => lines.filter(l => l.from === k)
    const chars = n('voice').reduce((a, l) => a + l.spoken.length, 0)
    console.log(`${idOf(p)} ${p.format}: ${lines.length} lines — ${n('cache').length} cached, ${n('lesson').length} from a lesson, ${n('voice').length} to voice (${chars} chars ≈ ${Math.round(chars * CREDITS_PER_CHAR)} credits)`)
  }
  if (dry) { console.log('\n--dry-run: nothing generated, no credits spent'); return }

  const manifestPath = path.join(ROOT, 'public', 'audio', 'passages', 'manifest.json')
  const manifest: PassageManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))

  for (const { p, dir, lines } of plan) {
    fs.mkdirSync(dir, { recursive: true })
    // 2. every line as a clip with per-character times
    const clips: Clip[] = []
    for (const l of lines) {
      if (l.from === 'lesson') {
        const c = reuse.get(`${l.voice}|${l.text}`)!
        fs.copyFileSync(c.file, `${l.base}.mp3`)
        fs.writeFileSync(`${l.base}.json`, JSON.stringify({ hash: l.h, text: l.text, chars: c.chars, source: path.relative(ROOT, c.file) }))
      } else if (l.from === 'voice') {
        process.stdout.write(`  ${idOf(p)} ${l.si}: ${l.spoken}\n`)
        const res = await tts(l.voice, l.spoken)
        fs.writeFileSync(`${l.base}.mp3`, Buffer.from(res.audio_base64, 'base64'))
        const a = res.alignment
        const exact = a.characters.join('') === l.spoken
        if (!exact) console.warn(`  ! ${idOf(p)} ${l.si}: alignment differs from the text; spacing characters evenly`)
        const dur = durationOf(`${l.base}.mp3`)
        // Each token's spoken span, spread over the characters it displays.
        const chars: CharTimes = []
        let off = 0
        for (const tok of l.s.seg) {
          const said = say(tok.t), shown = [...tok.t].length
          const [t0, t1] = exact
            ? [a.character_start_times_seconds[off] * 1000, a.character_end_times_seconds[off + said.length - 1] * 1000]
            : [dur * off / l.spoken.length, dur * (off + said.length) / l.spoken.length]
          for (let k = 0; k < shown; k++) chars.push([t0 + (t1 - t0) * k / shown, t0 + (t1 - t0) * (k + 1) / shown])
          off += said.length
        }
        fs.writeFileSync(`${l.base}.json`, JSON.stringify({ hash: l.h, text: l.text, spoken: l.spoken, chars }))
      }
      const meta = JSON.parse(fs.readFileSync(`${l.base}.json`, 'utf-8'))
      clips.push({ file: `${l.base}.mp3`, durationMs: durationOf(`${l.base}.mp3`), chars: meta.chars })
    }

    // 3. lay the lines out with pauses, then time every token
    let clock = LEAD_IN
    const at: number[] = []
    lines.forEach((l, i) => {
      at.push(clock)
      const next = lines[i + 1]
      const gap = !next ? TAIL
        : (l.s.kind || next.s.kind) ? APART
        : next.s.speaker !== l.s.speaker ? CHANGE : SAME
      clock += clips[i].durationMs + gap
    })
    const durationMs = Math.round(clock)
    const timings: PassageTiming[][] = lines.map((l, i) => {
      let off = 0
      return l.s.seg.map(tok => {
        const first = clips[i].chars[off], last = clips[i].chars[off + [...tok.t].length - 1]
        off += [...tok.t].length
        return { startMs: Math.round(at[i] + first[0]), endMs: Math.round(at[i] + last[1]) }
      })
    })

    const out = path.join(ROOT, 'public', 'audio', 'passages', `${idOf(p)}.mp3`)
    const filter = clips.map((c, i) => `[${i}:a]adelay=${Math.round(at[i])}:all=1[a${i}]`).join(';') + ';' +
      clips.map((_, i) => `[a${i}]`).join('') + `amix=inputs=${clips.length}:normalize=0:dropout_transition=0,apad=whole_dur=${(durationMs / 1000).toFixed(3)}[out]`
    execFileSync('ffmpeg', ['-v', 'error', '-y', ...clips.flatMap(c => ['-i', c.file]), '-filter_complex', filter,
      '-map', '[out]', '-ac', '1', '-ar', '44100', '-b:a', '64k', out])

    const id = idOf(p)
    manifest.entries = manifest.entries.filter(e => e.id !== id).concat({ id, audioUrl: `/audio/passages/${id}.mp3`, durationMs, timings, modelId: MODEL })
    console.log(`  wrote ${id}.mp3  ${(durationMs / 1000).toFixed(1)}s`)
  }

  manifest.entries.sort((a, b) => a.id.localeCompare(b.id))
  manifest.generatedAt = new Date().toISOString()
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
  console.log(`manifest: ${manifest.entries.length} entries`)
}

main().catch(e => { console.error(e); process.exit(1) })
