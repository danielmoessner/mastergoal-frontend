<template>
  <breadcrumb-navigation>
    <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
    <breadcrumb-divider></breadcrumb-divider>
    <breadcrumb-link
      text="Strategies"
      link="/g/list/strategies"
    ></breadcrumb-link>
    <breadcrumb-divider></breadcrumb-divider>
    <breadcrumb-link
      v-if="strategy"
      v-bind:text="strategy.name"
      v-bind:link="'/g/list/strategies/' + strategy.id"
    ></breadcrumb-link>
    <slot></slot>
  </breadcrumb-navigation>
</template>

<script>
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";

export default {
  name: "GoalsStrategyBreadcrumb",
  components: {
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
  },
  props: {
    strategy: {
      type: [Object, Boolean],
      required: true,
    },
  },
};
</script>
