import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ Fix for Render
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  }
})

