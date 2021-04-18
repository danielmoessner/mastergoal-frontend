<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink text="Starred" link="/g/starred"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <div class="grid gap-4 grid-cols-2 lg:grid-cols-3">
      <GoalItem v-for="goal in goals" :key="goal.url" :goal="goal"></GoalItem>
      <StrategyItem
        v-for="strategy in strategies"
        :key="strategy.url"
        :strategy="strategy"
      ></StrategyItem>
    </div>
  </BackendBox>
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
