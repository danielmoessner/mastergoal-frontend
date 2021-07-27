import Dashboard from "../views/achievements/Dashboard.vue";
import Create from "../views/achievements/Create.vue";
import Update from "../views/achievements/Update.vue";
import Delete from "../views/achievements/Delete.vue";

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
  /*
  // Create Pages
  */
  {
    path: "/a/create/",
    component: Create,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
  // Update Pages
  */
  {
    path: "/a/:id/update/",
    component: Update,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
  // Delete Pages
  */
  {
    path: "/a/:id/delete/",
    component: Delete,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
