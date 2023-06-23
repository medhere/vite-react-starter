import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import react from "@vitejs/plugin-react-swc";
import progress from 'vite-plugin-progress'
import { VitePWA } from 'vite-plugin-pwa'
import basicSsl from '@vitejs/plugin-basic-ssl'


export default defineConfig({
  plugins: [
    react(),
    progress(),
    VitePWA({
      registerType: 'autoUpdate',
      // devOptions: { enabled: true, }
    }),
    basicSsl()
  ],
  base: './',
  server: {
    host: true,
    https: true,
    open: true,
    // proxy: { '/api': 'http://localhost:8000' },
    cors: true
  },
  build: {
    outDir: 'build',
    manifest: true,
    rollupOptions: {},
  },
  preview: {
    host: true,
    https: true,
    open: true,
    // proxy: { '/api': 'http://localhost:8000' },
    cors: true
  }
})






