import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Documents from './views/Documents.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true,
    },
    {
      path: '/documents',
      name: 'documents',
      component: Documents,
      props: true,
    },
  ],
});
