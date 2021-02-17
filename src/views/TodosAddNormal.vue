<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/t/add" text="Add"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        link="/t/add/normal-todo"
        text="Normal-Todo"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box v-bind:overflow="false">
        <dynamic-form :action="'todos/createNormalTodo'" :form="form" />
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "../components/BackendBox.vue";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import GeneralBox from "../components/GeneralBox.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import DynamicForm from "../components/DynamicForm.vue";

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
  data() {
    return {
      form: {
        fields: {
          name: {
            type: "text",
            label: "Name",
            name: "name",
            as: "input",
          },
          activate: {
            type: "datetime-local",
            name: "activate",
            as: "input",
            label: "Activate",
          },
          deadline: {
            type: "datetime-local",
            name: "deadline",
            as: "input",
            label: "Deadline",
          },
          notes: {
            name: "notes",
            as: "textarea",
            label: "Notes",
          },
        },
        values: {},
        success: "Todo added",
        submit: "Add",
      },
    };
  },
};
</script>
