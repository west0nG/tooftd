import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset URLs so JS/CSS load when the site is served from a subfolder (FTP / shared hosting).
  base: './',
})
