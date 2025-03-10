import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/saux-component-library/', // Set the base path for GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
  optimizeDeps: {
    include: ['storybook-dark-mode'],
  },
});