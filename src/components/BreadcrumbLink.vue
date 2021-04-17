<template>
  <router-link
    v-if="link"
    class="p-2 text-gray-700 last:text-gray-500 whitespace-nowrap"
    :to="completeLink"
    ><div class="text-base">{{ text }}</div>
  </router-link>
  <div v-else class="p-2 text-gray-700 last:text-gray-500 whitespace-nowrap">
    <div class="text-base">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "BreadcrumbLink",
  props: {
    link: {
      required: false,
      type: String,
      default: "",
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
