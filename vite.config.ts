import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          // Separate lucide-react into its own chunk for better caching
          icons: ['lucide-react']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['lucide-react']
  }
});
