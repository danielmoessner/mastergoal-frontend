<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/t/add" text="Add"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        :link="`/t/add/${$route.params.type}`"
        :text="breadcrumbText"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box v-bind:overflow="false">
        <dynamic-form
          :action="action"
          :fields="fields"
          success="Todo added"
          submit="Add"
        />
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GeneralBox from "../../components/GeneralBox.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import DynamicForm from "../../components/DynamicForm.vue";

export default {
  name: "TodosAddNormal",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
    DynamicForm,
  },
  computed: {
    breadcrumbText() {
      return this.$route.params.type
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join("-");
    },
    action() {
      switch (this.$route.params.type) {
        case "normal-todo":
          return "todos/createNormalTodo";
        case "never-ending-todo":
          return "todos/createNeverEndingTodo";
        case "repetitive-todo":
          return "todos/createRepetitiveTodo";
        case "pipeline-todo":
          return "todos/createPipelineTodo";
      }
      this.$router.push("/404");
    },
    fields() {
      return this.$store.getters["todos/todoFormFields"](
        this.$route.params.type
      ).filter((field) => field.create);
    },
  },
  mounted() {
    this.$store.dispatch("todos/fetchTodos");
  },
};
</script>
