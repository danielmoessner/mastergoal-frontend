<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div class="w-64">
      <mastergoal-logo class="rounded-lg mb-8"></mastergoal-logo>
      <alert-box v-bind:message="alert.message" v-bind:type="alert.type"></alert-box>
      <FormulateForm class="mb-12" v-on:submit="submit" v-bind:name="formName" v-model="formData">
        <FormulateInput
          type="text"
          name="email"
          label="Enter your email"
          validation="required|email"
        />
        <FormulateInput
          type="password"
          name="password"
          label="Enter a unique password"
          validation="required"
        />
        <FormulateInput
          type="password"
          name="password_confirm"
          label="Confirm your password"
          validation="required|confirm:password"
          validationName="Password confirmation"
        />
        <FormulateInput type="submit" value="Sign up" />
      </FormulateForm>
      <navigation-button link="/signin" text="Login instead"></navigation-button>
    </div>
  </div>
</template>

<script>
import AlertBox from "@/components/AlertBox.vue";
import MastergoalLogo from "@/components/MastergoalLogo.vue";
import NavigationButton from "@/components/NavigationButton.vue";

export default {
  name: "SignIn",
  components: {
    AlertBox,
    MastergoalLogo,
    NavigationButton,
  },
  mixins: [],
  data() {
    return {
      formData: {},
      formName: "signinform",
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("alert/clear");
      this.$store.dispatch("signup", {
        formData: this.formData,
        formName: this.formName,
      });
    },
  },
};
</script>
