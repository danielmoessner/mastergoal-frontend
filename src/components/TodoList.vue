<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/t/all" text="All todos"></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <todo-box url="/t/api/normal-todos/" heading="Normal todos"></todo-box>
      <todo-box
        url="/t/api/repetitive-todos/"
        heading="Repetitive todos"
      ></todo-box>
      <todo-box
        url="/t/api/never-ending-todos/"
        heading="Never ending todos"
      ></todo-box>
      <todo-box
        url="/t/api/pipeline-todos/"
        heading="Pipeline todos"
      ></todo-box>
    </div>
  </backend-box>
</template>

<script>
import TodoBox from "@/components/TodoBox.vue";
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";

export default {
  name: "TodoList",
  components: {
    BackendBox,
    TodoBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
  },
  data() {
    return {};
  },
};
</script>
