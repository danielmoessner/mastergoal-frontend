<template>
  <breadcrumb-navigation>
    <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
    <breadcrumb-divider></breadcrumb-divider>
    <breadcrumb-link text="Monitors" link="/g/list/monitors"></breadcrumb-link>
    <breadcrumb-divider></breadcrumb-divider>
    <breadcrumb-link
      v-if="monitor"
      v-bind:text="monitor.name"
      v-bind:link="'/g/list/monitors/' + monitor.id"
    ></breadcrumb-link>
    <slot></slot>
  </breadcrumb-navigation>
</template>

<script>
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";

export default {
  name: "GoalsMonitorBreadcrumb",
  components: {
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
  },
  props: {
    monitor: {
      type: [Object, Boolean],
      required: true,
    },
  },
};
</script>
