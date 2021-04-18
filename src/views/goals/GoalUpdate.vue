<template>
  <BackendBox v-if="goal">
    <GoalsGoalBreadcrumb :item="goal">
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink text="Edit"></BreadcrumbLink>
    </GoalsGoalBreadcrumb>
    <GeneralBox class="col-span-2 md:col-span-3 xl:col-span-4">
      <DynamicForm
        action="goals/patchGoal"
        success="Goal saved"
        submit="Save"
        :initial="goal"
        :fields="$store.getters['goals/goalFormFields']"
      />
    </GeneralBox>
  </BackendBox>
</template>

<script>
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GeneralBox from "../../components/Box/General.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";
import DynamicForm from "../../components/DynamicForm.vue";
import BackendBox from "../../components/BackendBox.vue";

export default {
  components: {
    GoalsGoalBreadcrumb,
    BackendBox,
    GeneralBox,
    BreadcrumbDivider,
    BreadcrumbLink,
    DynamicForm,
  },
  computed: {
    goal() {
      return this.$store.getters["goals/goal"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
  },
};
</script>
