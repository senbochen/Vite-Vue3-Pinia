import { createPinia, setMapStoreSuffix } from 'pinia'
import http from '@/serve/index'
declare module 'pinia' {
  export interface MapStoresCustomization {
    // set it to the same value as above
    suffix: ''
  }
}
declare module 'mande'
declare module 'http'
