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
    <div class="">
      <Todo v-for="todo in todos" :key="todo.url" verbose :todo="todo" />
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import Todo from "../../components/Todo/Index.vue";

export default {
  components: {
    Todo,
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
      return "null";
    },
    todos() {
      return this.$store.getters[`todos/${this.type}s`];
    },
  },
  mounted() {
    this.$store.dispatch("todos/fetchTodos");
    if (this.type === "null") this.$router.push("/404");
  },
};
</script>
