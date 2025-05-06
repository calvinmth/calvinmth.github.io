import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import HomeView from '@/views/HomeView.vue';
import SnakeView from '@/views/SnakeView.vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

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
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/snake',
    name: 'snake',
    component: SnakeView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //Important for GitHub Pages
  routes,
});

export default router;