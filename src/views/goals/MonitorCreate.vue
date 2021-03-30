<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/g/add" text="Add"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link link="/g/add/monitor" text="Monitor"></breadcrumb-link>
    </breadcrumb-navigation>
    <general-box v-bind:overflow="false">
      <dynamic-form
        action="goals/createMonitor"
        success="Monitor added"
        submit="Create"
        :fields="$store.getters['goals/monitorCreateFormFields']"
      />
    </general-box>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GeneralBox from "../../components/Box/GeneralBox.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import DynamicForm from "../../components/DynamicForm.vue";

export default {
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbDivider,
    BreadcrumbNavigation,
    BreadcrumbLink,
    DynamicForm,
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
  },
};
</script>
