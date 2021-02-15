<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="monitors"
        link="/g/list/monitors"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-if="monitor"
        v-bind:text="monitor.monitor"
        v-bind:link="'/g/list/monitors/' + monitor.id"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        v-bind:link="'/g/list/monitors/' + monitor.id + '/edit/'"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <detail-grid>
      <general-box
        v-bind:overflow="false"
        class="col-span-2 lg:col-span-3 xl:col-span-3"
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
            type="number"
            name="weight"
            id="weight"
            label="Weight"
            validation="required|min:0"
          >
          </formulate-input>
          <formulate-input
            type="number"
            name="steps"
            id="steps"
            label="Steps"
            validation="required|min:0"
          >
          </formulate-input>
          <formulate-input type="submit" value="Save"> </formulate-input>
        </formulate-form>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import BackendBox from "../components/BackendBox.vue";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import axios from "../plugins/backendAxios.js";
import DetailGrid from "../components/DetailGrid.vue";
import GeneralBox from "../components/GeneralBox.vue";

export default {
  name: "GoalsMonitorEdit",
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
      monitor: false,
      name: "edit-monitor-form",
      formData: {},
    };
  },
  computed: {
    url() {
      return "/g/api/monitors/" + this.$route.params.id + "/";
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios.get(this.url).then((response) => {
        this.monitor = response.data;
        this.formData = response.data;
      });
    },
    submit() {
      axios
        .put(this.monitor.url, this.formData)
        .then((response) =>
          this.$router.push("/g/list/monitors/" + response.data.id + "/")
        )
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
