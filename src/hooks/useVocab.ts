import { useEffect } from 'react'
import { useAppStore } from '@/store/useAppStore'

export function useVocab() {
  const { vocab, vocabLoaded, fetchVocab, chapters, authReady, user } = useAppStore()

  useEffect(() => {
    if (authReady && user && !vocabLoaded) fetchVocab()
  }, [authReady, user, vocabLoaded, fetchVocab])

  return { vocab, chapters, isLoading: !vocabLoaded }
}
