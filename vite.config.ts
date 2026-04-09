import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5174,
    strictPort: true,
    // Allow all hosts for dev (tunnel/reverse-proxy friendly)
    // Workshop dev only — don't deploy this to prod
    allowedHosts: true,
  },
})
