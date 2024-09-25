import Path, { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer(), tailwind()]
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      find: '@',
      replacement: resolve('browser'),
      '@/components': Path.resolve(__dirname, 'browser/components'),
      '@/lib': Path.resolve(__dirname, 'browser/lib'),
      '@/api': Path.resolve(__dirname, 'browser/api'),
    }
  },
})
