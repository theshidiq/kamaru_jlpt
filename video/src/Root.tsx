import { Fragment } from 'react'
import { Composition } from 'remotion'
import ep11 from './data/bjt-1-1.json'
import ep12 from './data/bjt-1-2.json'
import ep13 from './data/bjt-1-3.json'
import ep14 from './data/bjt-1-4.json'
import ep15 from './data/bjt-1-5.json'
import ep21 from './data/bjt-2-1.json'
import ep22 from './data/bjt-2-2.json'
import ep23 from './data/bjt-2-3.json'
import ep24 from './data/bjt-2-4.json'
import ep25 from './data/bjt-2-5.json'
import { Episode } from './Episode'
import { Short } from './Short'
import { schedule } from './timeline'

export const FPS = 30
type Raw = Parameters<typeof schedule>[0]

/** Every built episode. Add its data import here after build-episode.py. */
const EPISODES = [ep11, ep12, ep13, ep14, ep15, ep21, ep22, ep23, ep24, ep25] as unknown as Raw[]
const frames = (ms: number) => Math.ceil((ms / 1000) * FPS)

/**
 * ~75s of lesson 3 to judge the sound design on: the intro, the meeting's
 * first three lines, the first two words, and one quiz question.
 */
function soundSample(raw: Raw): Raw {
  const s = raw.segments
  const firstWord = s.findIndex(x => x.type === 'word')
  return {
    ...raw,
    segments: [
      s.find(x => x.type === 'intro')!,
      { ...s.find(x => x.type === 'scene')!, lines: s.find(x => x.type === 'scene')!.lines.slice(0, 3) },
      s[firstWord - 1], s[firstWord], s[firstWord + 1],
      s.find(x => x.type === 'bridge' && x.block === 'quiz')!,
      s.find(x => x.type === 'quiz')!,
    ],
  }
}
const sample = schedule(soundSample(EPISODES[2]))

export const Root = () => (
  <>
    {EPISODES.map(raw => {
      const episode = schedule(raw)
      // The short: the conversation, then the words the script picks for it.
      const short = schedule({ ...raw, segments: raw.segments.filter(s => s.type === 'scene' || (s.word && raw.short?.includes(s.word))) })
      return (
        <Fragment key={raw.id}>
          <Composition id={raw.id} component={Episode} defaultProps={{ ep: episode }} durationInFrames={frames(episode.durationMs)} fps={FPS} width={1920} height={1080} />
          <Composition id={`${raw.id}-short`} component={Short} defaultProps={{ ep: short }} durationInFrames={frames(short.durationMs)} fps={FPS} width={1080} height={1920} />
        </Fragment>
      )
    })}
    <Composition id="sound-sample-sfx" component={Episode} defaultProps={{ ep: sample, sound: 'sfx' as const }} durationInFrames={frames(sample.durationMs)} fps={FPS} width={1920} height={1080} />
    <Composition id="sound-sample-music" component={Episode} defaultProps={{ ep: sample, sound: 'music' as const }} durationInFrames={frames(sample.durationMs)} fps={FPS} width={1920} height={1080} />
  </>
)
