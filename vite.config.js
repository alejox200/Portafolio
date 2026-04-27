import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Esto soluciona la página en blanco en GitHub Pages
  build: {
    outDir: 'docs' // Cambiamos 'dist' por 'docs' para GitHub Pages
  }
})
