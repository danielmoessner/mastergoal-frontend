<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div class="max-w-xl">
      <FormulateForm v-on:submit="submit" name="signin" v-model="formData">
        <FormulateInput type="text" name="username" label="Username" validation="required" />
        <FormulateInput type="password" name="password" label="Password" validation="required" />
        <FormulateInput type="submit" value="Login" />
      </FormulateForm>
    </div>
  </div>
</template>

<script>
// import FormulateSubmitMixin from "@/mixins/FormulateSubmitMixin.js";

export default {
  name: "SignIn",
  mixins: [],
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("login", {
        username: this.formData.username,
        password: this.formData.password,
      });
    },
  },
};
</script>
