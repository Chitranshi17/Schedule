import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
  plugins: [react()],
  proxy: {
    '/api': {
      target: 'https://crud-api-mlhz.onrender.com',
      changeOrigin: true,
      secure: false,
    }
  }
}
})
