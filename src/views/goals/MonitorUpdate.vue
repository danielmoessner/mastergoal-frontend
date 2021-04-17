<template>
  <backend-box v-if="monitor">
    <goals-goal-breadcrumb :item="monitor">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link text="Edit"></breadcrumb-link>
    </goals-goal-breadcrumb>
    <general-box
      :overflow="false"
      class="col-span-2 lg:col-span-3 xl:col-span-3"
    >
      <dynamic-form
        action="goals/patchMonitor"
        success="Monitor saved"
        submit="Save"
        :initial="monitor"
        :fields="$store.getters['goals/monitorFormFields']"
      />
    </general-box>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";
import GeneralBox from "../../components/Box/General.vue";
import DynamicForm from "../../components/DynamicForm.vue";

export default {
  components: {
    DynamicForm,
    GeneralBox,
    BackendBox,
    GoalsGoalBreadcrumb,
    BreadcrumbDivider,
    BreadcrumbLink,
  },
  computed: {
    monitor() {
      return this.$store.getters["goals/monitor"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
    this.$store.dispatch("goals/fetchMonitors");
  },
};
</script>
