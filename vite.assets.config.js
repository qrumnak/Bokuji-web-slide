import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config.js';

export default mergeConfig(
  baseConfig,
  defineConfig({
    // The supplied originals include uppercase extensions. Register those files as
    // static assets so Vite never parses their binary data as JavaScript.
    assetsInclude: ['**/*.PNG', '**/*.JPG'],
  }),
);
