interface Window {
  google?: {
    accounts: {
      id: {
        initialize: (config: {
          client_id: string
          nonce?: string
          callback: (response: { credential: string }) => void
        }) => void
        prompt: () => void
      }
    }
  }
}
