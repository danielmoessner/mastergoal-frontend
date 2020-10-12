<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/g/list" text="List"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link link="/g/list/goals" text="Goals"></breadcrumb-link>
    </breadcrumb-navigation>
    <goal-table v-bind:goals="goals"></goal-table>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import GoalTable from "@/components/GoalTable.vue";
import axios from "@/plugins/backendAxios.js";
import BreadcrumbDivider from '@/components/BreadcrumbDivider.vue';

export default {
  name: "GoalsListGoal",
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    GoalTable,
    BreadcrumbDivider
  },
  data() {
    return {
      goals: [],
    };
  },
  mounted() {
    axios.get("/g/api/goals/").then((response) => (this.goals = response.data));
  },
};
</script>
