import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  optimizeDeps: {
    include: ['three/examples/jsm/nodes/Nodes.js'],
  },
  build: {
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      external: [],
    }
  },
})