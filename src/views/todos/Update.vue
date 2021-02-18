<template>
  <backend-box>
    <todos-todo-breadcrumb :todo="todo" :todoListUrl="todoListUrl">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        v-bind:link="`/t/list/todos/${todo.id}/edit/`"
      ></breadcrumb-link>
    </todos-todo-breadcrumb>
    <detail-grid>
      <general-box
        v-bind:overflow="false"
        class="col-span-2 md:col-span-3 xl:col-span-4"
      >
        <dynamic-form :form="form" action="todos/updateTodo" />
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import GeneralBox from "../../components/GeneralBox.vue";
import TodosTodoBreadcrumb from "../../components/TodosTodoBreadcrumb.vue";
import DynamicForm from "../../components/DynamicForm.vue";

export default {
  name: "TodosTodoEdit",
  components: {
    GeneralBox,
    BackendBox,
    TodosTodoBreadcrumb,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
    DynamicForm,
  },
  computed: {
    todo() {
      return this.$store.getters["todos/todo"](this.$route.params.id);
    },
    todoListUrl() {
      return this.$store.getters["todos/todoListUrl"](this.todo);
    },
    form() {
      return {
        fields: this.$store.getters["todos/todoFormFields"](this.todo.type),
        submit: "Save",
        success: "Todo changed",
        initial: this.todo,
      };
    },
  },
};
</script>
