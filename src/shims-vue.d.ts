declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<Rcord<string, any>, Rcord<string, any>, any>
  export default component
}
