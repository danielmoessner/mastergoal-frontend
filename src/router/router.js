import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/store.js";
import Error404 from "@/views/Error404.vue";
import usersRoutes from "@/router/users.js";
import todosRoutes from "@/router/todos.js";
import goalsRoutes from "@/router/goals.js";

store.dispatch("autoLogin");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: {
      requiresAuthenticationTrue: false,
      forceRedirect: true,
    },
  },
  ...todosRoutes,
  ...usersRoutes,
  ...goalsRoutes,
  {
    path: "*",
    component: Error404,
  },
];

const router = new VueRouter({ mode: "history", routes });

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuthenticationTrue)) {
    if (!store.getters.isAuthenticated) {
      next({
        path: "/signin/",
        query: { redirect: to.fullPath },
      });
    }
  }
  if (to.matched.some((record) => record.meta.requiresAuthenticationFalse)) {
    if (store.getters.isAuthenticated) {
      next({
        path: "/t/dashboard/",
      });
    }
  }
  if (to.matched.some((record) => record.meta.forceRedirect)) {
    if (store.getters.isAuthenticated) {
      next({
        path: "/t/dashboard/",
      });
    } else {
      next({
        path: "/signin/",
      });
    }
  }
  next();
});

export default router;
