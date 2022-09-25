import { defineConfig } from "vite";
import { sveltekit } from '@sveltejs/kit/vite';
import wasm from "vite-plugin-wasm";
import copy from "rollup-plugin-copy";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import path from 'path';

/** @type {import('vite').UserConfig} */
// const config = {
export default defineConfig({
  plugins: [
    {
      ...copy({
        targets: [
          {
            src: "node_modules/monero-javascript/dist/**.{js,wasm}",
            dest: "static/",
          },
        ],
      }),
      enforce: "pre",
    },
    sveltekit(),
    wasm()
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    target: 'esnext'
  },
  resolve: {
    alias: {
      // these are the aliases and paths to them
      '$components': path.resolve('./src/lib/components'),
      '$service': path.resolve('./src/service'),
      // '$lib': path.resolve('./src/lib'),
      '$utils': path.resolve('./src/lib/utils'),
    }
  },
  optimizeDeps: {
    include: [/**"request", "request-promise"**/],
    exclude: [/**"monero-javascript",**/],
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  }
});

// export default config;
