/**
 * Lays an episode's voiced lines out on one clock. Every gap lives here, so
 * pacing is tuned in one place and the audio and visuals can't drift apart.
 */
export type Part = { t: string; r?: string }
export type Unit = { t: string; parts: Part[]; start: number; end: number; word?: string }
export type Line = {
  id: string; sp: string; name: string; units: Unit[]; en: string; role?: string
  cast?: string // who they are in the scene: 'boss' | 'staff'
  audio: string; durationMs: number
  at: number // ms from the start of its segment
}
export type Segment = {
  type: 'intro' | 'scene' | 'bridge' | 'word' | 'quiz' | 'outro'
  block?: string; scene?: string
  label?: { jp: string; en: string } // the reading part: 会議, 報告書, お知らせ… (default 会話)
  ambience?: string // its place sound: office, meeting, training, cafe, store, station
  word?: string; reading?: string; meaning?: string; alsoIn?: string | null; index?: number; total?: number
  n?: number; prompt?: Omit<Unit, 'start' | 'end'>[]; promptEn?: string; choices?: string[]; answer?: number
  lines: Line[]
  at: number; dur: number // ms, on the episode clock
}
export type Block = { jp: string; en: string; scene: string }
export type Episode = {
  id: string; title: string; titleEn: string; label: string
  blocks: Record<string, Block>
  short?: string[] // words the portrait short covers after the conversation
  screen?: { subject: string; line: string; mark?: boolean } // the office monitor
  segments: Segment[]
}

const LEAD_IN = 500      // before a segment's first line
const BETWEEN = 450      // between lines
const THINK = 5000       // quiz: after the question, before the answer
const TAIL: Partial<Record<Segment['type'], number>> = { word: 1100, quiz: 1500, scene: 900, outro: 2500 }

export function schedule(ep: { segments: Omit<Segment, 'at' | 'dur'>[] } & Omit<Episode, 'segments'>): Episode & { durationMs: number } {
  let clock = 0
  const segments = ep.segments.map(s => {
    let t = LEAD_IN
    const lines = s.lines.map(l => {
      const line = { ...l, at: t }
      t += l.durationMs + (s.type === 'quiz' && l.role === 'ask' ? THINK : BETWEEN)
      return line
    })
    t += (TAIL[s.type] ?? 600) - BETWEEN
    const seg = { ...s, lines, at: clock, dur: t } as Segment
    clock += t
    return seg
  })
  return { ...ep, segments, durationMs: clock }
}

/** The line being spoken (or the last one spoken) at `ms` into a segment. */
export function lineAt(seg: Segment, ms: number) {
  let cur: Line | null = null
  for (const l of seg.lines) if (l.at <= ms) cur = l
  return cur
}
