import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Vite's built-in asset matcher is case-sensitive. The supplied originals use
  // uppercase .PNG/.JPG extensions, so explicitly treat them as static assets.
  assetsInclude: ['**/*.PNG', '**/*.JPG'],
  plugins: [react()],
});
