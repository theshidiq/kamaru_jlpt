import { Fragment } from 'react'
import { Composition } from 'remotion'
import ep11 from './data/bjt-1-1.json'
import ep12 from './data/bjt-1-2.json'
import { Episode } from './Episode'
import { Short } from './Short'
import { schedule } from './timeline'

export const FPS = 30
type Raw = Parameters<typeof schedule>[0]

/** Every built episode. Add its data import here after build-episode.py. */
const EPISODES = [ep11, ep12] as unknown as Raw[]
const frames = (ms: number) => Math.ceil((ms / 1000) * FPS)

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
  </>
)
