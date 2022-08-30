import { createPinia, setMapStoreSuffix } from 'pinia'
declare module 'pinia' {
  export interface MapStoresCustomization {
    // set it to the same value as above
    suffix: ''
  }
}
