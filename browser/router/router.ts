import { createWebHistory, createRouter } from 'vue-router'

import CharacterView from '../CharacterView.vue'
import HomeView from '../HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/character', component: CharacterView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router