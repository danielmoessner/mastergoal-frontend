<template>
  <div class="p-8 w-full fixed md:static md:pb-0 bottom-0 z-50 left-0 right-0">
    <span
      v-if="message"
      class="text-gray-100 block px-4 py-2 rounded-md break-words"
      :class="{
        'bg-green-500': success,
        'bg-red-500': error,
        'bg-blue-500': info,
      }"
    >
      {{ message }}
    </span>
  </div>
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
