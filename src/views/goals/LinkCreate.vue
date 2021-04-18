<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/g/add" text="Add"></BreadcrumbLink>
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink link="/g/add/link" text="Link"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <GeneralBox :overflow="false">
      <DynamicForm
        action="goals/createLink"
        success="Link added"
        submit="Create"
        :fields="$store.getters['goals/linkCreateFormFields']"
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
  name: "GoalsAddLink",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
    DynamicForm,
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
  },
};
</script>
