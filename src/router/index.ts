import { createRouter, createWebHistory } from 'vue-router'
import routes from './config'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
