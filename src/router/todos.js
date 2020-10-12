import TodoListNormal from "@/views/TodosListNormal.vue";
import TodoListNeverEnding from "@/views/TodosListNeverEnding.vue";
import TodoListRepetitive from "@/views/TodosListRepetitive.vue";
import TodoListPipeline from "@/views/TodosListPipeline.vue";
import TodoDetail from "@/views/TodosTodo.vue";
import TodoDashboard from "@/views/TodosDashboard.vue";
import TodoList from "@/views/TodosList.vue";
import TodoAdd from "@/views/TodosAdd.vue";

export default [
  {
    path: "/t/dashboard",
    component: TodoDashboard,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
  ** List Pages
  */
  {
    path: "/t/list",
    component: TodoList,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/list/normal-todos",
    component: TodoListNormal,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/list/never-ending-todos",
    component: TodoListNeverEnding,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/list/repetitive-todos",
    component: TodoListRepetitive,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/list/pipeline-todos",
    component: TodoListPipeline,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
  ** Detail Pages
  */
  {
    path: "/t/list/todos/:id",
    component: TodoDetail,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
  ** Add Pages
  */
  {
    path: "/t/add",
    component: TodoAdd,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
