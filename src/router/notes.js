import Dashboard from "../views/notes/Dashboard.vue";
import Detail from "../views/notes/Detail.vue";
import Update from "../views/notes/Update.vue";
import Delete from "../views/notes/Delete.vue";

export default [
  {
    path: "/n/",
    component: Dashboard,
    name: "notes-dashboard",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/n/:id/",
    component: Detail,
    name: "notes-detail",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/n/:id/edit/",
    component: Update,
    name: "notes-update",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/n/:id/delete/",
    name: "notes-delete",
    component: Delete,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
