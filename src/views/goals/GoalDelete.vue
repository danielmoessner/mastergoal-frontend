<template>
  <backend-box v-if="goal">
    <goals-goal-breadcrumb :goal="goal">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-bind:link="'/g/list/goals/' + goal.id + '/delete/'"
        text="Delete"
      ></breadcrumb-link>
    </goals-goal-breadcrumb>
    <detail-grid>
      <general-box class="col-span-2 md:col-span-3" :overflow="false">
        <div class="flex-col flex justify-start items-start">
          <p class="mb-4">Are you sure you want to delete '{{ goal.name }}'?</p>
          <div class="flex items-end w-full justify-end">
            <navigation-button
              class="pt-2 pb-2"
              :link="'/g/list/goals/' + $route.params.id + '/'"
              text="Cancel"
            ></navigation-button>
            <submit-button
              v-on:click.native.prevent="deleteGoal"
              class="ml-2"
              text="Yes, delete"
            ></submit-button>
          </div>
        </div>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import NavigationButton from "../../components/NavigationButton.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import BackendBox from "../../components/BackendBox.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GeneralBox from "../../components/GeneralBox.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";

export default {
  components: {
    GoalsGoalBreadcrumb,
    BackendBox,
    DetailGrid,
    BreadcrumbLink,
    BreadcrumbDivider,
    GeneralBox,
    NavigationButton,
    SubmitButton,
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
