<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div class="w-64">
      <mastergoal-logo class="rounded-lg mb-8"></mastergoal-logo>
      <alert-box v-bind:message="alert.message" v-bind:type="alert.type"></alert-box>
      <FormulateForm class="mb-12" v-on:submit="submit" v-bind:name="formName" v-model="formData">
        <FormulateInput type="text" name="email" label="E-Mail" validation="required" />
        <FormulateInput type="password" name="password" label="Password" validation="required" />
        <FormulateInput type="submit" value="Login" />
      </FormulateForm>
      <navigation-button link="/signup" text="Sign up instead"></navigation-button>
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
      this.$store.dispatch("login", {
        formData: this.formData,
        formName: this.formName,
      });
    },
  },
};
</script>
