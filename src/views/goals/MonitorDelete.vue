<template>
  <BackendBox v-if="monitor">
    <GoalsGoalBreadcrumb :item="monitor">
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink text="Delete"></BreadcrumbLink>
    </GoalsGoalBreadcrumb>
    <DeleteBox
      :object="monitor.name"
      :to="`/g/list/monitors/${monitor.id}/`"
      @click="deleteMonitor()"
    />
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";
import DeleteBox from "../../components/Box/Delete.vue";

export default {
  components: {
    DeleteBox,
    GoalsGoalBreadcrumb,
    BackendBox,
    BreadcrumbLink,
    BreadcrumbDivider,
  },
  computed: {
    monitor() {
      return this.$store.getters["goals/monitor"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchMonitors");
  },
  methods: {
    deleteMonitor() {
      this.$store
        .dispatch("goals/deleteMonitor", this.monitor.url)
        .then(() => this.$router.push("/g/goals/"));
    },
  },
};
</script>
