<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/g/goals" text="Goals"></breadcrumb-link>
    </breadcrumb-navigation>
    <div
      class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6"
    >
      <goal-item
        :goal="goal"
        v-for="goal in goals"
        v-bind:key="goal.id"
      ></goal-item>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GoalItem from "../../components/GoalItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    GoalItem,
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
