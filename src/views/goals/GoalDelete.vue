<template>
  <backend-box v-if="goal">
    <goals-goal-breadcrumb :goal="goal">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-bind:link="'/g/list/goals/' + goal.id + '/delete/'"
        text="Delete"
      ></breadcrumb-link>
    </goals-goal-breadcrumb>
    <delete-box
      @click="deleteGoal"
      :object="goal.name"
      :to="`/g/list/goals/${goal.id}/`"
    />
  </backend-box>
</template>

<script>
import NavigationButton from "../../components/NavigationButton.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import BackendBox from "../../components/BackendBox.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";
import DeleteBox from "../../components/Box/Delete.vue";

export default {
  components: {
    GoalsGoalBreadcrumb,
    BackendBox,
    DetailGrid,
    BreadcrumbLink,
    BreadcrumbDivider,
    NavigationButton,
    SubmitButton,
    DeleteBox,
  },
  computed: {
    goal() {
      return this.$store.getters["goals/goal"](this.$route.params.id);
    },
  },
  methods: {
    deleteGoal() {
      this.$store
        .dispatch("goals/deleteGoal", this.goal.url)
        .then(() => this.$router.push("/g/goals/"));
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
  },
};
</script>

<style></style>
