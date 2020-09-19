<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div class="w-64">
      <alert-box v-bind:message="alert.message" v-bind:type="alert.type"></alert-box>
      <FormulateForm v-on:submit="submit" name="signin" v-model="formData">
        <FormulateInput type="text" name="username" label="Username" validation="required" />
        <FormulateInput type="password" name="password" label="Password" validation="required" />
        <FormulateInput type="submit" value="Login" />
      </FormulateForm>
    </div>
  </div>
</template>

<script>
import AuthenticationAlertMixin from "@/mixins/AuthenticationAlertMixin.js";
import AlertBox from "@/components/AlertBox.vue";

export default {
  name: "SignIn",
  components: {
    AlertBox,
  },
  mixins: [AuthenticationAlertMixin],
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    submit() {
      this.clearAlert();
      this.$store.dispatch("login", {
        username: this.formData.username,
        password: this.formData.password,
      });
    },
  },
};
</script>
