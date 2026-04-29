import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: false, gzipSize: true, brotliSize: true }),
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Group react and react-dom together
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'vendor-react';
            }
            // Group router
            if (id.includes('react-router') || id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            // Group framer-motion
            if (id.includes('framer-motion')) {
              return 'vendor-framer-motion';
            }
            // Fallback for other node_modules
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
});
