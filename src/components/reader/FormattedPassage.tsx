import type { ReactNode } from 'react'
import type { PassageFormat, PassageSentence } from '@/types/passage'

interface Props {
  format: PassageFormat
  sentences: PassageSentence[]
  /** Renders one sentence's tokens (tap-to-look-up, status colours, furigana). */
  renderTokens: (sentence: PassageSentence, index: number) => ReactNode
  showEnglish: boolean
  lang: 'id' | 'en'
}

const LABEL: Record<PassageFormat, { en: string; id: string; icon: string }> = {
  email:   { en: 'Email',        id: 'Email',          icon: '✉️' },
  letter:  { en: 'Letter',       id: 'Surat',          icon: '📨' },
  chat:    { en: 'Office chat',  id: 'Chat kantor',    icon: '💬' },
  phone:   { en: 'Phone call',   id: 'Telepon',        icon: '📞' },
  meeting: { en: 'Meeting',      id: 'Rapat',          icon: '🗣️' },
  memo:    { en: 'Report',       id: 'Laporan',        icon: '📝' },
  notice:  { en: 'Notice',       id: 'Pengumuman',     icon: '📢' },
}

/**
 * Business text layouts for BJT passages: documents (email, letter, report,
 * notice) show a header block and signature; spoken formats show who is
 * talking; chat shows bubbles. Every line still renders through the reader's
 * own token renderer, so word lookup works the same in all of them.
 */
export function FormattedPassage({ format, sentences, renderTokens, showEnglish, lang }: Props) {
  const label = LABEL[format]
  const english = (s: PassageSentence, cls = '') =>
    showEnglish && <p className={`text-sm text-gray-500 dark:text-gray-400 mt-1 ${cls}`}>{s.en}</p>

  const chip = (
    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">
      <span className="mr-1">{label.icon}</span>{label[lang]}
    </p>
  )

  if (format === 'chat') {
    // The first speaker sits on the left; everyone else on the right.
    const first = sentences.find(s => s.speaker)?.speaker
    return (
      <div>
        {chip}
        <div className="bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-xl p-4 space-y-3">
          {sentences.map((s, i) => {
            const mine = s.speaker !== first
            return (
              <div key={i} className={`flex flex-col ${mine ? 'items-end' : 'items-start'}`}>
                {s.speaker && sentences[i - 1]?.speaker !== s.speaker && (
                  <span className="text-[11px] text-gray-400 mb-1 px-1">{s.speaker}</span>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                    mine
                      ? 'bg-indigo-600 text-white rounded-br-sm'
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-sm'
                  }`}
                >
                  {/* On the indigo bubble the reader's indigo word colour would
                      vanish, so tappable words go white with a light underline. */}
                  <p className={`font-jp text-base md:text-lg leading-loose ${
                    mine ? '[&_rt]:!text-indigo-200 [&_.cursor-pointer]:!text-white [&_.cursor-pointer]:!decoration-indigo-200' : ''
                  }`}>
                    {renderTokens(s, i)}
                  </p>
                </div>
                {english(s, `max-w-[85%] px-1 ${mine ? 'text-right' : ''}`)}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (format === 'phone' || format === 'meeting') {
    const speakers = [...new Set(sentences.map(s => s.speaker).filter(Boolean))] as string[]
    const tone = ['text-indigo-600 dark:text-indigo-400', 'text-rose-600 dark:text-rose-400', 'text-emerald-600 dark:text-emerald-400']
    return (
      <div>
        {chip}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-6 shadow-sm space-y-4">
          {sentences.map((s, i) => (
            <div key={i} className="flex gap-3">
              <span className={`shrink-0 w-16 text-xs font-bold pt-2 font-jp ${tone[speakers.indexOf(s.speaker ?? '') % tone.length]}`}>
                {sentences[i - 1]?.speaker !== s.speaker ? s.speaker : ''}
              </span>
              <div className="min-w-0">
                <p className="font-jp text-base md:text-lg leading-loose text-gray-900 dark:text-gray-100">
                  {renderTokens(s, i)}
                </p>
                {english(s)}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Documents: email, letter, report, notice.
  const header = sentences.map((s, i) => ({ s, i })).filter(x => x.s.kind === 'header')
  const body = sentences.map((s, i) => ({ s, i })).filter(x => !x.s.kind)
  const sign = sentences.map((s, i) => ({ s, i })).filter(x => x.s.kind === 'signature')
  return (
    <div>
      {chip}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
        {header.length > 0 && (
          <div className="bg-gray-50 dark:bg-gray-900/40 border-b border-gray-200 dark:border-gray-700 px-5 py-3 space-y-1">
            {header.map(({ s, i }) => (
              <div key={i}>
                <p className="font-jp text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{renderTokens(s, i)}</p>
                {english(s, 'text-xs mt-0')}
              </div>
            ))}
          </div>
        )}
        <div className="px-5 md:px-7 py-5 space-y-3">
          {body.map(({ s, i }) => (
            <div key={i}>
              <p className="font-jp text-base md:text-lg leading-loose text-gray-900 dark:text-gray-100">{renderTokens(s, i)}</p>
              {english(s)}
            </div>
          ))}
          {sign.length > 0 && (
            <div className="pt-3 mt-2 border-t border-dashed border-gray-200 dark:border-gray-700 text-right space-y-0.5">
              {sign.map(({ s, i }) => (
                <div key={i}>
                  <p className="font-jp text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{renderTokens(s, i)}</p>
                  {english(s, 'text-xs mt-0')}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
