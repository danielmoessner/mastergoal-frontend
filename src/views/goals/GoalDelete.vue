<template>
  <backend-box v-if="goal">
    <goals-goal-breadcrumb :item="goal">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link text="Delete"></breadcrumb-link>
    </goals-goal-breadcrumb>
    <delete-box
      :object="goal.name"
      :to="`/g/list/goals/${goal.id}/`"
      @click="deleteGoal"
    />
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";
import DeleteBox from "../../components/Box/Delete.vue";

export default {
  components: {
    GoalsGoalBreadcrumb,
    BackendBox,

    BreadcrumbLink,
    BreadcrumbDivider,

    DeleteBox,
  },
  computed: {
    goal() {
      return this.$store.getters["goals/goal"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
  },
  methods: {
    deleteGoal() {
      this.$store
        .dispatch("goals/deleteGoal", this.goal.url)
        .then(() => this.$router.push("/g/goals/"));
    },
  },
};
</script>

<style></style>
