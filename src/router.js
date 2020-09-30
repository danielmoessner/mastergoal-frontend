import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/store.js";
import TodoDashboard from "@/components/TodoDashboard.vue";
import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";
import TodoDetail from "@/components/TodoDetail.vue";
import Error404 from "@/components/Error404.vue";
import TodoList from "@/components/TodoList.vue";
import TodoAdd from "@/components/TodoAdd.vue";
import SettingsPage from "@/components/SettingsPage.vue";
import SettingsGeneral from "@/components/SettingsGeneral.vue";
import SettingsTodo from "@/components/SettingsTodo.vue";
import SettingsGoal from "@/components/SettingsGoal.vue";
import SettingsUser from "@/components/SettingsUser.vue";

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
  {
    path: "/t/dashboard",
    component: TodoDashboard,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/todo/:id",
    component: TodoDetail,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/all",
    component: TodoList,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/add",
    component: TodoAdd,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings",
    component: SettingsPage,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/general-settings",
    component: SettingsGeneral,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/todo-settings",
    component: SettingsTodo,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/goal-settings",
    component: SettingsGoal,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/user-settings",
    component: SettingsUser,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
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
