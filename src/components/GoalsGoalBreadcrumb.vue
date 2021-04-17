<template>
  <breadcrumb-navigation>
    <div
      v-for="mastergoal in mastergoals"
      :key="mastergoal.url"
      class="flex flex-row items-center"
    >
      <breadcrumb-link
        :text="mastergoal.name"
        :link="`/g/list/goals/${mastergoal.id}/`"
      ></breadcrumb-link>
      <breadcrumb-divider />
    </div>
    <breadcrumb-link :text="name" :link="link"></breadcrumb-link>
    <slot></slot>
  </breadcrumb-navigation>
</template>

<script>
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";

export default {
  components: {
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    mastergoals() {
      if (this.item.url.includes("goals"))
        return this.getGoalMastergoals(this.item);
      if (this.item.url.includes("strategies"))
        return this.getStrategyMastergoals(this.item);
      if (this.item.url.includes("monitors"))
        return this.getMonitorMastergoals(this.item);
      if (this.item.url.includes("links"))
        return this.getLinkMastergoals(this.item);

      return [];
    },
    link() {
      if (this.$slots.default) {
        if (this.item.url.includes("goals"))
          return `/g/list/goals/${this.item.id}/`;
        if (this.item.url.includes("strategies"))
          return `/g/list/strategies/${this.item.id}/`;
        if (this.item.url.includes("monitors"))
          return `/g/list/monitors/${this.item.id}/`;
        if (this.item.url.includes("links"))
          return `/g/list/links/${this.item.id}/`;
      }
      return "";
    },
    name() {
      return this.item.name || "Link";
    },
  },
  methods: {
    getGoalMastergoals(goalItem) {
      const goals = this.$store.getters["goals/goalMastergoals"](goalItem);
      if (goals.length > 0) {
        const masterGoal = goals[0];
        const masterGoals = this.getGoalMastergoals(masterGoal);
        masterGoals.push(masterGoal);
        return masterGoals;
      }
      return [];
    },
    getStrategyMastergoals(strategyItem) {
      const goal = this.$store.getters["goals/goal"](strategyItem.goal);
      const goals = this.getGoalMastergoals(goal);
      goals.push(goal);
      return goals;
    },
    getMonitorMastergoals(monitorItem) {
      const goal = this.$store.getters["goals/goal"](monitorItem.goal);
      const goals = this.getGoalMastergoals(goal);
      goals.push(goal);
      return goals;
    },
    getLinkMastergoals(linkItem) {
      const goal = this.$store.getters["goals/goal"](linkItem.master_goal);
      const goals = this.getGoalMastergoals(goal);
      goals.push(goal);
      return goals;
    },
  },
};
</script>
