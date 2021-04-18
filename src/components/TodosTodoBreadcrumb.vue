<template>
  <BreadcrumbNavigation>
    <BreadcrumbLink text="Dashboard" link="/t/dashboard/"></BreadcrumbLink>
    <slot></slot>
  </BreadcrumbNavigation>
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
