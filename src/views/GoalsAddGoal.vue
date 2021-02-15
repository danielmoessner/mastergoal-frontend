<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/g/add" text="Add"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link link="/g/add/goal" text="Goal"></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box v-bind:overflow="false"
        ><formulate-form v-on:submit="submit" :name="name" v-model="formData">
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
            label="Why"
            validation=""
          >
          </formulate-input>
          <formulate-input
            type="textarea"
            name="impact"
            id="impact"
            label="Impact"
            validation=""
          >
          </formulate-input>
          <formulate-input type="submit" value="Add">
          </formulate-input> </formulate-form
      ></general-box>
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
  name: "GoalsAddGoal",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
  },
  data() {
    return {
      name: "add-goal-form",
      formData: {},
    };
  },
  methods: {
    submit() {
      axios
        .post("/g/api/goals/", this.formData)
        .then((response) =>
          this.$router.push("/g/list/goals/" + response.data.id + "/")
        )
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
