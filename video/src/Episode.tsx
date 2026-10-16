import { AbsoluteFill, Audio, interpolate, Sequence, staticFile, useCurrentFrame, useVideoConfig } from 'remotion'
import { DEFAULT_SCREEN, FOCUS, ScreenTextContext } from './art/scenes'
import { BgContext, BgTrack, useBg, type BgMode, type BgSrc } from './bg'
import { SoundLayer, type SoundMode } from './sound'
import { useInteraction } from './interaction'
import { lineAt, type Episode as Ep, type Segment } from './timeline'
import { Chip, FONT, INDIGO, Karaoke, Ruby, SceneFill, SpeakerChip, useClock, usePop, WordCard, WordLines } from './ui'

// The picture takes the top PIC px; the spoken line gets the band below it,
// sized so it reads from across a room, not just up close.
const W = 1920, PIC = 690
const BAND = { size: 56, long: 50, rt: 26, en: 32, chip: 30 }

/** Voice clips, one <Sequence> per line, on the episode clock. */
export function Voices({ ep }: { ep: Ep }) {
  const { fps } = useVideoConfig()
  const f = (ms: number) => Math.round((ms / 1000) * fps)
  return (
    <>
      {ep.segments.flatMap(s => s.lines.map(l => (
        <Sequence key={l.id} from={f(s.at + l.at)} durationInFrames={f(l.durationMs) + 3} layout="none">
          <Audio src={staticFile(l.audio)} />
        </Sequence>
      )))}
    </>
  )
}

function Band({ seg, ms }: { seg: Segment; ms: number }) {
  const line = lineAt(seg, ms)
  return (
    <div style={{ position: 'absolute', top: PIC, left: 0, width: W, height: 1080 - PIC, background: INDIGO }}>
      <div style={{ position: 'absolute', left: 110, right: 110, top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {line && (
          <div>
            <SpeakerChip line={line} size={BAND.chip} />
            {/* a long line drops a size so it stays on two lines */}
            <Karaoke line={line} ms={ms} size={line.units.reduce((n, u) => n + u.t.length, 0) > 58 ? BAND.long : BAND.size} en={BAND.en} />
          </div>
        )}
      </div>
    </div>
  )
}

function Picture({ scene, frame, speaker, shade = 0 }: { scene: string; frame: number; speaker?: string; shade?: number }) {
  const bg = useBg()
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: W, height: PIC, overflow: 'hidden' }}>
      {bg === 'svg' && <SceneFill scene={scene} frame={frame} speaker={speaker} />}
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(30,27,75,${0.55 + shade}) 0%, rgba(30,27,75,${shade}) 26%, rgba(30,27,75,${shade}) 86%, ${INDIGO} 100%)` }} />
    </div>
  )
}

function Intro({ seg, ep }: { seg: Segment; ep: Ep }) {
  const { ms, global } = useClock(seg)
  const pop = usePop(6)
  return (
    <>
      <Picture scene="office" frame={global} shade={0.55} />
      <div style={{ position: 'absolute', left: 120, top: 190, opacity: pop, transform: `translateY(${(1 - pop) * 30}px)` }}>
        <div style={{ fontSize: 34, fontWeight: 700, color: '#c7d2fe', letterSpacing: 3 }}>華丸 ビジネス日本語 · {ep.label}</div>
        <div style={{ fontSize: 110, fontWeight: 900, marginTop: 14, textShadow: '0 6px 24px rgba(0,0,0,0.4)' }}>{ep.title}</div>
        <div style={{ fontSize: 40, marginTop: 10, color: '#e0e7ff' }}>{ep.titleEn} · {ep.segments.filter(s => s.type === 'word').length} words</div>
      </div>
      <Band seg={seg} ms={ms} />
    </>
  )
}

function Scene({ seg }: { seg: Segment }) {
  const { ms, global } = useClock(seg)
  const line = lineAt(seg, ms)
  const speaking = line && ms < line.at + line.durationMs ? line.cast : undefined
  return (
    <>
      <Picture scene={seg.scene ?? 'office'} frame={global} speaker={speaking} />
      <div style={{ position: 'absolute', right: 64, top: 48 }}><Chip size={30} color="rgba(30,27,75,0.85)">{seg.label ? `${seg.label.jp} · ${seg.label.en}` : '会話 · Conversation'}</Chip></div>
      <Band seg={seg} ms={ms} />
    </>
  )
}

function Bridge({ seg, ep, count }: { seg: Segment; ep: Ep; count: number }) {
  const { ms, global } = useClock(seg)
  const pop = usePop(4)
  const b = ep.blocks[seg.block ?? '']
  return (
    <>
      <Picture scene={b.scene} frame={global} shade={0.45} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: W, height: PIC, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        opacity: pop, transform: `scale(${0.9 + 0.1 * pop})` }}>
        <div style={{ fontSize: 120, fontWeight: 900, textShadow: '0 6px 24px rgba(0,0,0,0.4)' }}>{b.jp}</div>
        <div style={{ fontSize: 44, color: '#e0e7ff', marginTop: 8 }}>{b.en}{count ? ` · ${count} ${seg.block === 'quiz' ? 'questions' : 'words'}` : ''}</div>
      </div>
      <Band seg={seg} ms={ms} />
    </>
  )
}

function Word({ seg, ep }: { seg: Segment; ep: Ep }) {
  const { ms, global, fps } = useClock(seg)
  const fade = interpolate(ms, [0, (8 / fps) * 1000], [0, 1], { extrapolateRight: 'clamp' })
  const b = ep.blocks[seg.block ?? '']
  const bg = useBg()
  return (
    <>
      {/* the block's scene, sliced into the right-hand window */}
      <div style={{ position: 'absolute', left: 1100, top: 0, width: 820, height: 1080, overflow: 'hidden' }}>
        {bg === 'svg' && <SceneFill scene={b.scene} frame={global} zoom={false} focus={FOCUS[b.scene]} width={820} />}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, ${INDIGO} 0%, rgba(30,27,75,0) 22%)` }} />
      </div>
      <div style={{ position: 'absolute', left: 0, top: 0, width: 1100, height: 1080, background: `linear-gradient(160deg, ${INDIGO} 0%, #312e81 70%, #3b2a86 100%)` }} />
      <div style={{ position: 'absolute', left: 80, top: 56, width: 940, display: 'flex', flexDirection: 'column', gap: 34, opacity: fade }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Chip size={26}>{b.jp} · {b.en}</Chip>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            {Array.from({ length: seg.total ?? 0 }, (_, i) => (
              <span key={i} style={{ width: 9, height: 9, borderRadius: 5, background: i < (seg.index ?? 0) ? '#a5b4fc' : i === seg.index ? '#fcd34d' : 'rgba(255,255,255,0.18)' }} />
            ))}
            <span style={{ fontSize: 26, fontWeight: 700, marginLeft: 12, whiteSpace: 'nowrap' }}>{(seg.index ?? 0) + 1} / {seg.total}</span>
          </div>
        </div>
        <WordCard seg={seg} />
        <WordLines seg={seg} ms={ms} size={48} en={30} />
      </div>
    </>
  )
}

function Quiz({ seg, of }: { seg: Segment; of: number }) {
  const { ms, global } = useClock(seg)
  const [ask, reveal] = seg.lines
  // Live in the app the tiles are buttons: picking one reveals the answer
  // straight away, with a wrong pick marked.
  const { answers, onAnswer } = useInteraction()
  const picked = answers?.[seg.n ?? 0]
  const revealed = ms >= reveal.at || picked !== undefined
  const thinkStart = ask.at + ask.durationMs
  const left = interpolate(ms, [thinkStart, reveal.at], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const secs = Math.ceil(((reveal.at - ms) / 1000))
  const pop = usePop(2)
  return (
    <>
      <Picture scene="office" frame={global} shade={0.62} />
      <div style={{ position: 'absolute', left: 160, right: 160, top: 70, opacity: pop }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Chip size={30} color="#fcd34d" text={INDIGO}>第{seg.n}問 · Q{seg.n} / {of}</Chip>
          {!revealed && ms >= thinkStart && <span style={{ fontSize: 34, fontWeight: 800, color: '#fcd34d' }}>{secs}</span>}
        </div>
        <p style={{ fontSize: 66, fontWeight: 800, margin: '26px 0 0', lineHeight: 1.8 }}><Ruby units={seg.prompt ?? []} rt={28} /></p>
        <p style={{ fontSize: 30, margin: '4px 0 0', color: '#c7d2fe', fontStyle: 'italic' }}>{seg.promptEn}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 34 }}>
          {seg.choices?.map((c, i) => {
            const right = i === seg.answer, wrongPick = revealed && picked === i && !right
            const canPick = !!onAnswer && !revealed
            return (
              <div key={i} onClick={canPick ? () => onAnswer!(seg.n ?? 0, i) : undefined} style={{ display: 'flex', alignItems: 'center', gap: 26, padding: '22px 34px', borderRadius: 24, fontSize: 50, fontWeight: 700,
                background: revealed && right ? '#10b981' : wrongPick ? '#e11d48' : 'rgba(255,255,255,0.1)',
                border: `3px solid ${revealed && right ? '#6ee7b7' : wrongPick ? '#fda4af' : 'rgba(255,255,255,0.22)'}`,
                opacity: revealed && !right && !wrongPick ? 0.35 : 1, cursor: canPick ? 'pointer' : undefined }}>
                <span style={{ width: 62, height: 62, borderRadius: 31, background: revealed && right ? '#fff' : 'rgba(255,255,255,0.18)', color: revealed && right ? '#047857' : 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34 }}>{revealed && right ? '✓' : wrongPick ? '✕' : i + 1}</span>
                {c}
              </div>
            )
          })}
        </div>
      </div>
      {!revealed && ms >= thinkStart && (
        <div style={{ position: 'absolute', left: 160, right: 160, top: PIC - 30, height: 10, borderRadius: 5, background: 'rgba(255,255,255,0.15)', overflow: 'hidden' }}>
          <div style={{ width: `${left * 100}%`, height: '100%', background: '#fcd34d' }} />
        </div>
      )}
      <Band seg={seg} ms={ms} />
    </>
  )
}

function Outro({ seg, words }: { seg: Segment; words: Segment[] }) {
  const { ms, global, frame } = useClock(seg)
  return (
    <>
      <Picture scene="office" frame={global} shade={0.6} />
      <div style={{ position: 'absolute', left: 120, right: 120, top: 70, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
        {words.map((w, i) => {
          const p = interpolate(frame - i * 2, [0, 10], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
          return (
            <div key={i} style={{ opacity: p, transform: `translateY(${(1 - p) * 20}px)`, background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.2)',
              borderRadius: 18, padding: '10px 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 20, color: '#c7d2fe', minHeight: 26 }}>{w.reading}</div>
              <div style={{ fontSize: 40, fontWeight: 800, whiteSpace: 'nowrap' }}>{w.word}</div>
            </div>
          )
        })}
      </div>
      <Band seg={seg} ms={ms} />
    </>
  )
}

/** `voices: false` renders the sound bed alone, for the app's mix (export-app.ts). */
export const Episode = ({ ep, sound = 'off', voices = true, bg = 'svg', bgSrc }: { ep: Ep & { durationMs: number }; sound?: SoundMode; voices?: boolean; bg?: BgMode; bgSrc?: BgSrc }) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const f = (ms: number) => Math.round((ms / 1000) * fps)
  const words = ep.segments.filter(s => s.type === 'word')
  const quizzes = ep.segments.filter(s => s.type === 'quiz').length
  const count = (block?: string) => block === 'quiz' ? quizzes : words.filter(w => w.block === block).length
  return (
    <AbsoluteFill style={{ background: INDIGO, fontFamily: FONT, color: 'white' }}>
      {bg === 'video' && <BgTrack ep={ep} src={bgSrc} />}
      <BgContext.Provider value={bg}>
      <ScreenTextContext.Provider value={ep.screen ?? DEFAULT_SCREEN}>
      {ep.segments.map((s, i) => (
        <Sequence key={i} from={f(s.at)} durationInFrames={f(s.dur)}>
          {s.type === 'intro' && <Intro seg={s} ep={ep} />}
          {s.type === 'scene' && <Scene seg={s} />}
          {s.type === 'bridge' && <Bridge seg={s} ep={ep} count={count(s.block)} />}
          {s.type === 'word' && <Word seg={s} ep={ep} />}
          {s.type === 'quiz' && <Quiz seg={s} of={quizzes} />}
          {s.type === 'outro' && <Outro seg={s} words={words} />}
        </Sequence>
      ))}
      </ScreenTextContext.Provider>
      </BgContext.Provider>
      {voices && <Voices ep={ep} />}
      <SoundLayer ep={ep} mode={sound} />
      <div style={{ position: 'absolute', left: 0, bottom: 0, height: 6, width: `${(frame / f(ep.durationMs)) * 100}%`, background: '#fcd34d' }} />
    </AbsoluteFill>
  )
}
