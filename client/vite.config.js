import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    '/': 'https://super-cyan-culottes.cyclic.app',
  },
  plugins: [react(),],
})
