import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Tracker from '@/components/tracker.vue';
import NotFound from '@/components/notFound.vue';
import Settings from '@/components/settings.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/tracker',
      name: 'Tracker',
      component: Tracker,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
    },
  ],
});
