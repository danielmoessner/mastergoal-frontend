<template>
  <span
    class="text-gray-100 block px-4 py-2 mb-4 rounded-md"
    v-bind:class="{ 'bg-green-500': success, 'bg-red-500': error, 'bg-blue-500': info }"
    v-if="message"
    v-html="message"
  ></span>
</template>

<script>
export default {
  name: "AlertBox",
  props: {
    type: {
      type: String,
      default: "SUCCESS",
    },
    message: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {};
  },
  computed: {
    success: function () {
      return this.type === "SUCCESS";
    },
    info: function () {
      return this.type === "INFO";
    },
    error: function () {
      return this.type === "ERROR";
    },
  },
};
</script>
