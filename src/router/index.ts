const { createRouter, createWebHistory } = VueRouter;
import routes from './route';

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
