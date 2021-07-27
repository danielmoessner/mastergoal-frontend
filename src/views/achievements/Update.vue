<template>
  <BackendBox>
    <AchievementBreadcrumb>
      <BreadcrumbLink
        text="Edit"
        :link="'/a/' + $route.params.id + '/edit/'"
      ></BreadcrumbLink>
    </AchievementBreadcrumb>
    <div>Achievements Edit</div>
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
