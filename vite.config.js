import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        port:3000,
        target: 'http://localhost:4000',
        changeOrigin:true,
      }
    }
  }
})
