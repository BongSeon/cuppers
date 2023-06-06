import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

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
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
      dts: true, // Autoimport all the files that ends with d.ts
      vueTemplate: true, // Autoimport inside vue template
      eslintrc: { enabled: true },
    }),
    vueI18n({
      // you need to set i18n resource including paths !
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './path/to/src/locales/**'
      ),
    }),
  ],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // find: 'vue-i18n',
      // replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
})
