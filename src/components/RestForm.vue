<template>
  <form ref="form" v-on:submit.prevent="submit">
    <div class="rest-form">
      <div class="form-horizontal" v-html="form"></div>
    </div>
    <div class="flex justify-end">
      <submit-button></submit-button>
    </div>
  </form>
</template>

<script>
import SubmitButton from "../components/SubmitButton.vue";
import axios from "../plugins/backendAxios.js";

export default {
  name: "RestForm",
  components: { SubmitButton },
  props: {
    url: {
      required: true,
      type: String,
    },
    method: {
      type: String,
      default: "PATCH",
    },
    submitUrl: {
      required: true,
      type: String,
    },
  },
  data: function () {
    return {
      form: "",
    };
  },
  mounted() {
    axios.get(this.url).then((response) => (this.form = response.data.form));
  },
  methods: {
    submit: function () {
      let formData = new FormData(this.$refs.form);
      axios({ url: this.submitUrl, method: this.method, data: formData })
        .then((response) => this.$emit("response", response.data))
        .catch((error) => this.$emit("error", error.response.data));
    },
  },
};
</script>

<style scoped src="../assets/bootstrap-form.css" />
