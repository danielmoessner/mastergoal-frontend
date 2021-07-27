<template>
  <BreadcrumbNavigation>
    <BreadcrumbLink text="Dasboard" link="/a/dashboard"></BreadcrumbLink>
    <BreadcrumbDivider></BreadcrumbDivider>
    <BreadcrumbLink
      :text="achievement.title"
      :link="'/a/' + $route.params.id + '/'"
    ></BreadcrumbLink>
    <slot></slot>
  </BreadcrumbNavigation>
</template>

<script>
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";

export default {
  components: {
    BreadcrumbDivider,
    BreadcrumbNavigation,
    BreadcrumbLink,
  },
  props: {
    note: {
      type: [Boolean, Object],
      required: true,
    },
  },
};
</script>
