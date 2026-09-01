import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config.js';

export default mergeConfig(
  baseConfig,
  defineConfig({
    // Vite's default asset matcher is case-sensitive. Cover all uppercase image
    // extensions used by existing and future presentation photography.
    assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.JPEG'],
  }),
);
