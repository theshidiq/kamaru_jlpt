import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // Cache key for assets fetched from R2, which serves no Cache-Control
  // header. Changing per build keeps a stale manifest from hiding new audio.
  define: { __BUILD_ID__: JSON.stringify(Date.now().toString(36)) },
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  server: {
    port: 1997,
  },
})
