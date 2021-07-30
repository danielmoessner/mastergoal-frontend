import Dashboard from "../views/story/Dashboard.vue";
import Detail from "../views/story/Detail.vue";

export default [
  {
    path: "/s/dashboard/",
    component: Dashboard,
    name: "story-dashboard",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/s/:id/",
    component: Detail,
    name: "story-detail",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
