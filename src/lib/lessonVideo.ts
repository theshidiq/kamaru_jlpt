import type { Episode as VideoEpisode } from '@video/timeline'
import type { Lesson } from '@/types/lesson'

/**
 * A lesson timeline (as served from R2) in the shape the video components
 * take: segment lines timed from their segment, not from the start.
 * Exported lessons carry each segment's `dur` and `scene` and the blocks'
 * scenes (video/scripts/export-app.ts).
 */
export function lessonToEpisode(lesson: Lesson): VideoEpisode & { durationMs: number } {
  const raw = lesson as unknown as {
    segments: (Record<string, unknown> & { at: number; dur?: number; lines: (Record<string, unknown> & { at: number })[] })[]
    blocks: VideoEpisode['blocks']
    screen?: VideoEpisode['screen']
  }
  return {
    id: lesson.id, title: lesson.title, titleEn: lesson.titleEn, label: lesson.label,
    blocks: raw.blocks, screen: raw.screen, durationMs: lesson.durationMs,
    segments: raw.segments.map((s, i) => ({
      ...s,
      dur: s.dur ?? (raw.segments[i + 1]?.at ?? lesson.durationMs) - s.at,
      lines: s.lines.map(l => ({ ...l, audio: '', at: l.at - s.at })),
    })) as unknown as VideoEpisode['segments'],
  }
}

/** True when the lesson file has what the video needs (exported after 2026-10). */
export function hasVideo(lesson: Lesson) {
  const s = (lesson as unknown as { segments: { dur?: number }[] }).segments
  return s.length > 0 && s.every(x => typeof x.dur === 'number')
}
