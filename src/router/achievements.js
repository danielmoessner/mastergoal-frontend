import Dashboard from "../views/achievements/Dashboard.vue";

export default [
  /*
    // Main Pages 
    */
  {
    path: "/a/dashboard/",
    component: Dashboard,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
