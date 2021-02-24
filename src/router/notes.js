import Dashboard from "../views/notes/Dashboard.vue";
import Detail from "../views/notes/Detail.vue";
import Update from "../views/notes/Update.vue";
import Delete from "../views/notes/Delete.vue";
import Create from "../views/notes/Create.vue";

export default [
  {
    path: "/n/dashboard/",
    component: Dashboard,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/n/add/",
    component: Create,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/n/:id/",
    component: Detail,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/n/:id/edit/",
    component: Update,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/n/:id/delete/",
    component: Delete,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
