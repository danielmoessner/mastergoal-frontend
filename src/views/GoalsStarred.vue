<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="Starred" link="/g/starred"></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      <goal-item
        v-bind:goal="goal"
        v-for="goal in goals"
        v-bind:key="goal.url"
      ></goal-item>
      <strategy-item
        v-bind:strategy="strategy"
        v-for="strategy in strategies"
        v-bind:key="strategy.url"
      ></strategy-item>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import axios from "@/plugins/backendAxios.js";
import GoalItem from "@/components/GoalItem.vue";
import StrategyItem from "@/components/StrategyItem.vue";

export default {
  name: "GoalsMonitor",
  components: {
    BackendBox,
    BreadcrumbLink,
    BreadcrumbNavigation,
    GoalItem,
    StrategyItem,
  },
  data() {
    return {
      strategies: [],
      goals: [],
    };
  },
  methods: {
    fetch() {
      axios
        .get("/g/api/goals/starred/")
        .then((response) => (this.goals = response.data));
      axios
        .get("/g/api/strategies/starred/")
        .then((response) => (this.strategies = response.data));
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
