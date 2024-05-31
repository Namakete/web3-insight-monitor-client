import NoFoundView from '@/views/NoFoundView.vue';
import TransactionsView from '@/views/TransactionsView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Transactions',
      component: TransactionsView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NoFoundView,
    },
  ],
});

export default router;
