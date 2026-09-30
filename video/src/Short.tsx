import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from 'remotion'
import { BLOCK_SCENE } from './art/scenes'
import { Voices } from './Episode'
import { lineAt, type Episode as Ep, type Segment } from './timeline'
import { Chip, FONT, INDIGO, Karaoke, SceneFill, SpeakerChip, useClock, WordCard, WordLines } from './ui'

/** Portrait 1080×1920 teaser: the conversation, then a couple of its words. */
function Picture({ scene, frame, speaker }: { scene: string; frame: number; speaker?: string }) {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: 1080, height: 1000, overflow: 'hidden' }}>
      <SceneFill scene={scene} frame={frame} speaker={speaker} />
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(30,27,75,0.82) 0%, rgba(30,27,75,0) 26%, rgba(30,27,75,0) 66%, ${INDIGO} 100%)` }} />
    </div>
  )
}

function SceneBeat({ seg }: { seg: Segment }) {
  const { ms, global } = useClock(seg)
  const line = lineAt(seg, ms)
  const speaking = line && ms < line.at + line.durationMs ? line.sp : undefined
  return (
    <>
      <Picture scene={seg.scene ?? 'office'} frame={global} speaker={speaking} />
      <div style={{ position: 'absolute', top: 1040, left: 70, right: 70 }}>
        {line && <><SpeakerChip line={line} size={32} /><Karaoke line={line} ms={ms} size={54} en={32} /></>}
      </div>
    </>
  )
}

function WordBeat({ seg }: { seg: Segment }) {
  const { ms, global } = useClock(seg)
  return (
    <>
      <Picture scene={BLOCK_SCENE[seg.block ?? 'keigo']} frame={global} />
      <div style={{ position: 'absolute', top: 780, left: 56, right: 56 }}><WordCard seg={seg} scale={0.9} /></div>
      <div style={{ position: 'absolute', top: 1130, left: 70, right: 70 }}><WordLines seg={seg} ms={ms} size={46} en={29} /></div>
    </>
  )
}

export const Short = ({ ep }: { ep: Ep & { durationMs: number } }) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const f = (ms: number) => Math.round((ms / 1000) * fps)
  return (
    <AbsoluteFill style={{ background: `linear-gradient(170deg, ${INDIGO} 0%, #312e81 60%, #4c1d95 100%)`, fontFamily: FONT, color: 'white' }}>
      {ep.segments.map((s, i) => (
        <Sequence key={i} from={f(s.at)} durationInFrames={f(s.dur)}>
          {s.type === 'scene' ? <SceneBeat seg={s} /> : <WordBeat seg={s} />}
        </Sequence>
      ))}
      <div style={{ position: 'absolute', top: 80, left: 70, right: 70 }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: '#c7d2fe', letterSpacing: 2 }}>華丸 ビジネス日本語 · {ep.label}</div>
        <div style={{ fontSize: 72, fontWeight: 900, marginTop: 8, textShadow: '0 4px 18px rgba(0,0,0,0.35)' }}>{ep.title}</div>
      </div>
      <div style={{ position: 'absolute', left: 70, right: 70, top: 1760, display: 'flex', justifyContent: 'center' }}>
        <Chip size={30}>全25語のレッスンは華丸で · Full lesson in Kamaru</Chip>
      </div>
      <div style={{ position: 'absolute', left: 70, right: 70, top: 1850, height: 10, borderRadius: 5, background: 'rgba(255,255,255,0.18)', overflow: 'hidden' }}>
        <div style={{ width: `${(frame / f(ep.durationMs)) * 100}%`, height: '100%', background: '#fcd34d' }} />
      </div>
      <Voices ep={ep} />
    </AbsoluteFill>
  )
}
