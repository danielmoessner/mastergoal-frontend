import Dashboard from "../views/achievements/Dashboard.vue";
import Create from "../views/achievements/Create.vue";
import Update from "../views/achievements/Update.vue";
import Delete from "../views/achievements/Delete.vue";

export default [
  /*
  // Main Pages 
  */
  {
    path: "/a/",
    component: Dashboard,
    name: "achievements-dashboard",
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
    name: "achievements-create",
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
    name: "achievements-update",
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
    name: "achievements-delete",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
