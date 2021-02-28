<template>
  <breadcrumb-navigation>
    <breadcrumb-link text="List" link="/t/list"></breadcrumb-link>
    <breadcrumb-divider></breadcrumb-divider>
    <breadcrumb-link
      v-bind:text="breadcrumbText"
      v-bind:link="todoListUrl"
    ></breadcrumb-link>
    <breadcrumb-divider></breadcrumb-divider>
    <breadcrumb-link
      v-bind:text="todo.name"
      v-bind:link="'/t/list/todos/' + todo.id"
    ></breadcrumb-link>
    <slot></slot>
  </breadcrumb-navigation>
</template>

<script>
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";

export default {
  name: "TodosTodoBreadcrumb",
  components: {
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
  },
  props: {
    todo: {
      type: [Object, Boolean],
      required: true,
    },
    todoListUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    breadcrumbText() {
      if (!this.todo || !this.todo.type) return "";
      switch (this.todo.type) {
        case "NORMAL":
          return "Normal-Todos";
        case "REPETITIVE":
          return "Repetitive-Todos";
        case "NEVER_ENDING":
          return "Never-Ending-Todos";
        case "PIPELINE":
          return "Pipeline-Todos";
      }
      return "";
    },
  },
};
</script>
