<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link text="links" link="/g/list/links"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-bind:text="linkName"
        v-bind:link="'/g/list/links/' + link.id"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        v-bind:link="'/g/list/links/' + link.id + '/edit/'"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <general-box
      v-bind:overflow="false"
      class="col-span-2 lg:col-span-3 xl:col-span-3"
    >
      <dynamic-form
        action="goals/patchLink"
        success="Link saved"
        submit="Save"
        :initial="link"
        :fields="$store.getters['goals/linkFormFields']"
      />
    </general-box>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import DynamicForm from "../../components/DynamicForm.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import GeneralBox from "../../components/GeneralBox.vue";

export default {
  name: "GoalsLinkEdit",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
    DynamicForm,
  },
  computed: {
    link() {
      return this.$store.getters["goals/link"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
    this.$store.dispatch("goals/fetchLinks");
  },
};
</script>
