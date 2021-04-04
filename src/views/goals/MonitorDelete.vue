<template>
  <backend-box v-if="monitor">
    <goals-monitor-breadcrumb :monitor="monitor">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        :link="'/g/list/monitors/' + monitor.id + '/delete/'"
        text="Delete"
      ></breadcrumb-link>
    </goals-monitor-breadcrumb>
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
import GoalsMonitorBreadcrumb from "../../components/GoalsMonitorBreadcrumb.vue";
import DeleteBox from "../../components/Box/Delete.vue";

export default {
  components: {
    DeleteBox,
    GoalsMonitorBreadcrumb,
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
