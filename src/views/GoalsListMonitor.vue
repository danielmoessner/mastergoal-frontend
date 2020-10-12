<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/g/list" text="List"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link link="/g/list/monitors" text="Monitors"></breadcrumb-link>
    </breadcrumb-navigation>
    <monitor-table v-bind:monitors="monitors"></monitor-table>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import axios from "@/plugins/backendAxios.js";
import BreadcrumbDivider from '@/components/BreadcrumbDivider.vue';
import MonitorTable from '@/components/MonitorTable.vue';

export default {
  name: "GoalsListMonitor",
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    MonitorTable,
    BreadcrumbDivider
  },
  data() {
    return {
      monitors: [],
    };
  },
  mounted() {
    axios.get("/g/api/monitors/").then((response) => (this.monitors = response.data));
  },
};
</script>
