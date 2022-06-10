import { defineConfig } from 'vite';
import { resolve } from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [
    vueJsx()
  ],
  resolve: {
    alias: {
      // 别名
      '@': resolve(__dirname, 'src'),

      'vue$': 'https://cdn.staticfile.org/vue/3.2.37/vue.esm-browser.js'
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      external: ['vue', 'vue-router', 'pinia', '@vueuse', 'naive-ui'
        // './node_modules/vue/dist/vue',
        // './node_modules/vue-router/dist/vue-router',
        // './node_modules/pinia/dist/pinia',
        // './node_modules/@vueuse/core/index',
        // './node_modules/naive-ui/es/index'
      ]
    }
  }
});
