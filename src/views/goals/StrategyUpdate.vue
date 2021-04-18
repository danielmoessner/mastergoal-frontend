<template>
  <BackendBox v-if="strategy">
    <GoalsGoalBreadcrumb :item="strategy">
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink text="Delete"></BreadcrumbLink>
    </GoalsGoalBreadcrumb>
    <GeneralBox
      :overflow="false"
      class="col-span-2 lg:col-span-3 xl:col-span-3"
    >
      <DynamicForm
        action="goals/patchStrategy"
        success="Strategy saved"
        submit="Save"
        :initial="strategy"
        :fields="$store.getters['goals/strategyFormFields']"
      />
    </GeneralBox>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GeneralBox from "../../components/Box/General.vue";
import DynamicForm from "../../components/DynamicForm.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";

export default {
  components: {
    GeneralBox,
    BackendBox,
    GoalsGoalBreadcrumb,
    BreadcrumbDivider,
    BreadcrumbLink,
    DynamicForm,
  },
  computed: {
    strategy() {
      return this.$store.getters["goals/strategy"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
    this.$store.dispatch("goals/fetchStrategies");
  },
};
</script>
