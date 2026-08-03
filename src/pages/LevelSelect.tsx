import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '@/store/useAppStore'
import { LEVEL_CONFIG, DEFAULT_LEVEL } from '@/lib/vocab'
import { JLPT_LEVELS, type JlptLevel } from '@/types/user'
import { t } from '@/lib/i18n'

const LEVEL_STYLE: Record<
  JlptLevel,
  { sub: { id: string; en: string }; color: string; bg: string; border: string }
> = {
  N4: {
    sub: { id: 'Pemula · Menengah', en: 'Beginner · Intermediate' },
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-300 dark:border-emerald-700',
  },
  N3: {
    sub: { id: 'Menengah', en: 'Intermediate' },
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-300 dark:border-amber-700',
  },
  N2: {
    sub: { id: 'Menengah Atas', en: 'Upper Intermediate' },
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    border: 'border-indigo-300 dark:border-indigo-700',
  },
}

export function LevelSelect() {
  const navigate = useNavigate()
  const { setJlptLevel, user, preferredLanguage: lang } = useAppStore()
  const [selected, setSelected] = useState<JlptLevel | null>(user?.jlpt_level ?? DEFAULT_LEVEL)
  const [loading, setLoading] = useState(false)

  async function handleConfirm() {
    if (!selected) return
    setLoading(true)
    await setJlptLevel(selected)
    navigate('/language-select', { replace: true })
  }

  const levels = JLPT_LEVELS.map(level => ({
    level,
    label: `JLPT ${level}`,
    sub: LEVEL_STYLE[level].sub[lang],
    color: LEVEL_STYLE[level].color,
    bg: LEVEL_STYLE[level].bg,
    border: LEVEL_STYLE[level].border,
  }))

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('chooseLevel', lang)}</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            {t('levelSubtitle', lang)}
          </p>
        </div>

        <div className="space-y-4">
          {levels.map(({ level, label, sub, color, bg, border }) => {
            const cfg = LEVEL_CONFIG[level]
            const isSelected = selected === level
            return (
              <button
                key={level}
                onClick={() => setSelected(level)}
                className={`w-full text-left rounded-2xl border-2 p-5 transition-all ${bg} ${
                  isSelected
                    ? `${border} ring-2 ring-offset-2 ring-indigo-400 dark:ring-indigo-500`
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className={`text-xl font-bold ${color}`}>{label}</p>
                      {level === DEFAULT_LEVEL && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                          {t('recommended', lang)}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{sub}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span>{cfg.chapters} {lang === 'id' ? 'bab' : 'chapters'}</span>
                  <span>·</span>
                  <span>{cfg.totalSections} {lang === 'id' ? 'hari' : 'days'}</span>
                  <span>·</span>
                  <span>{cfg.words.toLocaleString()} words</span>
                </div>
              </button>
            )
          })}
        </div>

        <button
          onClick={handleConfirm}
          disabled={!selected || loading}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors"
        >
          {loading ? t('settingUp', lang) : (lang === 'id' ? 'Mulai belajar →' : 'Start studying →')}
        </button>
      </div>
    </div>
  )
}
