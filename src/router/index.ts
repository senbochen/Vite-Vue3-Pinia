import { createRouter, createWebHistory } from 'vue-router'
import routes from './config'
2
const router = createRouter({

  history: createWebHistory(),
  routes: routes,
})

export default router
