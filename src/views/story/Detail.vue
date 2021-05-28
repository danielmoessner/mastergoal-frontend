<template>
  <BackendBox v-if="story">
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/s/dashboard" text="Dashboard"></BreadcrumbLink>
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink
        :link="`/s/${$route.params.id}/`"
        :text="getDate(story.updated)"
      ></BreadcrumbLink>
    </BreadcrumbNavigation>
    <GeneralBox>
      <article class="prose">
        <h1>What Is:</h1>
        <!-- eslint-disable vue/no-v-html -->
        <div v-html="story.what_is"></div>
        <h1>What Should Be:</h1>
        <div v-html="story.what_should_be"></div>
        <!-- eslint-enable vue/no-v-html -->
      </article>
    </GeneralBox>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GeneralBox from "../../components/Box/General.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";

export default {
  components: {
    BackendBox,
    GeneralBox,
    BreadcrumbLink,
    BreadcrumbNavigation,
    BreadcrumbDivider,
  },
  computed: {
    story() {
      return this.$store.getters["story/story"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("story/fetchStories");
  },
  methods: {
    getDate(date) {
      return new Date(date).toLocaleString("de-DE");
    },
  },
};
</script>
