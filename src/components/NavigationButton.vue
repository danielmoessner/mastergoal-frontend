<template>
  <router-link
    :to="completeLink"
    class="flex flex-row items-center px-2 py-2 text-gray-600 transition duration-100 ease-in-out rounded-lg hover:bg-gray-300 hover:text-gray-700"
  >
    <div class="flex items-center justify-center mr-3 text-lg text-gray-400">
      <slot></slot>
    </div>

    <span class="">{{ text }}</span>

    <span
      v-if="notifications > 0"
      class="flex items-center justify-center h-6 px-2 ml-auto text-sm font-semibold text-gray-500 bg-gray-200 rounded-full"
    >
      {{ notifications }}
    </span>
  </router-link>
</template>

<script>
export default {
  name: "NavigationButton",
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    notifications: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  computed: {
    completeLink() {
      if (this.link.endsWith("/")) return this.link;
      return this.link + "/";
    },
  },
};
</script>

<style lang="css" scoped>
.router-link-active {
  @apply bg-gray-300;
}
</style>
