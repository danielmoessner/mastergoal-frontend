<template>
  <breadcrumb-navigation>
    <breadcrumb-link text="Dashboard" link="/t/dashboard/"></breadcrumb-link>
    <slot></slot>
  </breadcrumb-navigation>
</template>

<script>
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";

export default {
  components: {
    BreadcrumbNavigation,
    BreadcrumbLink,
  },
};
</script>
