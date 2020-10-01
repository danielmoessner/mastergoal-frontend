<template>
  <router-link class="p-2 text-gray-700" v-bind:to="link"
    ><div class="font-bold text-lg">{{ text }}</div>
  </router-link>
</template>

<script>
export default {
  name: "BreadcrumbLink",
  props: {
    link: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  },
};
</script>
