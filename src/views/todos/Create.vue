<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/t/add" text="Add"></BreadcrumbLink>
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink
        :link="`/t/add/${$route.params.type}`"
        :text="breadcrumbText"
      ></BreadcrumbLink>
    </BreadcrumbNavigation>
    <GeneralBox :overflow="false">
      <DynamicForm
        :action="action"
        :fields="fields"
        success="Todo added"
        submit="Add"
      />
    </GeneralBox>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GeneralBox from "../../components/Box/General.vue";
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
      return "null";
    },
    fields() {
      return this.$store.getters["todos/todoFormFields"](
        this.$route.params.type,
      ).filter((field) => field.create);
    },
  },
  mounted() {
    this.$store.dispatch("todos/fetchTodos");
    if (this.type === "null") this.$router.push("/404");
  },
};
</script>
