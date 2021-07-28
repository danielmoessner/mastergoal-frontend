<template>
  <BackendBox v-if="achievement">
    <AchievementBreadcrumb :achievement="achievement">
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink
        text="Delete"
        :link="'/a/' + $route.params.id + '/delete/'"
      ></BreadcrumbLink>
    </AchievementBreadcrumb>
    <DeleteBox
      :object="achievement.title"
      to="/a/dashboard/"
      @click="deleteAchievement"
    />
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import AchievementBreadcrumb from "../../components/Breadcrumb/Achievement.vue";
import DeleteBox from "../../components/Box/Delete.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";

export default {
  components: {
    BreadcrumbDivider,
    AchievementBreadcrumb,
    BackendBox,
    DeleteBox,
    BreadcrumbLink,
  },
  computed: {
    achievement() {
      return this.$store.getters["achievements/achievement"](
        this.$route.params.id,
      );
    },
  },
  mounted() {
    this.$store.dispatch("achievements/fetchAchievements");
  },
  methods: {
    deleteAchievement() {
      this.$store
        .dispatch("achievements/deleteAchievement", this.achievement.url)
        .then(() => this.$router.push("/a/dashboard/"));
    },
  },
};
</script>
