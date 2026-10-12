/**
 * Export one BJT chapter's Read Along passages as JSON, for the lesson
 * tooling in video/ (it is Python, the passages are TypeScript).
 *
 *   npx tsx scripts/dump-bjt-passages.ts 3      -> video/out/passages-ch3.json
 *
 * Each passage: section, format, title, and its lines with the speaker, the
 * displayed text, the English, and the tokens with their furigana. A
 * lesson's reading part must use that text verbatim, so its clips are reused.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { PASSAGES_BJT } from '../src/lib/passages_bjt'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const ch = Number(process.argv[2])
if (!ch) { console.error('usage: npx tsx scripts/dump-bjt-passages.ts <chapter>'); process.exit(1) }
const out = PASSAGES_BJT.filter(p => p.chapter === ch).map(p => ({
  section: p.section, format: p.format, title: p.title,
  lines: p.sentences.map(s => ({ speaker: s.speaker ?? null, kind: s.kind ?? null, jp: s.seg.map(t => t.t).join(''), en: s.en, toks: s.seg })),
}))
if (!out.length) { console.error(`no BJT passages for chapter ${ch}: add them to scripts/build-bjt-passages.py first`); process.exit(1) }
const file = path.join(ROOT, 'video', 'out', `passages-ch${ch}.json`)
fs.mkdirSync(path.dirname(file), { recursive: true })
fs.writeFileSync(file, JSON.stringify(out, null, 1))
console.log(`wrote ${path.relative(ROOT, file)}: ` + out.map(p => `${ch}-${p.section} ${p.format} ${p.lines.length} lines`).join(' | '))
