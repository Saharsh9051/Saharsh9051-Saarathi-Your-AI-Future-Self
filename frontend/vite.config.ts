import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5174,         // fix port (no random change)
    strictPort: true,   // agar 5174 busy hai to error dega, dusra port nahi lega
    host: 'localhost'   // localhost pe bind karega
  }
})
