import Home from '@/pages/Home/index.vue'
import Car from '@/pages/Car/index.vue'
import Product from '@/pages/Product/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/car',
    name: 'Car',
    component: Car,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
]

export default routes
