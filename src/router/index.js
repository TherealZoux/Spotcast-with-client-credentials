import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import('@/views/DashboardView.vue'),

    },
    {
      path: "/show/:id",
      component: () => import("@/views/showView.vue"),
    },
  ],
  linkActiveClass: 'active-link',
});

export default router;
