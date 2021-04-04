<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/g/add" text="Add"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link link="/g/add/goal" text="Goal"></breadcrumb-link>
    </breadcrumb-navigation>
    <general-box :overflow="false">
      <dynamic-form
        action="goals/createGoal"
        success="Goal added"
        submit="Create"
        :fields="$store.getters['goals/goalCreateFormFields']"
      />
    </general-box>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GeneralBox from "../../components/Box/General.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import DynamicForm from "../../components/DynamicForm.vue";

export default {
  name: "GoalsAddGoal",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
    DynamicForm,
  },
};
</script>
