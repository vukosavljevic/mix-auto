import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AllCars from '../views/AllCars.vue'
import CarDetails from '../views/CarDetails.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'AllCars',
    component: AllCars
  },
  {
    path: '/car/:id',
    name: 'CarDetails',
    component: CarDetails
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

