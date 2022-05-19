import { createApp } from 'vue'
import App from './App.vue'
import vant from './vant'
import router from './router/index'
const app = createApp(App)

app
  .use(vant)
  .use(router)
  .mount('#app')
