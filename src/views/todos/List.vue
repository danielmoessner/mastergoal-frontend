<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/t/list" text="List"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        :link="`/t/list/${$route.params.type}`"
        :text="breadcrumbText"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <todo-table v-bind:todos="todos"></todo-table>
    <div>
      <Todo
        verbose
        v-for="todo in todos"
        v-bind:key="todo.url"
        v-bind:todo="todo"
      />
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import TodoTable from "../../components/TodoTable.vue";
import Todo from "../../components/Todo/Index.vue";

export default {
  name: "TodosListNormal",
  components: {
    Todo,
    TodoTable,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
  },
  computed: {
    breadcrumbText() {
      return this.$route.params.type
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join("-");
    },
    type() {
      switch (this.$route.params.type) {
        case "normal-todos":
          return "normalTodo";
        case "never-ending-todos":
          return "neverEndingTodo";
        case "repetitive-todos":
          return "repetitiveTodo";
        case "pipeline-todos":
          return "pipelineTodo";
      }
      this.$router.push("/404");
    },
    todos() {
      return this.$store.getters[`todos/${this.type}s`];
    },
  },
  mounted() {
    this.$store.dispatch("todos/fetchTodos");
  },
};
</script>
