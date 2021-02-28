<template>
  <backend-box v-if="monitor">
    <goals-monitor-breadcrumb :monitor="monitor">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-bind:link="'/g/list/monitors/' + monitor.id + '/delete/'"
        text="Delete"
      ></breadcrumb-link>
    </goals-monitor-breadcrumb>
    <detail-grid>
      <general-box class="col-span-2 md:col-span-3" :overflow="false">
        <div class="flex-col flex justify-start items-start">
          <p class="mb-4">
            Are you sure you want to delete '{{ monitor.name }}'?
          </p>
          <div class="flex items-end w-full justify-end">
            <navigation-button
              class="pt-2 pb-2"
              :link="'/g/list/monitors/' + $route.params.id + '/'"
              text="Cancel"
            ></navigation-button>
            <submit-button
              v-on:click.native.prevent="deleteMonitor"
              class="ml-2"
              text="Yes, delete"
            ></submit-button>
          </div>
        </div>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import NavigationButton from "../../components/NavigationButton.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import BackendBox from "../../components/BackendBox.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GeneralBox from "../../components/GeneralBox.vue";
import GoalsMonitorBreadcrumb from "../../components/GoalsMonitorBreadcrumb.vue";

export default {
  components: {
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
