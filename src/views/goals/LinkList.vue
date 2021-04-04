<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/g/list" text="List"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link link="/g/list/links" text="Links"></breadcrumb-link>
    </breadcrumb-navigation>
    <link-table :links="links"></link-table>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import LinkTable from "../../components/LinkTable.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    LinkTable,
    BreadcrumbDivider,
  },
  computed: {
    ...mapGetters({
      links: "goals/links",
    }),
  },
  mounted() {
    this.$store.dispatch("goals/fetchLinks");
  },
};
</script>
