<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div class="w-64 mb-64 mt-12">
      <mastergoal-logo class="rounded-lg mb-8"></mastergoal-logo>
      <alert-box
        v-bind:message="alert.message"
        v-bind:type="alert.type"
      ></alert-box>
      <dynamic-form
        :fields="$store.getters['users/signUpFormFields']"
        action="users/signup"
        submit="Sign up"
        success=""
      />
      <navigation-button
        link="/signin"
        text="Login instead"
      ></navigation-button>
    </div>
  </div>
</template>

<script>
import AlertBox from "../components/AlertBox.vue";
import MastergoalLogo from "../components/MastergoalLogo.vue";
import NavigationButton from "../components/NavigationButton.vue";
import DynamicForm from "../components/DynamicForm.vue";

export default {
  name: "UsersSignIn",
  components: {
    AlertBox,
    DynamicForm,
    MastergoalLogo,
    NavigationButton,
  },
};
</script>
