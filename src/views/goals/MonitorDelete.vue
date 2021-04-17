<template>
  <backend-box v-if="monitor">
    <goals-goal-breadcrumb :item="monitor">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link text="Delete"></breadcrumb-link>
    </goals-goal-breadcrumb>
    <delete-box
      :object="monitor.name"
      :to="`/g/list/monitors/${monitor.id}/`"
      @click="deleteMonitor()"
    />
  </backend-box>
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
