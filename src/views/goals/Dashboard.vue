<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/g/goals" text="Goals"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <div
      class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3"
    >
      <GoalItem v-for="goal in goals" :key="goal.id" :goal="goal"></GoalItem>
    </div>
  </BackendBox>
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
