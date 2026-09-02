import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves this project below /Bokuji-web-slide/, not at the domain root.
  // An explicit base keeps the entry module, generated CSS, and imported images on
  // the same project path in the production build.
  base: '/Bokuji-web-slide/',
  assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.JPEG'],
  plugins: [react()],
});
