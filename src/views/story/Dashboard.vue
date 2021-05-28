<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/s/dashboard" text="Dashboard"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <div v-if="story.what_is" class="space-y-10">
      <div>
        <h2 class="text-lg font-medium text-gray-700">What Is:</h2>
        <div class="bg-white relative">
          <QuillEditor
            v-model:content="story.what_is"
            content-type="html"
            theme="snow"
            toolbar="full"
            @textChange="textChanged"
          />
          <div
            class="text-sm text-gray-700 absolute right-0 bottom-0 px-2 py-1"
          >
            {{ isSaved ? "Saved" : "Not saved.." }}
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-lg font-medium text-gray-700">What Should Be:</h2>
        <div class="bg-white relative">
          <QuillEditor
            v-model:content="story.what_should_be"
            content-type="html"
            theme="snow"
            toolbar="full"
            @textChange="textChanged"
          />
          <div
            class="text-sm text-gray-700 absolute right-0 bottom-0 px-2 py-1"
          >
            {{ isSaved ? "Saved" : "Not saved.." }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="font-bold text-lg text-gray-800">Older Versions:</h2>
      <div v-for="storyItem in stories" :key="storyItem.url">
        {{ storyItem.created }}
        <router-link :to="`/s/${storyItem.id}/`">See</router-link>
      </div>
    </div>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import { mapGetters } from "vuex";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  components: {
    QuillEditor,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
  },
  data() {
    return {
      isSaved: true,
      interval: null,
      contentSet: false,
    };
  },
  computed: {
    ...mapGetters({
      stories: "story/stories",
    }),
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
