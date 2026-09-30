import type { ReactNode } from 'react'

const TONE = {
  rose: 'bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300',
  indigo: 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300',
} as const

/**
 * Entry card for a listening feature: Read Along (the passage read aloud) or
 * Lesson (the full narrated class). Always shows the icon, name, length and
 * what it is, so the two are never mistaken for each other.
 */
export function ListenCard({ icon, tone, title, meta, desc, onClick }: {
  icon: ReactNode; tone: keyof typeof TONE; title: string; meta: string; desc: string; onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-start gap-3 w-full text-left bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
    >
      <span className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${TONE[tone]}`}>{icon}</span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-gray-900 dark:text-white">
          {title} <span className="font-normal text-gray-400 dark:text-gray-500">· {meta}</span>
        </span>
        <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">{desc}</span>
      </span>
    </button>
  )
}
