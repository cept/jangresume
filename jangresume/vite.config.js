import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    proxy: {
      // "Setiap request yang dimulai dengan /api..."
      '/api': {
        // "...arahkan ke server backend Anda di port 5000"
        target: 'http://localhost:5000',
        
        // 'changeOrigin' diperlukan agar server backend 
        // mau menerima request dari localhost:3000 (atau port Vite Anda)
        changeOrigin: true,
        
      }
    }
  }

})
