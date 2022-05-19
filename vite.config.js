// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy' //要想为传统浏览器提供支持，
import vitePluginImp from 'vite-plugin-imp'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import viteCompression from 'vite-plugin-compression'
import importDynamicModule from 'vite-plugin-dynamic-import-module'
import dynamicImport from 'vite-plugin-dynamic-import'


const isProduction = process.env.NODE_ENV === 'production'





export default defineConfig({
  base: isProduction ? './' : '',
  server: {
    host: '10.210.12.17',
    port: '9000',
    https: true,
    proxy: {
      "/kfang": {
        target: "http://git.kfang.com/",
        changeOrigin: true
      },
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
    vitePluginImp({//组件按需导入
      libList: [{
        libName: 'vant',
        style (name) {
          return `vant/es/${name}/index`;
        }
      }]
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    viteCompression(),
    importDynamicModule(),
    dynamicImport()
  ]
})
