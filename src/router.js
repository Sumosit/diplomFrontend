import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue'),
      children: [
        {
          path: '/admin/test',
          component: () => import('./views/TestAdmin'),
        },
        {
          path: '/admin/salaries/give',
          component: () => import('./views/AdminGiveSalaries'),
        }
      ]
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue'),
      children: [
        {
          path: '/moderator/test',
          component: () => import('./views/TestModerator'),
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue'),
      children: [
        {
          path: '/user/test',
          component: () => import('./views/TestUser'),
        },
        {
          path: '/user/salaries',
          component: () => import('./views/UserSalaries'),
        },
        {
          path: '/user/storage',
          component: () => import('./views/UserStorage')
        }
      ]
    }
  ]
});