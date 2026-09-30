import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'video']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    // Japanese content banks use full-width spaces (U+3000) as authentic
    // indentation inside notice- and form-style reading passages.
    files: ['src/lib/reading.ts', 'src/lib/grammar.ts'],
    rules: {
      'no-irregular-whitespace': ['error', { skipStrings: true, skipTemplates: true }],
    },
  },
])
