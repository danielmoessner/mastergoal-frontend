<template>
  <BackendBox v-if="story">
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/s/dashboard" text="Dashboard"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <div class="space-y-10">
      <div>
        <h2 class="text-lg font-medium text-gray-700">What Is:</h2>
        <!-- eslint-disable vue/no-v-html -->
        <article
          class="bg-white relative prose"
          v-html="story.what_is"
        ></article>
        <!-- eslint-enable vue/no-v-html -->
      </div>
      <div>
        <h2 class="text-lg font-medium text-gray-700">What Should Be:</h2>
        <!-- eslint-disable vue/no-v-html -->
        <article
          class="bg-white relative prose"
          v-html="story.what_should_be"
        ></article>
        <!-- eslint-enable vue/no-v-html -->
      </div>
    </div>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";

export default {
  components: {
    BackendBox,
    BreadcrumbLink,
    BreadcrumbNavigation,
  },
  computed: {
    story() {
      return this.$store.getters["story/story"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("story/fetchStories");
  },
};
</script>
