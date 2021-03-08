<template>
  <router-link
    v-bind:to="completeLink"
    class="flex flex-row items-center py-2 px-2 rounded-lg text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition ease-in-out duration-100"
  >
    <div
      v-if="icon"
      class="flex items-center justify-center text-lg text-gray-400 mr-3"
    >
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-6 w-6"
        v-bind:class="svgClass"
        v-html="icon"
      ></svg>
    </div>
    <span class="" v-html="text"></span>
    <span
      v-if="notifications > 0"
      class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
      v-html="notifications"
    ></span>
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
    icon: {
      type: String,
      required: false,
    },
    svgClass: {
      type: String,
      default: "",
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
.router-link-exact-active {
  @apply bg-gray-300;
}
</style>
