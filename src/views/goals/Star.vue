<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="Starred" link="/g/starred"></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid gap-4 grid-cols-2 lg:grid-cols-3">
      <goal-item
        v-for="goal in goals"
        :key="goal.url"
        :goal="goal"
      ></goal-item>
      <strategy-item
        v-for="strategy in strategies"
        :key="strategy.url"
        :strategy="strategy"
      ></strategy-item>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GoalItem from "../../components/GoalItem.vue";
import StrategyItem from "../../components/StrategyItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BackendBox,
    BreadcrumbLink,
    BreadcrumbNavigation,
    GoalItem,
    StrategyItem,
  },
  computed: {
    ...mapGetters({
      goals: "goals/starredGoals",
      strategies: "goals/starredStrategies",
    }),
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
    this.$store.dispatch("goals/fetchStrategies");
  },
};
</script>
