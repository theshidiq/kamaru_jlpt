/**
 * generate-sample.ts
 * Generates a single sample (lq001) with:
 *   - Per-character voice casting (IntellectualSenior + GracefulMaiden)
 *   - Background ambiance mixed via ffmpeg (office.wav at 10% vol)
 *
 * Prerequisites:
 *   brew install ffmpeg
 *   npx tsx scripts/generate-ambiance.ts
 *
 * Run: npx tsx scripts/generate-sample.ts
 * Output: public/audio/listening/lq001-sample.mp3
 *   (does NOT overwrite existing lq001.mp3)
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'
import os from 'os'

// ─── Load .env ────────────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const envPath = path.join(ROOT, '.env')

const envVars: Record<string, string> = {}
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const eqIdx = line.indexOf('=')
    if (eqIdx > 0 && !line.startsWith('#')) {
      const key = line.slice(0, eqIdx).trim()
      const val = line.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '')
      envVars[key] = val
    }
  }
}

const API_KEY = envVars['VITE_MINIMAX_API_KEY']
const GROUP_ID = envVars['VITE_MINIMAX_GROUP_ID']
if (!API_KEY) { console.error('❌  VITE_MINIMAX_API_KEY not found in .env'); process.exit(1) }
if (!GROUP_ID) { console.error('❌  VITE_MINIMAX_GROUP_ID not found in .env'); process.exit(1) }

const API_URL = `https://api.minimax.io/v1/t2a_v2?GroupId=${GROUP_ID}`
const OUT_DIR = path.join(ROOT, 'public', 'audio', 'listening')
const AMBIANCE_DIR = path.join(ROOT, 'public', 'audio', 'ambiance')

// ─── Check prerequisites ──────────────────────────────────────────────────────
try {
  execSync('ffmpeg -version', { stdio: 'ignore' })
} catch {
  console.error('❌  ffmpeg not found. Run: brew install ffmpeg')
  process.exit(1)
}

const officeWav = path.join(AMBIANCE_DIR, 'office.wav')
if (!fs.existsSync(officeWav)) {
  console.error('❌  office.wav not found. Run: npx tsx scripts/generate-ambiance.ts')
  process.exit(1)
}

// ─── Voice IDs ────────────────────────────────────────────────────────────────
const NARRATOR = 'Japanese_DependableWoman'
// lq001: office scene — coworkers
const M = 'Japanese_IntellectualSenior'
const F = 'Japanese_GracefulMaiden'

// ─── Question data ────────────────────────────────────────────────────────────
const Q = {
  id: 'lq001',
  scene: 'office',
  question: '男の人はこれから何をしますか。',
  script: [
    { speaker: 'NARRATOR', text: '会社で、男の人と女の人が話しています。男の人はこれから何をしますか。' },
    { speaker: 'MALE',     text: '田中さん、明日の会議の資料、もう準備できましたか。' },
    { speaker: 'FEMALE',   text: 'あ、まだなんです。今日の午後には終わりそうです。' },
    { speaker: 'MALE',     text: 'そうですか。じゃあ、私がコピーしておきましょうか。' },
    { speaker: 'FEMALE',   text: 'ありがとうございます。でも、コピーは自分でします。田中さんは会議室の予約をお願いできますか。' },
    { speaker: 'MALE',     text: 'わかりました。じゃあ、会議室を予約しておきます。' },
  ],
}

// ─── TTS helpers ─────────────────────────────────────────────────────────────
async function callMiniMax(
  text: string,
  voiceId: string,
  emotion: 'neutral' | 'happy' | 'sad',
  speed: number,
): Promise<Buffer> {
  const body = {
    model: 'speech-02-hd',
    text,
    stream: false,
    output_format: 'hex',
    language_boost: 'Japanese',
    voice_setting: { voice_id: voiceId, speed, vol: 1.0, pitch: 0, emotion },
    audio_setting: { format: 'mp3', sample_rate: 32000, bitrate: 128000, channel: 1 },
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`MiniMax API ${res.status}: ${err}`)
  }

  const json = await res.json() as {
    data?: { audio?: string }
    base_resp?: { status_code: number; status_msg: string }
  }

  if (json.base_resp && json.base_resp.status_code !== 0) {
    throw new Error(`MiniMax error: ${json.base_resp.status_msg}`)
  }
  if (!json.data?.audio) {
    throw new Error(`No audio data returned: ${JSON.stringify(json)}`)
  }
  return Buffer.from(json.data.audio, 'hex')
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function addMicroPauses(text: string): string {
  return text
    .replace(/、/g, '、<#0.2#>')
    .replace(/。(?!$)/g, '。<#0.4#>')
}

// TTS + 12s rate-limit sleep
async function tts(
  label: string,
  text: string,
  voiceId: string,
  emotion: 'neutral' | 'happy' | 'sad' = 'neutral',
  speed = 0.9,
): Promise<Buffer> {
  process.stdout.write(`    ${label} ... `)
  const buf = await callMiniMax(text, voiceId, emotion, speed)
  console.log(`ok (${buf.length} bytes), waiting 12s...`)
  await sleep(12000)
  return buf
}

// Silence via TTS pause tag
async function sil(ms: number): Promise<Buffer> {
  const sec = (ms / 1000).toFixed(1)
  process.stdout.write(`    [sil ${ms}ms] ... `)
  const buf = await callMiniMax(`<#${sec}#>`, NARRATOR, 'neutral', 1.0)
  console.log(`ok (${buf.length} bytes), waiting 12s...`)
  await sleep(12000)
  return buf
}

// ─── ffmpeg mixing ────────────────────────────────────────────────────────────
function mixAmbiance(voiceMp3: string, ambianceWav: string, outputMp3: string) {
  const cmd = [
    'ffmpeg -y',
    `-stream_loop -1 -i "${ambianceWav}"`,
    `-i "${voiceMp3}"`,
    `-filter_complex "[0]volume=0.10[a];[1]volume=1.0[b];[a][b]amix=inputs=2:duration=shortest"`,
    `-ac 1 -ar 32000 -b:a 128k`,
    `"${outputMp3}"`,
  ].join(' ')

  console.log('\n  Mixing ambiance with voice via ffmpeg...')
  execSync(cmd, { stdio: ['ignore', 'ignore', 'pipe'] })
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })

  const outPath = path.join(OUT_DIR, 'lq001-sample.mp3')
  console.log(`\nGenerating sample: ${outPath}`)
  console.log(`Voices: M=${M}, F=${F}, Narrator=${NARRATOR}`)
  console.log(`Ambiance: office.wav @ 10% vol\n`)

  const parts: Buffer[] = []

  // Question number
  parts.push(await tts('[num]', '1番。', NARRATOR, 'neutral', 0.82))
  parts.push(await sil(600))

  // Scene-setter
  const [sceneLine, ...dialogueLines] = Q.script
  parts.push(await tts('[scene]', addMicroPauses(sceneLine.text), NARRATOR, 'neutral', 0.85))
  parts.push(await sil(700))

  // Dialogue
  for (let i = 0; i < dialogueLines.length; i++) {
    const line = dialogueLines[i]
    const text = addMicroPauses(line.text)
    const label = `[${line.speaker} ${i + 1}]`

    if (line.speaker === 'MALE') {
      const spd = text.includes('か。') ? 0.95 : 0.91
      parts.push(await tts(label, text, M, 'neutral', spd))
    } else {
      const spd = text.includes('か。') ? 0.96 : 0.92
      parts.push(await tts(label, text, F, 'neutral', spd))
    }

    if (i < dialogueLines.length - 1) {
      const pauseMs = line.text.endsWith('か。') ? 400 : 600
      parts.push(await sil(pauseMs))
    }
  }

  // Gap → question → answer silence
  parts.push(await sil(1500))
  parts.push(await tts('[question]', Q.question, NARRATOR, 'neutral', 0.85))
  parts.push(await sil(4000))

  // Write raw voice mp3 to a temp file
  const tmpVoice = path.join(os.tmpdir(), `kamaru-sample-voice-${Date.now()}.mp3`)
  const voiceBuf = Buffer.concat(parts)
  fs.writeFileSync(tmpVoice, voiceBuf)
  console.log(`\n  Voice-only assembled: ${(voiceBuf.length / 1024).toFixed(0)} KB → ${tmpVoice}`)

  // Mix with office ambiance
  mixAmbiance(tmpVoice, officeWav, outPath)
  fs.unlinkSync(tmpVoice)

  const stat = fs.statSync(outPath)
  console.log(`\n✅  Sample ready: ${outPath}  (${(stat.size / 1024).toFixed(0)} KB)`)
  console.log('\nListen to lq001-sample.mp3, then approve to run the full regeneration.')
}

main().catch(err => {
  console.error('Fatal:', err)
  process.exit(1)
})
