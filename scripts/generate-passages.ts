/**
 * Passage audio generation — ElevenLabs TTS with character-level timings.
 * Run: npx tsx scripts/generate-passages.ts [--level N2] [--chapter 1]
 *
 * Reads ELEVENLABS_* from .env. Outputs:
 *   public/audio/passages/<id>.mp3
 *   public/audio/passages/manifest.json   (per-token startMs/endMs)
 *
 * Unlike MiniMax, ElevenLabs /with-timestamps returns per-character start and
 * end times, so each seg[] token is mapped to an exact time range at build
 * time. The client never computes timings.
 *
 * Idempotent — skips passages whose mp3 already exists.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { PASSAGES_N2 } from '../src/lib/passages_n2'
import type { SectionPassage, PassageAudioEntry, PassageManifest, PassageTiming } from '../src/types/passage'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// ─── .env ────────────────────────────────────────────────────────────────────
const env: Record<string, string> = {}
const envPath = path.join(ROOT, '.env')
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const i = line.indexOf('=')
    if (i > 0 && !line.startsWith('#')) {
      env[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '')
    }
  }
}

const API_KEY = env['ELEVENLABS_API_KEY']
const VOICE_ID = env['ELEVENLABS_VOICE_ID']
const MODEL_ID = env['ELEVENLABS_MODEL'] || 'eleven_flash_v2_5'

if (!API_KEY) { console.error('❌  ELEVENLABS_API_KEY missing from .env'); process.exit(1) }
if (!VOICE_ID) { console.error('❌  ELEVENLABS_VOICE_ID missing from .env'); process.exit(1) }

const OUT_DIR = path.join(ROOT, 'public', 'audio', 'passages')
const MANIFEST = path.join(OUT_DIR, 'manifest.json')

// ─── CLI args ────────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
function arg(name: string): string | undefined {
  const i = args.indexOf(`--${name}`)
  return i >= 0 ? args[i + 1] : undefined
}
const onlyChapter = arg('chapter') ? Number(arg('chapter')) : undefined
const onlySection = arg('section') ? Number(arg('section')) : undefined
const dryRun = args.includes('--dry-run')

// ─── API ─────────────────────────────────────────────────────────────────────
interface Alignment {
  characters: string[]
  character_start_times_seconds: number[]
  character_end_times_seconds: number[]
}

/** What the API says it will actually speak — the pronunciation sanity check. */
let lastNormalised = ''

async function tts(text: string): Promise<{ audio: Buffer; alignment: Alignment }> {
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/with-timestamps`,
    {
      method: 'POST',
      headers: { 'xi-api-key': API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, model_id: MODEL_ID }),
    },
  )
  if (!res.ok) throw new Error(`${res.status} ${(await res.text()).slice(0, 200)}`)
  const json = await res.json() as {
    audio_base64: string
    alignment: Alignment
    normalized_alignment?: { characters: string[] }
  }
  if (!json.alignment?.characters?.length) throw new Error('no alignment returned')
  lastNormalised = (json.normalized_alignment?.characters ?? []).join('')
  return { audio: Buffer.from(json.audio_base64, 'base64'), alignment: json.alignment }
}

/**
 * Walk each seg[] token through the returned character array to get its time
 * range. A cursor keeps position so repeated words map to the right occurrence.
 */
function mapTimings(passage: SectionPassage, a: Alignment): PassageTiming[][] {
  const text = a.characters.join('')
  let cursor = 0
  return passage.sentences.map(sentence =>
    sentence.seg.map(token => {
      const spoken = token.t
      const i = text.indexOf(spoken, cursor)
      if (i < 0) {
        // Should not happen; fall back to a zero-width marker at the cursor.
        console.warn(`  warn: token ${JSON.stringify(spoken)} not found in alignment`)
        const ms = Math.round((a.character_start_times_seconds[cursor] ?? 0) * 1000)
        return { startMs: ms, endMs: ms }
      }
      const last = i + spoken.length - 1
      cursor = last + 1
      return {
        startMs: Math.round(a.character_start_times_seconds[i] * 1000),
        endMs: Math.round(a.character_end_times_seconds[last] * 1000),
      }
    }),
  )
}

/**
 * Text sent to the TTS — the kanji exactly as displayed.
 *
 * This MUST stay identical to what is on screen. eleven_v3 has a real
 * Japanese frontend and passes kanji through untouched, so display text and
 * spoken text are the same string and mapTimings can walk token.t directly.
 *
 * Do NOT substitute furigana here. The older models (flash_v2_5,
 * multilingual_v2) lack a Japanese frontend: they romanise kanji as Chinese
 * pinyin (私 -> "Si") AND collapse the geminate small-tsu (いっか -> "itsuka",
 * がっこう -> "gatsukou"). Feeding them kana fixed the first defect but not
 * the second. v3 is the only model that gets both right.
 */
function speechText(p: SectionPassage): string {
  return passageText(p)
}

/** Text as displayed (kanji), used only for reporting. */
function passageText(p: SectionPassage): string {
  return p.sentences.map(s => s.seg.map(t => t.t).join('')).join('')
}

function idOf(p: SectionPassage): string {
  return `${p.level.toLowerCase()}-${p.chapter}-${p.section}`
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })

  const all: SectionPassage[] = PASSAGES_N2
  const todo = all.filter(p =>
    (onlyChapter === undefined || p.chapter === onlyChapter) &&
    (onlySection === undefined || p.section === onlySection))

  const chars = todo.reduce((n, p) => n + speechText(p).length, 0)
  console.log(`${todo.length} passage(s), ${chars} characters`)
  console.log(`voice=${VOICE_ID} model=${MODEL_ID}`)
  if (dryRun) {
    for (const p of todo) console.log(`  ${idOf(p)}  ${speechText(p).length} chars (spoken)  ${p.title}`)
    console.log('\n--dry-run: nothing generated, no credits spent')
    return
  }

  const manifest: PassageManifest = fs.existsSync(MANIFEST)
    ? JSON.parse(fs.readFileSync(MANIFEST, 'utf-8'))
    : { generatedAt: '', voiceId: VOICE_ID, modelId: MODEL_ID, entries: [] }

  let generated = 0, skipped = 0
  for (const p of todo) {
    const id = idOf(p)
    const outPath = path.join(OUT_DIR, `${id}.mp3`)
    if (fs.existsSync(outPath) && manifest.entries.some(e => e.id === id)) {
      console.log(`  skip  ${id}  (already exists)`)
      skipped++
      continue
    }

    const text = speechText(p)
    process.stdout.write(`  gen   ${id}  ${text.length} chars  `)
    const { audio, alignment } = await tts(text)

    // Guard: verify the model actually spoke Japanese. normalized_alignment
    // echoes back what it will say, so both known defects are detectable:
    //   pinyin           私 -> "Si", 天気 -> "Tian Qi"
    //   geminate collapse いっか -> "itsuka", がっこう -> "gatsukou"
    // v3 echoes the Japanese back verbatim; anything latin means wrong model.
    const norm = lastNormalised
    if (/[A-Za-z]{2}/.test(norm)) {
      throw new Error(
        `${id}: TTS returned romanised text (${norm.slice(0, 60)}...) — ` +
        `model ${MODEL_ID} lacks a Japanese frontend, use eleven_v3`,
      )
    }
    if (text.includes('っ') && !norm.includes('っ')) {
      throw new Error(`${id}: geminate small-tsu was dropped by ${MODEL_ID}`)
    }
    fs.writeFileSync(outPath, audio)

    const timings = mapTimings(p, alignment)
    const durationMs = Math.round(
      alignment.character_end_times_seconds[alignment.character_end_times_seconds.length - 1] * 1000,
    )
    const entry: PassageAudioEntry = { id, audioUrl: `/audio/passages/${id}.mp3`, durationMs, timings }
    manifest.entries = manifest.entries.filter(e => e.id !== id).concat(entry)
    console.log(`done  ${(durationMs / 1000).toFixed(1)}s  ${(audio.length / 1024).toFixed(0)}KB`)
    generated++
  }

  manifest.generatedAt = new Date().toISOString()
  manifest.voiceId = VOICE_ID
  manifest.modelId = MODEL_ID
  manifest.entries.sort((a, b) => a.id.localeCompare(b.id))
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2))

  console.log(`\n  Generated : ${generated}`)
  console.log(`  Skipped   : ${skipped}`)
  console.log(`  Manifest  : ${MANIFEST}`)
}

main().catch(err => { console.error('\n❌ ', err); process.exit(1) })
