<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/g/list" text="List"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link link="/g/list/goals" text="Goals"></breadcrumb-link>
    </breadcrumb-navigation>
    <goal-table :goals="goals"></goal-table>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GoalTable from "../../components/GoalTable.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    GoalTable,
    BreadcrumbDivider,
  },
  computed: {
    ...mapGetters({
      goals: "goals/goals",
    }),
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
  },
};
</script>
