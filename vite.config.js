import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: 'dist', // default for Vite, safe to keep
  },
  server: {
    port: 5173, // used only for local development
  },
  base: './', // 👈 IMPORTANT for Render or GitHub Pages
})
