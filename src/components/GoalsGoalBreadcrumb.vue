<template>
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
    <slot></slot>
  </breadcrumb-navigation>
</template>

<script>
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";

export default {
  name: "GoalsGoalBreadcrumb",
  components: {
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
  },
  props: {
    goal: {
      type: [Object, Boolean],
      required: true,
    },
  },
};
</script>
