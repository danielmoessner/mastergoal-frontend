import TodoListNormal from "@/components/TodoListNormal.vue";
import TodoListNeverEnding from "@/components/TodoListNeverEnding.vue";
import TodoListRepetitive from "@/components/TodoListRepetitive.vue";
import TodoListPipeline from "@/components/TodoListPipeline.vue";
import TodoDetail from "@/components/TodoDetail.vue";
import TodoDashboard from "@/components/TodoDashboard.vue";
import TodoList from "@/components/TodoList.vue";
import TodoAdd from "@/components/TodoAdd.vue";

export default [
  {
    path: "/t/dashboard",
    component: TodoDashboard,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
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
  {
    path: "/t/list/todos/:id",
    component: TodoDetail,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/add",
    component: TodoAdd,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
