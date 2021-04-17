<template>
  <router-link
    :to="link"
    class="flex items-center p-2 text-gray-700 hover:text-gray-800"
  >
    <div
      class="bg-gray-300 rounded-full w-10 h-10 mr-3 flex items-center justify-center"
    >
      <slot></slot>
    </div>
    <div>{{ name }}</div>
  </router-link>
</template>

<script>
export default {
  name: "OverviewItem",
  props: {
    name: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
  },
};
</script>
