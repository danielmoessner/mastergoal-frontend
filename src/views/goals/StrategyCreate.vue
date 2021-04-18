<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/g/add" text="Add"></BreadcrumbLink>
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink link="/g/add/strategy" text="Strategy"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <GeneralBox :overflow="false">
      <DynamicForm
        action="goals/createStrategy"
        success="Strategy added"
        submit="Create"
        :fields="$store.getters['goals/strategyCreateFormFields']"
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
    BreadcrumbNavigation,
    BreadcrumbLink,
    DynamicForm,
    BreadcrumbDivider,
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
  },
};
</script>
