<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link text="Goals" link="/g/list/goals"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-if="goal"
        v-bind:text="goal.name"
        v-bind:link="'/g/list/goals/' + goal.id"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        v-bind:link="'/g/list/goals/' + goal.id + '/edit/'"
      ></breadcrumb-link>
    </breadcrumb-navigation>
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
          <formulate-input type="submit" value="Save"> </formulate-input>
        </formulate-form>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import axios from "@/plugins/backendAxios.js";
import DetailGrid from "@/components/DetailGrid.vue";
import GeneralBox from "@/components/GeneralBox.vue";

export default {
  name: "GoalsGoalEdit",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
  },
  data() {
    return {
      goal: false,
      name: "add-goal-form",
      formData: {},
    };
  },
  computed: {
    url() {
      return "/g/api/goals/" + this.$route.params.id + "/";
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    changed(data) {
      this.goal = data;
    },
    fetch() {
      axios.get(this.url).then((response) => {
        this.goal = response.data;
        this.formData = response.data;
      });
    },
    submit() {
      axios
        .put(this.goal.url, this.formData)
        .then((response) =>
          this.$router.push("/g/list/goals/" + response.data.id + '/')
        )
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
