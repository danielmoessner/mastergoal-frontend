<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/g/list" text="List"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link link="/g/list/links" text="Links"></breadcrumb-link>
    </breadcrumb-navigation>
    <link-table v-bind:links="links"></link-table>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import axios from "@/plugins/backendAxios.js";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";
import LinkTable from "@/components/LinkTable.vue";

export default {
  name: "GoalList",
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    LinkTable,
    BreadcrumbDivider,
  },
  data() {
    return {
      links: [],
    };
  },
  mounted() {
    axios.get("/g/api/links/").then((response) => (this.links = response.data));
  },
};
</script>
