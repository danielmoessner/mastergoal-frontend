<template>
  <backend-box v-if="link">
    <goals-link-breadcrumb :link="link">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        :link="'/g/list/links/' + link.id + '/delete/'"
        text="Delete"
      ></breadcrumb-link>
    </goals-link-breadcrumb>
    <detail-grid>
      <general-box class="col-span-2 md:col-span-3" :overflow="false">
        <div class="flex-col flex justify-start items-start">
          <p class="mb-4">Are you sure you want to delete this link?</p>
          <div class="flex items-end w-full justify-end">
            <navigation-button
              class="pt-2 pb-2"
              :link="'/g/list/links/' + $route.params.id + '/'"
              text="Cancel"
            ></navigation-button>
            <submit-button
              class="ml-2"
              text="Yes, delete"
              @click.prevent="deleteLink"
            ></submit-button>
          </div>
        </div>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import NavigationButton from "../../components/NavigationButton.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import BackendBox from "../../components/BackendBox.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GeneralBox from "../../components/Box/General.vue";
import GoalsLinkBreadcrumb from "../../components/GoalsLinkBreadcrumb.vue";

export default {
  components: {
    GoalsLinkBreadcrumb,
    BackendBox,
    DetailGrid,
    BreadcrumbLink,
    BreadcrumbDivider,
    GeneralBox,
    NavigationButton,
    SubmitButton,
  },
  computed: {
    link() {
      return this.$store.getters["goals/link"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchLinks");
  },
  methods: {
    deleteLink() {
      this.$store
        .dispatch("goals/deleteLink", this.link.url)
        .then(() => this.$router.push("/g/goals/"));
    },
  },
};
</script>

<style></style>
