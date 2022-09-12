import { sveltekit } from '@sveltejs/kit/vite';
import wasm from "vite-plugin-wasm";
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), wasm()],
  build: {
    target: 'esnext'
  },
  resolve: {
    alias: {
      // these are the aliases and paths to them
      '$components': path.resolve('./src/lib/components'),
      '$service': path.resolve('./src/service'),
      // '$lib': path.resolve('./src/lib'),
      '$utils': path.resolve('./src/lib/utils'),
      '$monero': path.resolve('./static/monero-javascript')
    }
  },
  optimizeDeps: {
    exclude: ['monero-javascript']
  }
};

export default config;
