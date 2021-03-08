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
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/add/:type/",
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
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/list/:type/",
    component: List,
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
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
