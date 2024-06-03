import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const {
  pkg: { version },
  banner,
} = require('./scripts/util');


export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url)),
    }
  },
  
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'Vssue',
      fileName: 'vssue',
      formats: ['es']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue', '@vssue/utils', 'vue-i18n'
      ],
      output: {
        dir: './dist',
        banner,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.VUE_APP_VERSION': JSON.stringify(version),
  },

  plugins: [
    vue(),
  ],
});