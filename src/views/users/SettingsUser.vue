<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink text="Settings" link="/u/settings"></BreadcrumbLink>
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink
        text="User"
        link="/u/settings/user-settings"
      ></BreadcrumbLink>
    </BreadcrumbNavigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <GeneralBox :overflow="false">
        <DynamicForm
          :fields="$store.getters['users/userFormFields']"
          :initial="$store.getters['users/user']"
          submit="Save"
          success="E-Mail saved"
          action="users/patchUser"
        />
      </GeneralBox>
      <GeneralBox :overflow="false">
        <DynamicForm
          :fields="$store.getters['users/passwordFormFields']"
          submit="Save"
          success="New Password Saved"
          action="users/changeUserPassword"
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
  name: "UsersSettingsUser",
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
    GeneralBox,
    DynamicForm,
  },
  mixins: [],
  mounted() {
    this.$store.dispatch("users/fetchUser");
  },
};
</script>
