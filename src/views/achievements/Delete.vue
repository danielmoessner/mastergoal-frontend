<template>
  <BackendBox>
    <AchievementBreadcrumb>
      <BreadcrumbLink
        text="Delete"
        :link="'/a/' + $route.params.id + '/delete/'"
      ></BreadcrumbLink>
    </AchievementBreadcrumb>
    <div>Achievements Delete</div>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import AchievementBreadcrumb from "../../components/Breadcrumb/Achievement.vue";

export default {
  components: {
    AchievementBreadcrumb,
    BackendBox,
    BreadcrumbLink,
  },
};
</script>
