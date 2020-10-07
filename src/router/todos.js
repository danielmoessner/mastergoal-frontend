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
    path: "/t/todos",
    component: TodoList,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/todos/normal",
    component: TodoListNormal,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/todos/never-ending",
    component: TodoListNeverEnding,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/todos/repetitive",
    component: TodoListRepetitive,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/todos/pipeline",
    component: TodoListPipeline,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/todos/:id",
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
