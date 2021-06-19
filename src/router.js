import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/components/Home/Home.vue';
import Auth from '@/components/Auth/Auth.vue';
import Settings from '@/components/Settings/Settings.vue';
import NotFound from '@/components/NotFound/NotFound.vue';
import { auth } from './config/firebase';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
