<template>
  <router-link
    class="p-2 text-gray-700 last:text-gray-500"
    :to="completeLink"
    ><div class="text-base">{{ text }}</div>
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
