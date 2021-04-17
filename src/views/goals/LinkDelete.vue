<template>
  <backend-box v-if="link && mastergoal && subgoal">
    <goals-goal-breadcrumb :item="link">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link text="Delete"></breadcrumb-link>
    </goals-goal-breadcrumb>
    <delete-box
      :object="`${mastergoal.name} -> ${subgoal.name}`"
      :to="`/g/list/goals/${mastergoal.id}/`"
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
    DeleteBox,
    BackendBox,
    BreadcrumbLink,
    BreadcrumbDivider,
  },
  computed: {
    link() {
      return this.$store.getters["goals/link"](this.$route.params.id);
    },
    mastergoal() {
      return this.$store.getters["goals/goal"](this.link.master_goal);
    },
    subgoal() {
      return this.$store.getters["goals/goal"](this.link.sub_goal);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchLinks");
    this.$store.dispatch("goals/fetchGoals");
  },
  methods: {
    deleteLink() {
      this.$store
        .dispatch("goals/deleteLink", this.link.url)
        .then(() => this.$router.push("/g/goals/"));
    },
  },
};
</script>
