import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import TodoDashboard from "@/components/TodoDashboard.vue";
import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";
import TodoDetail from "@/components/TodoDetail.vue";

store.dispatch("autoLogin");

Vue.use(VueRouter);

const checkUserNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const checkUserAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/signin");
};

const routes = [
  {
    path: "/",
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next("/dashboard");
      } else {
        next("/signin");
      }
    },
  },
  {
    path: "/signup",
    component: SignUp,
    beforeEnter: checkUserNotAuthenticated,
  },
  {
    path: "/signin",
    component: SignIn,
    beforeEnter: checkUserNotAuthenticated,
  },
  {
    path: "/dashboard",
    component: TodoDashboard,
    beforeEnter: checkUserAuthenticated,
  },
  {
    path: "/todo/:id",
    component: TodoDetail,
    beforeEnter: checkUserAuthenticated,
  },
];

export default new VueRouter({ mode: "history", routes });
