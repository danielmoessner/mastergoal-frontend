<template>
  <router-link class="p-2 text-gray-600 last:text-gray-500" v-bind:to="completeLink"
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
  computed: {
    completeLink() {
      if (this.link.endsWith("/")) return this.link;
      return this.link + "/";
    },
  },
};
</script>
