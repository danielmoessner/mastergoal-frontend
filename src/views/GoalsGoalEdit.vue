<template>
  <backend-box>
    <goals-goal-breadcrumb :goal="goal">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        v-bind:link="'/g/list/goals/' + goal.id + '/edit/'"
      ></breadcrumb-link>
    </goals-goal-breadcrumb>
    <detail-grid>
      <general-box
        v-bind:overflow="false"
        class="col-span-2 md:col-span-3 xl:col-span-4"
      >
        <formulate-form v-on:submit="submit" :name="name" v-model="formData">
          <formulate-input
            type="text"
            label="Name"
            name="name"
            id="name"
            validation="required"
          >
          </formulate-input>
          <formulate-input
            type="textarea"
            name="why"
            id="why"
            rows="6"
            label="Why"
            validation=""
          >
          </formulate-input>
          <formulate-input
            type="textarea"
            name="impact"
            rows="6"
            id="impact"
            label="Impact"
            validation=""
          >
          </formulate-input>
          <formulate-input
            type="textarea"
            name="addition"
            rows="6"
            id="addition"
            label="Addition"
            validation=""
          >
          </formulate-input>
          <formulate-input
            type="textarea"
            name="addition"
            rows="6"
            id="addition"
            label="Addition"
            validation=""
          >
          </formulate-input>
          <formulate-input
            type="datetime-local"
            name="deadline"
            id="deadline"
            label="Deadline"
          >
          </formulate-input>
          <formulate-input type="submit" value="Save"> </formulate-input>
        </formulate-form>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import axios from "../plugins/backendAxios.js";
import DetailGrid from "../components/DetailGrid.vue";
import GeneralBox from "../components/GeneralBox.vue";
import GoalsGoalBreadcrumb from "../components/GoalsGoalBreadcrumb.vue";
import GoalsGoal from "../mixins/GoalsGoal.js";

export default {
  name: "GoalsGoalEdit",
  mixins: [GoalsGoal],
  components: {
    GoalsGoalBreadcrumb,
    GeneralBox,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
  },
  data() {
    return {
      name: "edit-goal-form",
      formData: {},
    };
  },
  watch: {
    goal() {
      this.formData = this.goal;
    },
  },
  methods: {
    submit() {
      axios
        .put(this.goal.url, this.formData)
        .then((response) =>
          this.$router.push("/g/list/goals/" + response.data.id + "/")
        )
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
