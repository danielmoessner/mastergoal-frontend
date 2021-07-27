<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/a/dashboard" text="Dashboard"></BreadcrumbLink>
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink link="/a/create" text="Add Achievement"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <GeneralBox>
      <DynamicForm
        action="achievements/createAchievement"
        success="Achievement added"
        submit="Create"
        :fields="$store.getters['achievements/achievementFormFields']"
      />
    </GeneralBox>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GeneralBox from "../../components/Box/General.vue";
import DynamicForm from "../../components/DynamicForm.vue";

export default {
  components: {
    GeneralBox,
    DynamicForm,
    BreadcrumbDivider,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
  },
};
</script>
