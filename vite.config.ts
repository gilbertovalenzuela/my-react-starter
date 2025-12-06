import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // CLAVE: Escuchar en 0.0.0.0 (no solo localhost)
    strictPort: true,
    port: 5173,
    watch: {
      usePolling: true // CLAVE: Necesario en algunos entornos WSL para el hot-reload
    }
  }
})
