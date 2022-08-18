import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' //提供 Vue 3 单文件组件支持
import vueJsx from '@vitejs/plugin-vue-jsx' //提供 Vue 3 JSX 支持（通过 专用的 Babel 转换插件）。
import legacy from '@vitejs/plugin-legacy' //为打包后的文件提供传统浏览器兼容性支持
import svgPlugin from 'vite-plugin-svg'
import DefineOptions from 'unplugin-vue-define-options/vite' //使用组件名注册组件
import importDynamicModule from 'vite-plugin-dynamic-import-module' //支持带变量的动态导入模块。
import dynamicImport from 'vite-plugin-dynamic-import' //增强Vite 包含动态导入。
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression' //使用 gzip 或 brotli 压缩资源。

export default defineConfig({
  base: '/',
  server: {
    host: '10.210.12.17',
    port: '8080',
    https: false,
    strictPort: true,
    proxy: {
      '/web-oms': {
        target: 'https://test-omsinfra.kfang.com/',
        changeOrigin: true
      },
    },
  },

  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vueJsx(),
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    viteCompression(),
    importDynamicModule(),
    dynamicImport(),
    svgPlugin(),
    DefineOptions(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
