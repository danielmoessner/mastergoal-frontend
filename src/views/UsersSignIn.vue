<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div class="w-64 mb-64 mt-12">
      <mastergoal-logo class="rounded-lg mb-8"></mastergoal-logo>
      <alert-box
        v-bind:message="alert.message"
        v-bind:type="alert.type"
      ></alert-box>
      <dynamic-form
        @submit="onSubmit"
        :schema="loginFormSchema"
        :nonFieldErrors="nonFieldErrors"
      />
      <!-- <FormulateForm
        class="mb-12"
        v-on:submit="submit"
        v-bind:name="formName"
        v-model="formData"
      >
        <FormulateInput
          type="text"
          name="email"
          label="E-Mail"
          validation="required"
        />
        <FormulateInput
          type="password"
          name="password"
          label="Password"
          validation="required"
        />
        <FormulateInput type="submit" value="Login" />
      </FormulateForm> -->
      <navigation-button
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
      formData: {},
      formName: "signinform",
      nonFieldErrors: [],
      loginFormSchema: {
        fields: [
          {
            label: "Email",
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
        validation: yup.object().shape({
          email: yup.string().email().required(),
          password: yup.string().required(),
        }),
        values: {
          email: "",
          password: "",
        },
      },
    };
  },
  methods: {
    onSubmit(values) {
      this.$store.dispatch("alert/clear");
      this.$store.dispatch("login", values).catch((error) => {
        console.log("error", error);
        this.nonFieldErrors = error.non_field_errors;
      });
    },
  },
  mounted() {
    // this.$store
    //   .dispatch("test")
    //   .then((result) => {
    //     console.log("result: ", result);
    //   })
    //   .catch((error) => {
    //     console.log("error: ", error);
    //   });
  },
};
</script>
