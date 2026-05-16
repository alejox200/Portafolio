import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portafolio/', // Ruta base correcta para GitHub Pages
  build: {
    outDir: 'docs' // Cambiamos 'dist' por 'docs' para GitHub Pages
  }
})
