<template>
  <backend-box v-if="monitor">
    <goals-monitor-breadcrumb :monitor="monitor">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-bind:link="'/g/list/monitors/' + monitor.id + '/delete/'"
        text="Delete"
      ></breadcrumb-link>
    </goals-monitor-breadcrumb>
    <delete-box
      @click="deleteMonitor()"
      :object="monitor.name"
      :to="`/g/list/monitors/${monitor.id}/`"
    />
  </backend-box>
</template>

<script>
import NavigationButton from "../../components/NavigationButton.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import BackendBox from "../../components/BackendBox.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GeneralBox from "../../components/Box/General.vue";
import GoalsMonitorBreadcrumb from "../../components/GoalsMonitorBreadcrumb.vue";
import DeleteBox from "../../components/Box/Delete.vue";

export default {
  components: {
    DeleteBox,
    GoalsMonitorBreadcrumb,
    BackendBox,
    DetailGrid,
    BreadcrumbLink,
    BreadcrumbDivider,
    GeneralBox,
    NavigationButton,
    SubmitButton,
  },
  computed: {
    monitor() {
      return this.$store.getters["goals/monitor"](this.$route.params.id);
    },
  },
  methods: {
    deleteMonitor() {
      this.$store
        .dispatch("goals/deleteMonitor", this.monitor.url)
        .then(() => this.$router.push("/g/goals/"));
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchMonitors");
  },
};
</script>
