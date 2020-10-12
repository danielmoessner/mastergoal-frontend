<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/g/list" text="List"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        link="/g/list/strategies"
        text="Strategies"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <strategy-table v-bind:strategies="strategies"></strategy-table>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import axios from "@/plugins/backendAxios.js";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";
import StrategyTable from "@/components/StrategyTable.vue";

export default {
  name: "GoalsListStrategy",
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    StrategyTable,
    BreadcrumbDivider,
  },
  data() {
    return {
      strategies: [],
    };
  },
  mounted() {
    axios
      .get("/g/api/strategies/")
      .then((response) => (this.strategies = response.data));
  },
};
</script>
