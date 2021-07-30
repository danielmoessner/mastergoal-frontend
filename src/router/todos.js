import Dashboard from "../views/todos/Dashboard.vue";
import ListDashboard from "../views/todos/ListDashboard.vue";
import CreateDashboard from "../views/todos/CreateDashboard.vue";
import Update from "../views/todos/Update.vue";
import Create from "../views/todos/Create.vue";
import List from "../views/todos/List.vue";
import Delete from "../views/todos/Delete.vue";

export default [
  {
    path: "/t/dashboard/",
    component: Dashboard,
    name: "todos-dashboard",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** Add Pages
   */
  {
    path: "/t/add/",
    component: CreateDashboard,
    name: "todos-create-dashboard",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/add/:type/",
    name: "todos-create-type",
    component: Create,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** List Pages
   */
  {
    path: "/t/list/",
    component: ListDashboard,
    name: "todos-list-dashboard",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/list/:type/",
    component: List,
    name: "todos-list-type",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** Edit Pages
   */
  {
    path: "/t/list/todos/:id/edit/",
    component: Update,
    name: "todos-update",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** Delete Pages
   */
  {
    path: "/t/list/todos/:id/delete/",
    component: Delete,
    name: "todos-delete",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
