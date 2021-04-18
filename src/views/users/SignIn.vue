<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div class="w-64 mb-64 mt-12">
      <MastergoalLogo class="rounded-lg mb-8"></MastergoalLogo>
      <AlertBox :message="alert.message" :type="alert.type"></AlertBox>
      <DynamicForm
        :fields="$store.getters['users/loginFormFields']"
        action="users/login"
        submit="Login"
        success=""
      />
      <NavigationButton
        class="mt-10"
        link="/signup"
        text="Sign up instead"
      ></NavigationButton>
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
    MastergoalLogo,
    NavigationButton,
    DynamicForm,
  },
};
</script>
