<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="Settings" link="/u/settings"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="User"
        link="/u/settings/user-settings"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box v-bind:overflow="false">
        <dynamic-form
          :fields="$store.getters['users/userFormFields']"
          :initial="$store.getters['users/user']"
          submit="Save"
          success="E-Mail saved"
          action="users/patchUser"
        />
      </general-box>
      <general-box v-bind:overflow="false">
        <dynamic-form
          :fields="this.$store.getters['users/passwordFormFields']"
          submit="Save"
          success="New Password Saved"
          action="users/changeUserPassword"
        />
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "../components/BackendBox.vue";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import GeneralBox from "../components/GeneralBox.vue";
import DynamicForm from "../components/DynamicForm.vue";

export default {
  name: "UsersSettingsUser",
  mixins: [],
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
