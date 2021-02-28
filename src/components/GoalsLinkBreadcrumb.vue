<template>
  <breadcrumb-navigation>
    <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
    <breadcrumb-divider></breadcrumb-divider>
    <breadcrumb-link text="Links" link="/g/list/links"></breadcrumb-link>
    <breadcrumb-divider></breadcrumb-divider>
    <breadcrumb-link
      v-bind:text="linkName"
      v-bind:link="'/g/list/links/' + link.id"
    ></breadcrumb-link>
    <slot></slot>
  </breadcrumb-navigation>
</template>

<script>
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";

export default {
  name: "GoalsLinkBreadcrumb",
  components: {
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
  },
  props: {
    link: {
      type: [Object, Boolean],
      required: true,
    },
  },
  computed: {
    linkName() {
      if (!this.link) return "";
      return this.link.mastergoal.name + " --> " + this.link.subgoal.name;
    },
  },
};
</script>
