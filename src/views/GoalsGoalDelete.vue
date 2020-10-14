<template>
  <backend-box>
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
            <submit-button v-on:click.native.prevent="deleteGoal" class="ml-2" text="Yes, delete"></submit-button>
          </div>
        </div>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import GoalsGoal from "@/mixins/GoalsGoal";
import NavigationButton from "@/components/NavigationButton.vue";
import SubmitButton from "@/components/SubmitButton.vue";
import axios from "@/plugins/backendAxios.js";

export default {
  name: "GoalsGoalDelete",
  mixins: [GoalsGoal],
  components: {
    NavigationButton,
    SubmitButton,
  },
  methods: {
    deleteGoal() {
      axios
        .delete(this.goal.url)
        .then(() => this.$router.push("/g/list/goals/"))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
