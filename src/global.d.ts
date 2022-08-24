import { createPinia, setMapStoreSuffix } from 'pinia'
import http from '@/serve/index'
import DefineOptions from 'unplugin-vue-define-options/vite'
import CButtton from '@/src/components/Button/index.vue'
declare module 'pinia' {
  export interface MapStoresCustomization {
    // set it to the same value as above
    suffix: ''
  }
}

declare module 'DefineOptions'

declare module 'http'

declare module 'CButtton'
