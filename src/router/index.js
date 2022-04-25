import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TeamView from '../views/TeamView.vue'
import DriverView from '../views/DriverView.vue'
import BetView from '../views/BetView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/team',
    name: 'Team',
    component: TeamView
  },
  {
    path: '/driver',
    name: 'Driver',
    component: DriverView
  },
  {
    path: '/bet',
    name: 'Bet',
    component: BetView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
