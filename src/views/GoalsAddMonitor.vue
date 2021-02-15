<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/g/add" text="Add"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link link="/g/add/monitor" text="Monitor"></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box v-bind:overflow="false">
        <formulate-form
          v-on:submit="submit"
          name="add-monitor"
          v-model="formData"
        >
          <formulate-input
            type="select"
            label="Goal"
            name="goal"
            id="goal"
            validation="required"
            v-bind:options="goalOptions"
          >
          </formulate-input>
          <formulate-input
            type="text"
            name="name"
            label="Name"
            id="name"
            validation="required"
          >
          </formulate-input>
          <formulate-input
            type="number"
            id="steps"
            name="steps"
            label="Steps"
            validation="required|number"
          >
          </formulate-input>
          <formulate-input type="submit" value="Add"> </formulate-input>
        </formulate-form>
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "../components/BackendBox.vue";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import GeneralBox from "../components/GeneralBox.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import axios from "../plugins/backendAxios.js";

export default {
  name: "GoalsAddMonitor",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
  },
  computed: {
    goalOptions() {
      return this.goals.map((goal) => {
        return {
          id: "goal-" + goal.id,
          value: goal.url,
          label: goal.name,
        };
      });
    },
  },
  data() {
    return {
      formData: {},
      goals: [],
      name: "add-monitor-form",
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios
        .get("/g/api/goals/")
        .then((response) => (this.goals = response.data));
    },
    submit() {
      axios
        .post("/g/api/monitors/", this.formData)
        .then((response) =>
          this.$router.push("/g/list/monitors/" + response.data.id + "/")
        )
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
