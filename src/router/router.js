import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/store.js";
import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";
import Error404 from "@/components/Error404.vue";
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
  {
    path: "/signup",
    component: SignUp,
    meta: {
      requiresAuthenticationFalse: true,
    },
  },
  {
    path: "/signin",
    component: SignIn,
    meta: {
      requiresAuthenticationFalse: true,
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
        path: "/signin",
        query: { redirect: to.fullPath },
      });
    }
  }
  if (to.matched.some((record) => record.meta.requiresAuthenticationFalse)) {
    if (store.getters.isAuthenticated) {
      next({
        path: "/t/dashboard",
      });
    }
  }
  if (to.matched.some((record) => record.meta.forceRedirect)) {
    if (store.getters.isAuthenticated) {
      next({
        path: "/t/dashboard",
      });
    } else {
      next({
        path: "/signin",
      });
    }
  }
  next();
});

export default router;
