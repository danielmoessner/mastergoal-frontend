<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="Tree" link="/g/tree"></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <general-box v-bind:overflow="false"> tree</general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import axios from "@/plugins/backendAxios.js";
import GeneralBox from "@/components/GeneralBox.vue";

export default {
  name: "GoalsTree",
  components: {
    BackendBox,
    BreadcrumbLink,
    BreadcrumbNavigation,
    GeneralBox,
  },
  data() {
    return {
      strategies: [],
      goals: [],
    };
  },
  methods: {
    fetch() {
      axios
        .get("/g/api/goals/tree/")
        .then((response) => (this.goals = response.data));
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
