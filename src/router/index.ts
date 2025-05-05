import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import AboutView from '../views/AboutView.vue'; // Create this file later
import HomeView from '../views/HomeView.vue'; // Create this file later

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //Important for GitHub Pages
  routes,
});

export default router;