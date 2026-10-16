/**
 * Render the flashcard word pictures to SVG files for the app.
 *
 *   npx tsx scripts/render-word-art.tsx 1-1 [1-2 …]     (from video/)
 *
 * Writes ../public/art/words/bjt-<ch>-<sec>/<NN>.svg, NN being the word's
 * position in its section (01–25), and merges the entries into
 * ../public/art/words/manifest.json: { "<wordClean>": "bjt-1-1/01.svg" }.
 * Fails if a section word has no scene, or a scene names no section word.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderToStaticMarkup } from 'react-dom/server'
import { resetIds } from '../src/art/words/kit'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const OUT = join(ROOT, 'public', 'art', 'words')
type Word = { chapter: number; section: number; word: string }
const vocab: Word[] = JSON.parse(readFileSync(join(ROOT, 'public', 'bjt_vocab.json'), 'utf8'))
// Same as loadVocab()'s wordClean.
const clean = (w: string) => w.replace(/＜する＞/g, '').replace(/<[^>]*>/g, '').trim()

const manifestPath = join(OUT, 'manifest.json')
const manifest: Record<string, string> = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {}

for (const id of process.argv.slice(2)) {
  const [ch, sec] = id.split('-').map(Number)
  const { SCENES } = await import(`../src/art/words/bjt-${ch}-${sec}.tsx`) as { SCENES: Record<string, () => unknown> }
  const words = vocab.filter(w => w.chapter === ch && w.section === sec).map(w => clean(w.word))
  const missing = words.filter(w => !SCENES[w]), extra = Object.keys(SCENES).filter(w => !words.includes(w))
  if (missing.length || extra.length) throw new Error(`${id}: no scene for ${missing.join(' ') || '-'}; not in section: ${extra.join(' ') || '-'}`)
  const dir = join(OUT, `bjt-${id}`)
  mkdirSync(dir, { recursive: true })
  words.forEach((w, i) => {
    resetIds()
    const file = `${String(i + 1).padStart(2, '0')}.svg`
    writeFileSync(join(dir, file), renderToStaticMarkup(SCENES[w]() as never) + '\n')
    manifest[w] = `bjt-${id}/${file}`
  })
  console.log(`${id}: ${words.length} pictures -> public/art/words/bjt-${id}/`)
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 0).replace(/,"/g, ',\n"') + '\n')
