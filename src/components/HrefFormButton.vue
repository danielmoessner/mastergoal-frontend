<template>
  <router-link
    :to="tolink"
    class="cursor-pointer text-blue-700 hover:text-blue-900 transition ease-in-out duration-100 mr-4"
    >{{ text }}</router-link
  >
</template>

<script>
export default {
  name: "FormButton",
  props: {
    link: {
      default: "",
      type: String,
    },
    text: {
      default: "",
      type: String,
    },
    to: {
      type: String,
      default: "",
    },
  },
  computed: {
    tolink() {
      return this.to || this.link || "#";
    },
  },
};
</script>
