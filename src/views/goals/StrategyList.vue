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
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import StrategyTable from "../../components/StrategyTable.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    StrategyTable,
    BreadcrumbDivider,
  },
  computed: {
    ...mapGetters({
      strategies: "goals/strategies",
    }),
  },
  mounted() {
    this.$store.dispatch("goals/fetchStrategies");
  },
};
</script>
