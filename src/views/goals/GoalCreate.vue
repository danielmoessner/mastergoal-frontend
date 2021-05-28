<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/g/add" text="Add"></BreadcrumbLink>
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink link="/g/add/goal" text="Goal"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <GeneralBox>
      <DynamicForm
        action="goals/createGoal"
        success="Goal added"
        submit="Create"
        :fields="$store.getters['goals/goalCreateFormFields']"
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
