import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pages({
      // dirs: 'src/views'
    }),
    layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'LayoutBasic',
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/],
      imports: ['vue', 'vue-router', 'pinia'],
      dts: true, // Autoimport all the files that ends with d.ts
      vueTemplate: true, // Autoimport inside vue template
      eslintrc: { enabled: true },
    }),
  ],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
