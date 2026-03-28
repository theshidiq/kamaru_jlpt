import { useEffect } from 'react'
import { useAppStore } from '@/store/useAppStore'

export function useVocab() {
  const { vocab, vocabLoaded, fetchVocab, chapters } = useAppStore()

  useEffect(() => {
    if (!vocabLoaded) fetchVocab()
  }, [vocabLoaded, fetchVocab])

  return { vocab, chapters, isLoading: !vocabLoaded }
}
