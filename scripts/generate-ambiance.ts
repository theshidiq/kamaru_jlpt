/**
 * generate-ambiance.ts
 * Generates 6 background ambiance WAV files for listening quiz scenes.
 * Pure Node.js — no npm installs needed.
 * Run: npx tsx scripts/generate-ambiance.ts
 *
 * Output: public/audio/ambiance/{scene}.wav
 * Format: 32000 Hz, mono, 16-bit signed PCM, RIFF/WAV
 */

import * as fs from 'fs'
import * as path from 'path'

const SAMPLE_RATE = 32000
const DURATION_SEC = 30
const N = SAMPLE_RATE * DURATION_SEC

const OUT_DIR = path.resolve(process.cwd(), 'public/audio/ambiance')
fs.mkdirSync(OUT_DIR, { recursive: true })

// ── Utility ───────────────────────────────────────────────────────────────────

function rng(seed = 42) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

function mix(...bufs: Float32Array[]): Float32Array {
  const out = new Float32Array(bufs[0].length)
  for (const b of bufs) for (let i = 0; i < out.length; i++) out[i] += b[i]
  // Soft clip at ±0.92
  for (let i = 0; i < out.length; i++) {
    const x = out[i]
    out[i] = x / (1 + Math.abs(x)) * 0.92
  }
  return out
}

function gain(buf: Float32Array, vol: number): Float32Array {
  const out = new Float32Array(buf.length)
  for (let i = 0; i < buf.length; i++) out[i] = buf[i] * vol
  return out
}

// ── Noise generators ──────────────────────────────────────────────────────────

function whiteNoise(vol: number, rand: () => number): Float32Array {
  const buf = new Float32Array(N)
  for (let i = 0; i < N; i++) buf[i] = (rand() * 2 - 1) * vol
  return buf
}

function pinkNoise(vol: number, rand: () => number): Float32Array {
  const buf = new Float32Array(N)
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
  for (let i = 0; i < N; i++) {
    const w = rand() * 2 - 1
    b0 = 0.99886 * b0 + w * 0.0555179
    b1 = 0.99332 * b1 + w * 0.0750759
    b2 = 0.96900 * b2 + w * 0.1538520
    b3 = 0.86650 * b3 + w * 0.3104856
    b4 = 0.55000 * b4 + w * 0.5329522
    b5 = -0.7616 * b5 - w * 0.0168980
    b6 = w * 0.115926
    buf[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11 * vol
  }
  return buf
}

// ── Sine / tones ──────────────────────────────────────────────────────────────

function sine(freq: number, vol: number, phase = 0): Float32Array {
  const buf = new Float32Array(N)
  const omega = (2 * Math.PI * freq) / SAMPLE_RATE
  for (let i = 0; i < N; i++) buf[i] = Math.sin(omega * i + phase) * vol
  return buf
}

// Sine with slow tremolo (flutter)
function sineFlutter(freq: number, vol: number, flutterHz = 0.3): Float32Array {
  const buf = new Float32Array(N)
  const omega = (2 * Math.PI * freq) / SAMPLE_RATE
  const fw = (2 * Math.PI * flutterHz) / SAMPLE_RATE
  for (let i = 0; i < N; i++) {
    const env = 0.85 + 0.15 * Math.sin(fw * i)
    buf[i] = Math.sin(omega * i) * vol * env
  }
  return buf
}

// ── Transient helpers ─────────────────────────────────────────────────────────

// Decaying sine burst (click, clink, tap)
function burst(
  buf: Float32Array,
  startSample: number,
  freq: number,
  vol: number,
  decaySec: number,
  rand: () => number,
  noiseRatio = 0,
) {
  const decaySamples = decaySec * SAMPLE_RATE
  const omega = (2 * Math.PI * freq) / SAMPLE_RATE
  for (let j = 0; j < decaySamples * 6 && startSample + j < N; j++) {
    const env = Math.exp(-j / decaySamples)
    const tone = Math.sin(omega * j)
    const noise = rand() * 2 - 1
    buf[startSample + j] += (tone * (1 - noiseRatio) + noise * noiseRatio) * vol * env
  }
}

// Short broadband click (keyboard, mouse)
function click(buf: Float32Array, pos: number, vol: number, rand: () => number) {
  const len = Math.round(0.003 * SAMPLE_RATE) // 3ms
  for (let j = 0; j < len && pos + j < N; j++) {
    const env = Math.exp(-j / (0.0008 * SAMPLE_RATE))
    buf[pos + j] += (rand() * 2 - 1) * vol * env
  }
}

// Reverb: comb + allpass approximation
function reverb(src: Float32Array, roomSize = 0.4, wet = 0.3): Float32Array {
  const out = new Float32Array(src.length)
  const delays = [1487, 1699, 1889, 2053] // comb filter delays (samples)
  const gains = [0.84, 0.83, 0.82, 0.81]

  // Comb filters
  const combs: Float32Array[] = delays.map(d => new Float32Array(Math.round(d * roomSize)))
  for (let i = 0; i < src.length; i++) {
    let wet_sum = 0
    for (let c = 0; c < combs.length; c++) {
      const d = combs[c].length
      const pos = i % d
      wet_sum += combs[c][pos]
      combs[c][pos] = src[i] + combs[c][pos] * gains[c]
    }
    out[i] = src[i] * (1 - wet) + (wet_sum / combs.length) * wet
  }
  return out
}

// ── Scene synthesizers ────────────────────────────────────────────────────────

// OFFICE: keyboard typing bursts, occasional mouse click, A/C hum
function makeOffice(): Float32Array {
  const rand = rng(101)
  const out = new Float32Array(N)

  // A/C hum: 60 Hz + harmonics
  const hum = mix(sine(60, 0.018), sine(120, 0.007), sine(180, 0.003))
  for (let i = 0; i < N; i++) out[i] += hum[i]

  // Very quiet room noise
  const room = gain(pinkNoise(0.012, rand), 1)
  for (let i = 0; i < N; i++) out[i] += room[i]

  // Typing bursts: ~4-8 keystrokes per burst, bursts every 1.5-4s
  let pos = Math.round(0.3 * SAMPLE_RATE)
  while (pos < N) {
    const burstLen = 4 + Math.floor(rand() * 8) // 4-12 keys
    const keyInterval = Math.round((0.06 + rand() * 0.08) * SAMPLE_RATE) // 60-140ms
    for (let k = 0; k < burstLen; k++) {
      const kpos = pos + k * keyInterval + Math.round((rand() - 0.5) * 0.02 * SAMPLE_RATE)
      if (kpos < N) {
        click(out, kpos, 0.08 + rand() * 0.04, rand)
      }
    }
    // Gap between bursts: 0.8-3.5s
    pos += burstLen * keyInterval + Math.round((0.8 + rand() * 2.7) * SAMPLE_RATE)
  }

  // Mouse clicks: occasional double-click
  let mpos = Math.round(1.5 * SAMPLE_RATE)
  while (mpos < N) {
    click(out, mpos, 0.12 + rand() * 0.05, rand)
    if (rand() > 0.5) {
      click(out, mpos + Math.round(0.15 * SAMPLE_RATE), 0.10, rand)
    }
    mpos += Math.round((2.0 + rand() * 5.0) * SAMPLE_RATE)
  }

  return out
}

// STATION: train arrival rumble, platform echo, crowd murmur
function makeStation(): Float32Array {
  const rand = rng(202)
  const out = new Float32Array(N)

  // Distant crowd murmur — filtered pink noise
  const crowd = pinkNoise(0.06, rand)
  // Low-pass via simple IIR
  let prev = 0
  for (let i = 0; i < N; i++) {
    prev = prev * 0.92 + crowd[i] * 0.08
    out[i] += prev
  }

  // Platform reverb on crowd
  const rev = reverb(out, 0.6, 0.45)
  for (let i = 0; i < N; i++) out[i] = rev[i]

  // Train rumble (distant) — low sine sweep 40-80 Hz, 3s duration, appears once ~10s in
  const trainStart = Math.round(8 * SAMPLE_RATE)
  const trainDur = Math.round(4 * SAMPLE_RATE)
  for (let j = 0; j < trainDur && trainStart + j < N; j++) {
    const t = j / SAMPLE_RATE
    const freq = 40 + 40 * (j / trainDur)          // sweep up
    const env = Math.sin(Math.PI * j / trainDur)     // fade in/out
    const omega = (2 * Math.PI * freq) / SAMPLE_RATE
    out[trainStart + j] += Math.sin(omega * j) * 0.09 * env
    // Add rumble noise
    out[trainStart + j] += (rand() * 2 - 1) * 0.04 * env
    void t
  }

  // Second train (departing) at ~22s — higher pitch rumble
  const train2 = Math.round(20 * SAMPLE_RATE)
  const train2Dur = Math.round(3.5 * SAMPLE_RATE)
  for (let j = 0; j < train2Dur && train2 + j < N; j++) {
    const freq = 80 - 30 * (j / train2Dur)          // sweep down
    const env = Math.sin(Math.PI * j / train2Dur)
    const omega = (2 * Math.PI * freq) / SAMPLE_RATE
    out[train2 + j] += Math.sin(omega * j) * 0.07 * env
    out[train2 + j] += (rand() * 2 - 1) * 0.03 * env
  }

  // PA announcement simulation: band-pass noise burst (voice-like)
  const paStart = Math.round(14 * SAMPLE_RATE)
  const paDur = Math.round(2.5 * SAMPLE_RATE)
  let paLp = 0, paHp = 0, paPrev = 0
  const src = whiteNoise(0.15, rand)
  for (let j = 0; j < paDur && paStart + j < N; j++) {
    const env = Math.min(1, j / (0.1 * SAMPLE_RATE)) * Math.min(1, (paDur - j) / (0.1 * SAMPLE_RATE))
    // Band-pass 300–3000 Hz (phone/PA band)
    const alphaL = (2 * Math.PI * 3000 / SAMPLE_RATE) / (1 + 2 * Math.PI * 3000 / SAMPLE_RATE)
    const alphaH = (2 * Math.PI * 300 / SAMPLE_RATE) / (1 + 2 * Math.PI * 300 / SAMPLE_RATE)
    paLp = paLp + alphaL * (src[paStart + j] - paLp)
    const hp = alphaH * (paHp + paLp - paPrev)
    paHp = hp; paPrev = paLp
    out[paStart + j] += hp * env * 0.08
  }

  return out
}

// RESTAURANT: cutlery clinks, chair scrape, low chatter, background music note
function makeRestaurant(): Float32Array {
  const rand = rng(303)
  const out = new Float32Array(N)

  // Background chatter — mid-frequency pink noise
  const chatter = pinkNoise(0.04, rand)
  let lp = 0
  for (let i = 0; i < N; i++) {
    lp = lp * 0.88 + chatter[i] * 0.12   // band-shape
    out[i] += lp
  }

  // Soft background music: 3-note chord loop (restaurant ambience)
  const notes = [261.63, 329.63, 392.0]  // C4, E4, G4
  for (const freq of notes) {
    const f = sineFlutter(freq, 0.010, 0.1 + rand() * 0.2)
    for (let i = 0; i < N; i++) out[i] += f[i]
  }

  // Cutlery clinks (glass/metal): 1200–1800 Hz, short decay
  let pos = Math.round(0.8 * SAMPLE_RATE)
  while (pos < N) {
    const freq = 1200 + rand() * 600
    burst(out, pos, freq, 0.06 + rand() * 0.04, 0.04, rand, 0.15)
    pos += Math.round((1.2 + rand() * 3.5) * SAMPLE_RATE)
  }

  // Chair scrape: once or twice — broadband short noise burst
  const scrapePositions = [
    Math.round(4 * SAMPLE_RATE),
    Math.round(19 * SAMPLE_RATE),
  ]
  for (const sp of scrapePositions) {
    if (rand() > 0.3) {
      const scrapeDur = Math.round(0.25 * SAMPLE_RATE)
      for (let j = 0; j < scrapeDur && sp + j < N; j++) {
        const env = Math.exp(-j / (0.08 * SAMPLE_RATE))
        out[sp + j] += (rand() * 2 - 1) * 0.07 * env
      }
    }
  }

  // Plate/bowl set down: mid-freq thud
  const platePos = Math.round(12 * SAMPLE_RATE)
  burst(out, platePos, 400, 0.08, 0.06, rand, 0.5)
  burst(out, platePos, 800, 0.04, 0.03, rand, 0.3)

  return out
}

// HOME: clock tick, fridge hum, distant birds, very quiet
function makeHome(): Float32Array {
  const rand = rng(404)
  const out = new Float32Array(N)

  // Room tone: very quiet pink noise
  const room = gain(pinkNoise(0.008, rand), 1)
  for (let i = 0; i < N; i++) out[i] += room[i]

  // Fridge hum: 100 Hz + 200 Hz, very soft
  const fridge = mix(
    sine(100, 0.015),
    sine(200, 0.007),
    sine(300, 0.003),
  )
  for (let i = 0; i < N; i++) out[i] += fridge[i]

  // Clock tick: sharp click every 1.0s
  for (let tick = 0; tick < DURATION_SEC; tick++) {
    const tpos = Math.round((tick + 0.1 + rand() * 0.01) * SAMPLE_RATE)
    if (tpos < N) {
      // Tick: 2kHz decaying burst, very short
      burst(out, tpos, 2000, 0.04, 0.003, rand, 0.3)
      // Tock (slightly duller): 1200 Hz
      burst(out, tpos + Math.round(0.004 * SAMPLE_RATE), 1200, 0.025, 0.003, rand, 0.4)
    }
  }

  // Birds (outside window): occasional chirp — up-swept burst, very faint
  const birdTimes = [2.1, 7.5, 8.0, 14.2, 22.8, 23.3, 27.1]
  for (const bt of birdTimes) {
    const bpos = Math.round(bt * SAMPLE_RATE)
    if (bpos < N) {
      const chirpDur = Math.round(0.12 * SAMPLE_RATE)
      for (let j = 0; j < chirpDur && bpos + j < N; j++) {
        const freq = 3000 + 2000 * (j / chirpDur)
        const env = Math.sin(Math.PI * j / chirpDur)
        out[bpos + j] += Math.sin((2 * Math.PI * freq / SAMPLE_RATE) * j) * 0.025 * env
      }
    }
  }

  return out
}

// STORE: register beep, light footsteps, background music jingle
function makeStore(): Float32Array {
  const rand = rng(505)
  const out = new Float32Array(N)

  // Store ambience: soft pink noise
  const amb = gain(pinkNoise(0.018, rand), 1)
  for (let i = 0; i < N; i++) out[i] += amb[i]

  // Background music: upbeat loop — 4-note melody (C5 E5 G5 A5)
  const melody = [523.25, 659.25, 783.99, 880.0]
  // Arpeggiated, each note 1s, looping
  for (let note = 0; note < DURATION_SEC; note++) {
    const freq = melody[note % melody.length]
    const nStart = note * SAMPLE_RATE
    const nDur = SAMPLE_RATE
    const omega = (2 * Math.PI * freq) / SAMPLE_RATE
    for (let j = 0; j < nDur && nStart + j < N; j++) {
      const env = Math.sin(Math.PI * j / nDur) * 0.5 + 0.5
      out[nStart + j] += Math.sin(omega * j) * 0.012 * env
    }
  }

  // Register beep: 880 Hz short tone, appears 2-3 times
  const beepTimes = [3.5, 11.2, 24.8]
  for (const bt of beepTimes) {
    const bpos = Math.round(bt * SAMPLE_RATE)
    const bDur = Math.round(0.12 * SAMPLE_RATE)
    const omega = (2 * Math.PI * 880) / SAMPLE_RATE
    for (let j = 0; j < bDur && bpos + j < N; j++) {
      const env = Math.min(j / (0.01 * SAMPLE_RATE), 1) * Math.min((bDur - j) / (0.01 * SAMPLE_RATE), 1)
      out[bpos + j] += Math.sin(omega * j) * 0.06 * env
    }
  }

  // Footsteps: periodic heel-click pattern (customer walking)
  let fpos = Math.round(5 * SAMPLE_RATE)
  const stepInterval = Math.round(0.55 * SAMPLE_RATE) // ~110 BPM walk
  let stepCount = 0
  while (fpos < N && stepCount < 12) {
    burst(out, fpos, 180, 0.05, 0.018, rand, 0.6)
    fpos += stepInterval + Math.round((rand() - 0.5) * 0.05 * SAMPLE_RATE)
    stepCount++
  }

  return out
}

// CLASSROOM: chalk on board, paper shuffle, pen taps, HVAC hiss
function makeClassroom(): Float32Array {
  const rand = rng(606)
  const out = new Float32Array(N)

  // HVAC hiss: white noise, very quiet
  const hvac = gain(whiteNoise(0.010, rand), 1)
  for (let i = 0; i < N; i++) out[i] += hvac[i]

  // Chalk on board: short high-freq scrape (1-3 times)
  const chalkTimes = [2.5, 9.8, 20.1]
  for (const ct of chalkTimes) {
    const cpos = Math.round(ct * SAMPLE_RATE)
    const cDur = Math.round((0.3 + rand() * 0.8) * SAMPLE_RATE) // 0.3–1.1s
    for (let j = 0; j < cDur && cpos + j < N; j++) {
      // High-pass noise + 3kHz tone for chalk squeak quality
      const noise = (rand() * 2 - 1) * 0.05
      const squeak = Math.sin((2 * Math.PI * (3000 + rand() * 500) / SAMPLE_RATE) * j) * 0.03
      const env = 0.7 + 0.3 * Math.sin(Math.PI * j / cDur)
      out[cpos + j] += (noise + squeak) * env
    }
  }

  // Paper shuffling (students): noise burst with specific texture
  const shuffleTimes = [5.5, 13.2, 17.8, 25.3]
  for (const st of shuffleTimes) {
    const spos = Math.round(st * SAMPLE_RATE)
    const sDur = Math.round((0.4 + rand() * 0.6) * SAMPLE_RATE)
    for (let j = 0; j < sDur && spos + j < N; j++) {
      const env = Math.sin(Math.PI * j / sDur)
      out[spos + j] += (rand() * 2 - 1) * 0.045 * env
    }
  }

  // Pen/pencil taps: rhythmic triple-tap pattern (student thinking)
  const tapStart = Math.round(8 * SAMPLE_RATE)
  for (let t = 0; t < 3; t++) {
    const tpos = tapStart + Math.round(t * 0.18 * SAMPLE_RATE)
    burst(out, tpos, 600, 0.04, 0.008, rand, 0.5)
  }
  const tapStart2 = Math.round(21 * SAMPLE_RATE)
  for (let t = 0; t < 4; t++) {
    const tpos = tapStart2 + Math.round(t * 0.15 * SAMPLE_RATE)
    burst(out, tpos, 550, 0.035, 0.007, rand, 0.5)
  }

  return out
}

// ── WAV encoder ───────────────────────────────────────────────────────────────

function encodeWav(samples: Float32Array): Buffer {
  const dataSize = samples.length * 2
  const buf = Buffer.alloc(44 + dataSize)
  buf.write('RIFF', 0)
  buf.writeUInt32LE(36 + dataSize, 4)
  buf.write('WAVE', 8)
  buf.write('fmt ', 12)
  buf.writeUInt32LE(16, 16)
  buf.writeUInt16LE(1, 20)              // PCM
  buf.writeUInt16LE(1, 22)              // mono
  buf.writeUInt32LE(SAMPLE_RATE, 24)
  buf.writeUInt32LE(SAMPLE_RATE * 2, 28)
  buf.writeUInt16LE(2, 32)
  buf.writeUInt16LE(16, 34)
  buf.write('data', 36)
  buf.writeUInt32LE(dataSize, 40)
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]))
    buf.writeInt16LE(Math.round(s * 32767), 44 + i * 2)
  }
  return buf
}

// ── Main ──────────────────────────────────────────────────────────────────────

const scenes: [string, () => Float32Array][] = [
  ['office',     makeOffice],
  ['station',    makeStation],
  ['restaurant', makeRestaurant],
  ['home',       makeHome],
  ['store',      makeStore],
  ['classroom',  makeClassroom],
]

for (const [scene, generate] of scenes) {
  process.stdout.write(`Generating ${scene}.wav ... `)
  const samples = generate()
  const wav = encodeWav(samples)
  const outPath = path.join(OUT_DIR, `${scene}.wav`)
  fs.writeFileSync(outPath, wav)
  const kb = Math.round(wav.length / 1024)
  console.log(`done (${kb} KB) → ${outPath}`)
}

console.log('\nAll ambiance files generated.')
console.log('Next: npx tsx scripts/generate-sample.ts')
