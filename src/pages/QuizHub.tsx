import { useNavigate } from 'react-router-dom'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useProgress } from '@/hooks/useProgress'

export function QuizHub() {
  const navigate = useNavigate()
  const { recentAttempts } = useProgress()

  const lastScore = (type: string) => {
    const a = recentAttempts.find(x => x.quiz_type === type)
    if (!a) return null
    return Math.round((a.score / a.total_questions) * 100)
  }

  const cards = [
    {
      to: '/quiz/vocab',
      title: 'Vocabulary Quiz',
      subtitle: 'Mondai 1–5 format',
      description: 'Reading, meaning, and usage questions',
      emoji: '📝',
      color: 'from-indigo-500 to-blue-500',
      type: 'vocab',
    },
    {
      to: '/quiz/grammar',
      title: 'Grammar Quiz',
      subtitle: 'Mondai 1–3 format',
      description: '40 N4 grammar patterns',
      emoji: '✏️',
      color: 'from-purple-500 to-pink-500',
      type: 'grammar',
    },
    {
      to: '/reading',
      title: 'Reading Practice',
      subtitle: 'Short / Medium / Info search',
      description: '15 reading passages',
      emoji: '📖',
      color: 'from-emerald-500 to-teal-500',
      type: 'reading',
    },
    {
      to: '/mock-exam',
      title: 'Mock Exam',
      subtitle: 'Exam format',
      description: '25 vocab + 20 grammar + 13 reading = 58 questions',
      emoji: '🎯',
      color: 'from-orange-500 to-red-500',
      type: 'mock',
    },
  ]

  return (
    <PageWrapper>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">Quiz</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">Choose a category to practice</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {cards.map(card => {
          const score = lastScore(card.type)
          return (
            <button
              key={card.to}
              onClick={() => navigate(card.to)}
              className="text-left bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-indigo-300 transition-all p-5 min-h-[100px] flex gap-4 items-start md:block"
            >
              <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} md:mb-3`}>
                <span className="text-2xl">{card.emoji}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white text-base">{card.title}</h3>
                <p className="text-xs text-indigo-500 dark:text-indigo-400 mb-1">{card.subtitle}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{card.description}</p>
                {score !== null && (
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    score >= 67 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    Last: {score}%
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </PageWrapper>
  )
}
