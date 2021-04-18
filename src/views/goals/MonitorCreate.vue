<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/g/add" text="Add"></BreadcrumbLink>
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink link="/g/add/monitor" text="Monitor"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <GeneralBox :overflow="false">
      <DynamicForm
        action="goals/createMonitor"
        success="Monitor added"
        submit="Create"
        :fields="$store.getters['goals/monitorCreateFormFields']"
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
