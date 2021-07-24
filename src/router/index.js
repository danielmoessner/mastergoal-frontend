import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";
import Error404 from "../views/GeneralError404.vue";
import usersRoutes from "./users.js";
import todosRoutes from "./todos.js";
import goalsRoutes from "./goals.js";
import notesRoutes from "./notes.js";
import storyRoutes from "./story.js";
import achievementsRoutes from "./achievements.js";

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
  ...notesRoutes,
  ...storyRoutes,
  ...achievementsRoutes,
  { path: "/:pathMatch(.*)*", name: "not-found", component: Error404 },
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuthenticationTrue)) {
    if (!store.getters["users/isAuthenticated"]) {
      next({
        path: "/signin/",
        query: { redirect: to.fullPath },
      });
    }
  }
  if (to.matched.some((record) => record.meta.requiresAuthenticationFalse)) {
    if (store.getters["users/isAuthenticated"]) {
      next({
        path: "/t/dashboard/",
      });
    }
  }
  if (to.matched.some((record) => record.meta.forceRedirect)) {
    if (store.getters["users/isAuthenticated"]) {
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
