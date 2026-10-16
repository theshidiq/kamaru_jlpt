import { useEffect, useState } from 'react'

/**
 * Flashcard pictures: one small SVG scene per word, drawn by the content
 * pipeline and served with the app under /art/words/. The manifest maps a
 * word's `wordClean` to its file; a word without an entry has no picture yet.
 */
type ArtMap = Record<string, string>

const BUILD_ID = __BUILD_ID__
let cache: ArtMap | null = null
let pending: Promise<ArtMap> | null = null

function loadArt(): Promise<ArtMap> {
  pending ??= fetch(`/art/words/manifest.json?v=${BUILD_ID}`)
    .then(r => (r.ok ? r.json() : {}))
    .catch(() => ({}))
    .then((m: ArtMap) => (cache = m))
  return pending
}

/** Returns a lookup from `wordClean` to its picture URL (or undefined). */
export function useWordArt(): (word: string | undefined) => string | undefined {
  const [map, setMap] = useState<ArtMap | null>(cache)
  useEffect(() => {
    if (!map) loadArt().then(setMap)
  }, [map])
  return word => (word && map?.[word] ? `/art/words/${map[word]}` : undefined)
}

/** Fetch pictures ahead of time, so a flip shows them at once. */
export function preloadArt(urls: (string | undefined)[]) {
  for (const u of urls) if (u) new Image().src = u
}
