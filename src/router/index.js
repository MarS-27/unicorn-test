import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from '@/pages/ProductsPage';
import AboutPage from '@/pages/AboutPage';
import ProductIdPage from '@/pages/ProductIdPage';

const routes = [
  {
    path: '/',
    component: ProductsPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/product/:id',
    component: ProductIdPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
