<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink text="Settings" link="/u/settings"></BreadcrumbLink>
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink text="Goals"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <GeneralBox :overflow="false">
        <DynamicForm
          :fields="$store.getters['users/todoFormFields']"
          :initial="$store.getters['users/user']"
          submit="Save"
          success="Settings saved"
          action="users/patchUser"
        />
      </GeneralBox>
    </div>
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
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
    GeneralBox,
    DynamicForm,
  },
  mounted() {
    this.$store.dispatch("users/fetchUser");
  },
};
</script>
