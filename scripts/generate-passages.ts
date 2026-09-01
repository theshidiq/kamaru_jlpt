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
import { PASSAGES_N3 } from '../src/lib/passages_n3'
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
const onlyLevel = arg('level')?.toUpperCase()
const onlyChapter = arg('chapter') ? Number(arg('chapter')) : undefined
const onlySection = arg('section') ? Number(arg('section')) : undefined
const dryRun = args.includes('--dry-run')

// ─── API ─────────────────────────────────────────────────────────────────────
interface Alignment {
  characters: string[]
  character_start_times_seconds: number[]
  character_end_times_seconds: number[]
}


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

  const all: SectionPassage[] = [...PASSAGES_N2, ...PASSAGES_N3]
  const todo = all.filter(p =>
    (onlyLevel === undefined || p.level === onlyLevel) &&
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
    const cached = manifest.entries.find(e => e.id === id)
    if (fs.existsSync(outPath) && cached) {
      if (cached.modelId === MODEL_ID) {
        console.log(`  skip  ${id}  (already generated by ${MODEL_ID})`)
        skipped++
        continue
      }
      // Existing audio came from a different model — the file on disk says
      // nothing about whether it is still correct, so regenerate it.
      console.log(`  stale ${id}  (was ${cached.modelId ?? 'unknown'}, regenerating)`)
    }

    const text = speechText(p)
    process.stdout.write(`  gen   ${id}  ${text.length} chars  `)
    const { audio, alignment } = await tts(text)

    // Guard: verify the model actually spoke Japanese. The alignment echoes
    // back what it will say, so both known defects are detectable:
    //   pinyin           私 -> "Si", 天気 -> "Tian Qi"
    //   geminate collapse いっか -> "itsuka", がっこう -> "gatsukou"
    // v3 echoes the Japanese back verbatim; romanisation means the wrong model.
    //
    // Compare against alignment.characters (the full utterance), NOT
    // normalized_alignment — the latter is truncated, so a geminate late in a
    // long passage looks "missing" when it is merely past the cutoff.
    const spokenBack = alignment.characters.join('')
    const romanised = spokenBack.match(/[A-Za-z]{2,}/g) ?? []
    if (romanised.length > 2) {
      throw new Error(
        `${id}: TTS romanised the text (${romanised.slice(0, 6).join(' ')}) — ` +
        `model ${MODEL_ID} has no Japanese frontend, use eleven_v3`,
      )
    }
    const wantGeminate = (text.match(/っ/g) ?? []).length
    const gotGeminate = (spokenBack.match(/っ/g) ?? []).length
    if (wantGeminate > 0 && gotGeminate < wantGeminate) {
      throw new Error(
        `${id}: ${wantGeminate - gotGeminate} of ${wantGeminate} geminate っ ` +
        `dropped by ${MODEL_ID} (reads いっか as いつか)`,
      )
    }
    // Guard: the API sometimes returns a truncated utterance (it stops
    // partway and the alignment simply ends). Unmapped tokens then collapse to
    // zero-width timings and the highlight freezes, so reject it here.
    if (spokenBack.length < text.length * 0.9) {
      throw new Error(
        `${id}: TTS returned only ${spokenBack.length}/${text.length} characters ` +
        `— truncated audio, retry this passage`,
      )
    }

    fs.writeFileSync(outPath, audio)

    // Guard: the alignment must describe the audio we just wrote. eleven_v3
    // is non-deterministic — the same text re-rendered varies by a second or
    // more — so timings are only valid for the exact render they came from.
    // Regenerating an mp3 while keeping an older entry's timings silently
    // desynchronises the highlight, which is how n2-1-1..4 drifted by up to
    // 4.8s. Writing both here from one response is what keeps them paired.
    const timings = mapTimings(p, alignment)
    const durationMs = Math.round(
      alignment.character_end_times_seconds[alignment.character_end_times_seconds.length - 1] * 1000,
    )
    const entry: PassageAudioEntry = {
      id, audioUrl: `/audio/passages/${id}.mp3`, durationMs, timings, modelId: MODEL_ID,
    }
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
