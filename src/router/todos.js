import TodosListNormal from "@/views/TodosListNormal.vue";
import TodosListNeverEnding from "@/views/TodosListNeverEnding.vue";
import TodosListRepetitive from "@/views/TodosListRepetitive.vue";
import TodosListPipeline from "@/views/TodosListPipeline.vue";
import TodosTodo from "@/views/TodosTodo.vue";
import TodosDashboard from "@/views/TodosDashboard.vue";
import TodosList from "@/views/TodosList.vue";
import TodosAdd from "@/views/TodosAdd.vue";
import TodosTodoEdit from '@/views/TodosTodoEdit.vue';
import TodosAddNormal from '@/views/TodosAddNormal.vue';
import TodosAddRepetitive from '@/views/TodosAddRepetitive.vue';
import TodosAddNeverEnding from '@/views/TodosAddNeverEnding.vue';
import TodosAddPipeline from '@/views/TodosAddPipeline.vue';

export default [
  {
    path: "/t/dashboard/",
    component: TodosDashboard,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
  ** List Pages
  */
  {
    path: "/t/list/",
    component: TodosList,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/list/normal-todos/",
    component: TodosListNormal,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/list/never-ending-todos/",
    component: TodosListNeverEnding,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/list/repetitive-todos/",
    component: TodosListRepetitive,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/list/pipeline-todos/",
    component: TodosListPipeline,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
  ** Detail Pages
  */
  {
    path: "/t/list/todos/:id/",
    component: TodosTodo,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
  ** Add Pages
  */
  {
    path: "/t/add/",
    component: TodosAdd,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/add/normal-todo/",
    component: TodosAddNormal,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/add/repetitive-todo/",
    component: TodosAddRepetitive,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/add/never-ending-todo/",
    component: TodosAddNeverEnding,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/t/add/pipeline-todo/",
    component: TodosAddPipeline,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
  ** Edit Pages
  */
 {
   path: '/t/list/todos/:id/edit/',
   component: TodosTodoEdit,
   meta: {
     requiresAuthenticationTrue: true,
   }
 }
];
