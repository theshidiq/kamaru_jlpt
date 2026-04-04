import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '@/store/useAppStore'

const languages: Array<{
  lang: 'id' | 'en'
  label: string
  flag: string
  recommended: boolean
  color: string
  bg: string
  border: string
}> = [
  {
    lang: 'id',
    label: 'Bahasa Indonesia',
    flag: '🇮🇩',
    recommended: true,
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-300 dark:border-red-700',
  },
  {
    lang: 'en',
    label: 'English',
    flag: '🇬🇧',
    recommended: false,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-300 dark:border-blue-700',
  },
]

export function LanguageSelect() {
  const navigate = useNavigate()
  const { setLanguage, user } = useAppStore()
  const [selected, setSelected] = useState<'id' | 'en'>(user?.preferred_language ?? 'id')
  const [loading, setLoading] = useState(false)

  async function handleConfirm() {
    setLoading(true)
    await setLanguage(selected)
    navigate('/', { replace: true })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Pilih Bahasa / Choose Language
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Bahasa yang digunakan untuk arti kosakata. / Language used for vocabulary meanings.
          </p>
        </div>

        <div className="space-y-4">
          {languages.map(({ lang, label, flag, recommended, color, bg, border }) => {
            const isSelected = selected === lang
            return (
              <button
                key={lang}
                onClick={() => setSelected(lang)}
                className={`w-full text-left rounded-2xl border-2 p-5 transition-all ${bg} ${
                  isSelected
                    ? `${border} ring-2 ring-offset-2 ring-indigo-400 dark:ring-indigo-500`
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{flag}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className={`text-lg font-bold ${color}`}>{label}</p>
                        {recommended && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">
                            Direkomendasikan
                          </span>
                        )}
                      </div>
                    </div>
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
              </button>
            )
          })}
        </div>

        <button
          onClick={handleConfirm}
          disabled={loading}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors"
        >
          {loading ? 'Menyimpan...' : 'Lanjutkan →'}
        </button>
      </div>
    </div>
  )
}
