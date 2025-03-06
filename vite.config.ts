import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/saux-component-library/', // Set the base path for GitHub Pages
  plugins: [react()],
  server: {
    open: true,
  },
});