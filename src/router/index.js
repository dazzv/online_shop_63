import { createRouter, createWebHistory } from 'vue-router'

import vCatalog from '../components/v-catalog.vue'
import vCart from '../components/v-cart.vue'
import vPopup from '../components/v-popup.vue'

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: vCatalog
  },
  {
    path: '/cart',
    name: 'Cart',
    component: vCart
  },
  {
    path: '/cart/order',
    name: 'cartPopup',
    component: vPopup,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
