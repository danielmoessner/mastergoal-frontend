import Dashboard from "../views/story/Dashboard.vue";
import Update from "../views/story/Update.vue";
import Detail from "../views/story/Detail.vue";

export default [
  {
    path: "/s/dashboard/",
    component: Dashboard,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/s/edit/",
    component: Update,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/s/:id/",
    component: Detail,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
