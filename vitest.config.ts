import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
// biome-ignore lint/correctness/noNodejsModules: <explanation>
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
})
