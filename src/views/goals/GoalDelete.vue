<template>
  <BackendBox v-if="goal">
    <GoalsGoalBreadcrumb :item="goal">
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink text="Delete"></BreadcrumbLink>
    </GoalsGoalBreadcrumb>
    <DeleteBox
      :object="goal.name"
      :to="`/g/list/goals/${goal.id}/`"
      @click="deleteGoal"
    />
  </BackendBox>
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
