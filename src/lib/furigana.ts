import { FURIGANA_MAP, FURIGANA_MAP_N2 } from './vocab'

// Combined lookup across both levels
const COMBINED_MAP: Record<string, string> = { ...FURIGANA_MAP, ...FURIGANA_MAP_N2 }

// All known kanji words sorted longest-first to prevent partial matches
const KNOWN_WORDS = Object.keys(COMBINED_MAP).sort((a, b) => b.length - a.length)

export type Segment = { text: string; reading?: string }

/**
 * Splits a Japanese sentence into segments. Segments with a known reading
 * get a `reading` property so they can be rendered as <ruby> tags.
 */
export function annotate(sentence: string): Segment[] {
  const segments: Segment[] = []
  let i = 0

  while (i < sentence.length) {
    let matched = false

    for (const word of KNOWN_WORDS) {
      if (sentence.startsWith(word, i)) {
        segments.push({ text: word, reading: COMBINED_MAP[word] })
        i += word.length
        matched = true
        break
      }
    }

    if (!matched) {
      // Append to last plain segment or start a new one
      const last = segments[segments.length - 1]
      if (last && !last.reading) {
        last.text += sentence[i]
      } else {
        segments.push({ text: sentence[i] })
      }
      i++
    }
  }

  return segments
}
