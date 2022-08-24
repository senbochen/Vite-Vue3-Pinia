const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home/index.vue'),
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import('@/pages/Car/index.vue'),
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/pages/Product/index.vue'),
  },
]

export default routes
