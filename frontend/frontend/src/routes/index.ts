import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import Contatti from '../pages/Contatti.vue' 


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contatti', name: 'Contatti',
     component: Contatti },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
