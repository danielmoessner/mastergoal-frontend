<template>
  <backend-box v-if="strategy">
    <goals-goal-breadcrumb :item="strategy">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link text="Delete"></breadcrumb-link>
    </goals-goal-breadcrumb>
    <general-box
      :overflow="false"
      class="col-span-2 lg:col-span-3 xl:col-span-3"
    >
      <dynamic-form
        action="goals/patchStrategy"
        success="Strategy saved"
        submit="Save"
        :initial="strategy"
        :fields="$store.getters['goals/strategyFormFields']"
      />
    </general-box>
  </backend-box>
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
