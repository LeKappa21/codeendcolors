import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import Contatti from '../pages/Contatti.vue' 
import Project from '../pages/Project.vue'
import About from '../pages/about.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contatti', name: 'Contatti',
     component: Contatti },
     {path:'/project', name: 'Project', component:Project},
     { path: '/about', name: 'About', component: About }, // nuova route
]

const router = createRouter({
  history: createWebHistory('/codeendcolors/'),
  routes,
})

export default router
