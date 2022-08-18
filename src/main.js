import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import 'element-plus/dist/index.css'
const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).mount('#app')
