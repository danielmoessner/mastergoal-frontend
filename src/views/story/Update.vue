<template>
  <BackendBox v-if="story">
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/s/dashboard" text="Dashboard"></BreadcrumbLink>
    </BreadcrumbNavigation>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  components: {
    QuillEditor,
    BackendBox,
    BreadcrumbLink,
    BreadcrumbNavigation,
  },
  data() {
    return {
      isSaved: true,
      interval: null,
      contentSet: false,
    };
  },
  computed: {
    story() {
      return this.$store.getters["story/latestStory"];
    },
  },
  mounted() {
    this.$store.dispatch("story/fetchStories");
    this.interval = setInterval(this.checkSave, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    textChanged() {
      this.isSaved = false;
    },
    checkSave() {
      if (!this.isSaved) this.save();
    },
    save() {
      this.$store.dispatch("story/postStory", this.story);
      this.isSaved = true;
    },
  },
};
</script>
