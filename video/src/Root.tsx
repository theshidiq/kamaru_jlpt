import { Composition } from 'remotion'
import raw from './data/bjt-1-1.json'
import { Episode } from './Episode'
import { Short } from './Short'
import { schedule, type Segment } from './timeline'

export const FPS = 30
type Raw = Parameters<typeof schedule>[0]

const episode = schedule(raw as unknown as Raw)
// The short: the conversation, then two of the words it turns on.
const short = schedule({
  ...(raw as unknown as Raw),
  segments: (raw as unknown as Raw).segments.filter((s: Omit<Segment, 'at' | 'dur'>) =>
    s.type === 'scene' || s.word === '申し上げる' || s.word === '伺う'),
})
const frames = (ms: number) => Math.ceil((ms / 1000) * FPS)

export const Root = () => (
  <>
    <Composition id="bjt-1-1" component={Episode} defaultProps={{ ep: episode }} durationInFrames={frames(episode.durationMs)} fps={FPS} width={1920} height={1080} />
    <Composition id="bjt-1-1-short" component={Short} defaultProps={{ ep: short }} durationInFrames={frames(short.durationMs)} fps={FPS} width={1080} height={1920} />
  </>
)
