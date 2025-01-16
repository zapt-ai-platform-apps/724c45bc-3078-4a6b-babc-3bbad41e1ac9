import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    sourcemap: true
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
  optimizeDeps: {
    exclude: ['drizzle-orm']
  }
});