import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import AuthenticatedPing from '../views/AuthenticatedPing.vue';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../services/api/auth';

Vue.use(VueRouter);

const PUBLIC_PATHS = ['/', '/login'];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/ping',
    name: 'AuthenticatedPing',
    component: AuthenticatedPing,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const unAuthenticatedAndPrivatePage = (path) => (!PUBLIC_PATHS.includes(path)
    && !(ACCESS_TOKEN in window.localStorage)
    && !(REFRESH_TOKEN in window.localStorage));

router.beforeEach((to, from, next) => {
  if (unAuthenticatedAndPrivatePage(to.path)) {
    next(`/login?next=${to.path}`);
  } else {
    next();
  }
});

export default router;
