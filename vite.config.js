import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // The supplied originals use uppercase extensions. Vite's built-in asset
  // matcher is case-sensitive, so register every uppercase image variant here.
  assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.JPEG'],
  plugins: [react()],
});
