import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset URLs work both on localhost and under a GitHub Pages project path.
  base: './',
  plugins: [react()],
});
