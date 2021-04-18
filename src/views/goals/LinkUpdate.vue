<template>
  <BackendBox>
    <GoalsGoalBreadcrumb :item="link">
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink text="Edit"></BreadcrumbLink>
    </GoalsGoalBreadcrumb>
    <GeneralBox
      :overflow="false"
      class="col-span-2 lg:col-span-3 xl:col-span-3"
    >
      <DynamicForm
        action="goals/patchLink"
        success="Link saved"
        submit="Save"
        :initial="link"
        :fields="$store.getters['goals/linkFormFields']"
      />
    </GeneralBox>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import DynamicForm from "../../components/DynamicForm.vue";
import GeneralBox from "../../components/Box/General.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";

export default {
  name: "GoalsLinkEdit",
  components: {
    GeneralBox,
    GoalsGoalBreadcrumb,
    BackendBox,
    BreadcrumbDivider,
    BreadcrumbLink,
    DynamicForm,
  },
  computed: {
    link() {
      return this.$store.getters["goals/link"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
    this.$store.dispatch("goals/fetchLinks");
  },
};
</script>
