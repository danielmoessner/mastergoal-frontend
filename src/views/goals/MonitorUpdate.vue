<template>
  <BackendBox v-if="monitor">
    <GoalsGoalBreadcrumb :item="monitor">
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink text="Edit"></BreadcrumbLink>
    </GoalsGoalBreadcrumb>
    <GeneralBox
      :overflow="false"
      class="col-span-2 lg:col-span-3 xl:col-span-3"
    >
      <DynamicForm
        action="goals/patchMonitor"
        success="Monitor saved"
        submit="Save"
        :initial="monitor"
        :fields="$store.getters['goals/monitorFormFields']"
      />
    </GeneralBox>
  </BackendBox>
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
