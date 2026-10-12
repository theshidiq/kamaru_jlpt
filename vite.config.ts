import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

/**
 * Leave the local audio copies out of the build when audio is served from R2.
 * public/audio holds the generated MP3s so scripts can upload them, but the
 * app fetches them from VITE_AUDIO_BASE_URL. Copying them into dist made each
 * deploy ~170 MB, until Cloudflare Pages started refusing it.
 */
function dropLocalAudio(base: string | undefined): Plugin {
  let outDir = 'dist'
  return {
    name: 'drop-local-audio',
    apply: 'build',
    configResolved(c) { outDir = path.resolve(c.root, c.build.outDir) },
    closeBundle() {
      if (base) fs.rmSync(path.join(outDir, 'audio'), { recursive: true, force: true })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return {
    // Cache key for assets fetched from R2, which serves no Cache-Control
    // header. Changing per build keeps a stale manifest from hiding new audio.
    define: { __BUILD_ID__: JSON.stringify(Date.now().toString(36)) },
    plugins: [react(), dropLocalAudio(env.VITE_AUDIO_BASE_URL)],
    resolve: {
      alias: { '@': path.resolve(__dirname, './src') },
    },
    server: {
      port: 1997,
    },
  }
})
