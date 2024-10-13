<template>
  <router-link
    v-bind:to="completeLink"
    class="flex flex-row items-center px-4 py-3 text-gray-600 transition duration-100 ease-in-out bg-white rounded-lg hover:bg-gray-100 hover:text-gray-700"
  >
    <div
      v-if="icon"
      class="flex items-center justify-center mr-3 text-lg text-gray-400"
    >
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6"
        v-bind:class="svgClass"
        v-html="icon"
      >
        
      </svg>
    </div>
    <span class="" v-html="text"></span>
    <span
      v-if="notifications > 0"
      class="flex items-center justify-center h-6 px-2 ml-auto text-sm font-semibold text-gray-500 bg-gray-200 rounded-full"
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
.router-link-active {
  @apply bg-gray-100;
}
</style>
