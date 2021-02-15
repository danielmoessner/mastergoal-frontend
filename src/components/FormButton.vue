<template>
  <a
    href="#"
    class="cursor-pointer text-blue-700 hover:text-blue-900 transition ease-in-out duration-100"
    v-on:click.prevent="submit"
    v-html="text"
  ></a>
</template>

<script>
import axios from "../plugins/backendAxios.js";

export default {
  name: "FormButton",
  props: {
    link: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
    data: {
      type: Object,
      required: true,
    },
    method: {
      type: String,
      default: "PATCH",
    },
  },
  methods: {
    submit: function () {
      axios({
        url: this.link,
        method: this.method,
        data: this.data,
      }).then((response) => this.$emit("response", response.data));
    },
  },
};
</script>
