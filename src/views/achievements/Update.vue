<template>
  <BackendBox v-if="achievement">
    <AchievementBreadcrumb :achievement="achievement">
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink
        text="Edit"
        :link="`/a/${$route.params.id}/update/`"
      ></BreadcrumbLink>
    </AchievementBreadcrumb>
    <GeneralBox class="col-span-2 md:col-span-3 xl:col-span-4">
      <DynamicForm
        action="achievements/patchAchievement"
        success="Achievement saved"
        submit="Save"
        :initial="achievement"
        :fields="$store.getters['achievements/achievementFormFields']"
      />
    </GeneralBox>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import AchievementBreadcrumb from "../../components/Breadcrumb/Achievement.vue";
import DynamicForm from "../../components/DynamicForm.vue";
import GeneralBox from "../../components/Box/General.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";

export default {
  components: {
    AchievementBreadcrumb,
    BackendBox,
    BreadcrumbDivider,
    BreadcrumbLink,
    DynamicForm,
    GeneralBox,
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
};
</script>
