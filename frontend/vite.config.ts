import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
server: {
    proxy: {
      '/csv': 'http://localhost:5001',
    },
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173, 
  }
})
