import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "home",
      component: Dashboard,
    },
    {
      path: "/in-session",
      name: "session",
      component: () => import("../views/InSession.vue"),
    },
    {
      path: "/tools",
      name: "tools",
      component: () => import("../views/ToolMarketPlace.vue"),
    },
    {
      path: "/clients",
      name: "clients view",
      component: () => import("../views/ClientsView.vue"),
    },
  ],
});

export default router;
