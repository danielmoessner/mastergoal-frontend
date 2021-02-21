<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div class="w-64 mb-64 mt-12">
      <mastergoal-logo class="rounded-lg mb-8"></mastergoal-logo>
      <alert-box
        v-bind:message="alert.message"
        v-bind:type="alert.type"
      ></alert-box>
      <dynamic-form action="login" :form="loginForm" />
      <navigation-button
        class="mt-10"
        link="/signup"
        text="Sign up instead"
      ></navigation-button>
    </div>
  </div>
</template>

<script>
import AlertBox from "../components/AlertBox.vue";
import MastergoalLogo from "../components/MastergoalLogo.vue";
import NavigationButton from "../components/NavigationButton.vue";
import DynamicForm from "../components/DynamicForm.vue";
import * as yup from "yup";

export default {
  name: "UsersSignIn",
  components: {
    AlertBox,
    MastergoalLogo,
    NavigationButton,
    DynamicForm,
  },
  mixins: [],
  data() {
    return {
      loginForm: {
        fields: [
          {
            label: "E-Mail",
            name: "email",
            as: "input",
            type: "email",
          },
          {
            label: "Password",
            name: "password",
            as: "input",
            type: "password",
          },
        ],
        submit: "Login",
      },
    };
  },
  methods: {
    onSubmit(values) {
      this.$store.dispatch("alert/clear");
      this.$store.dispatch("login", values).catch((error) => {
        console.log("error", error);
        this.loginForm.nonFieldErrors = error.non_field_errors;
      });
    },
  },
};
</script>
