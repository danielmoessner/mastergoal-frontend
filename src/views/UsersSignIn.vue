<template>
  <div class="flex items-center justify-center w-full min-h-screen">
    <div class="w-64 mt-12 mb-64">
      <mastergoal-logo class="mb-8 rounded-lg"></mastergoal-logo>
      <alert-box
        v-bind:message="alert.message"
        v-bind:type="alert.type"
      ></alert-box>
      <FormKit
      type="form"
        class="mb-12"
        v-on:submit="submit"
        v-bind:name="formName"
        v-model="formData"
      >
        <FormKit
          type="text"
          name="username"
          label="E-Mail"
          validation="required"
        />
        <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required"
        />
        <FormKit type="submit" value="Login" />
      </FormKit>
      <navigation-button
        link="/signup"
        text="Sign up instead"
      ></navigation-button>
    </div>
  </div>
</template>

<script>
import AlertBox from "@/components/AlertBox.vue";
import MastergoalLogo from "@/components/MastergoalLogo.vue";
import NavigationButton from "@/components/NavigationButton.vue";

export default {
  name: "UsersSignIn",
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
