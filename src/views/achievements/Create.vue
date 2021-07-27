<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/a/dashboard" text="Dashboard"></BreadcrumbLink>
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink link="/a/create" text="Add Achievement"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <div>Create Achievements</div>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";

export default {
  components: {
    BreadcrumbDivider,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
  },
};
</script>
