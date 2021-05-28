<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/s/dashboard" text="Dashboard"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <GeneralBox>
      <DynamicForm
        action="story/postStory"
        success="Story saved"
        submit="Save"
        :initial="story"
        :fields="$store.getters['story/storyFormFields']"
      />
    </GeneralBox>
    <div class="space-y-4 mt-10">
      <Item v-for="storyItem in stories" :key="storyItem.url" bg="bg-gray-50">
        <Body>
          <div class="font-medium">
            {{ new Date(storyItem.updated).toLocaleDateString("de-DE") }}
          </div>
        </Body>
        <HrefMenu :to="`/s/${storyItem.id}/`" />
      </Item>
    </div>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import { mapGetters } from "vuex";
import DynamicForm from "../../components/DynamicForm.vue";
import GeneralBox from "../../components/Box/General.vue";
import Item from "../../components/Item/Index.vue";
import HrefMenu from "../../components/Item/HrefMenu.vue";
import Body from "../../components/Item/Body.vue";

export default {
  components: {
    Item,
    HrefMenu,
    Body,
    GeneralBox,
    DynamicForm,
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
