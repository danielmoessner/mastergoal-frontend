<template>
  <div class="form-horizontal" v-html="form"></div>
</template>

<script>
export default {
  name: "BootstrapForm",
  props: {
    form: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped src="@/assets/bootstrap-form.css" />
