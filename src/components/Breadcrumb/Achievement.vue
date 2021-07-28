<template>
  <BreadcrumbNavigation>
    <BreadcrumbLink text="Dasboard" link="/a/dashboard/"></BreadcrumbLink>
    <BreadcrumbDivider></BreadcrumbDivider>
    <BreadcrumbLink
      :text="achievement.title"
      link="/a/dashboard/"
    ></BreadcrumbLink>
    <slot></slot>
  </BreadcrumbNavigation>
</template>

<script>
import BreadcrumbNavigation from "../BreadcrumbNavigation.vue";
import BreadcrumbLink from "../BreadcrumbLink.vue";
import BreadcrumbDivider from "../BreadcrumbDivider.vue";

export default {
  components: {
    BreadcrumbDivider,
    BreadcrumbNavigation,
    BreadcrumbLink,
  },
  props: {
    achievement: {
      type: [Boolean, Object],
      required: true,
    },
  },
};
</script>
