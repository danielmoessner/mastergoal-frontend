<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div class="w-64 mb-64 mt-12">
      <MastergoalLogo class="rounded-lg mb-8"></MastergoalLogo>
      <AlertBox :message="alert.message" :type="alert.type"></AlertBox>
      <DynamicForm
        :fields="$store.getters['users/signUpFormFields']"
        action="users/signup"
        submit="Sign up"
        success=""
      />
      <NavigationButton link="/signin" text="Login instead"></NavigationButton>
    </div>
  </div>
</template>

<script>
import AlertBox from "../../components/AlertBox.vue";
import MastergoalLogo from "../../components/MastergoalLogo.vue";
import NavigationButton from "../../components/NavigationButton.vue";
import DynamicForm from "../../components/DynamicForm.vue";

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
