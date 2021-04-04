<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link text="links" link="/g/list/links"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        :text="linkName"
        :link="'/g/list/links/' + link.id"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        :link="'/g/list/links/' + link.id + '/edit/'"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <general-box
      :overflow="false"
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
import GeneralBox from "../../components/Box/General.vue";

export default {
  name: "GoalsLinkEdit",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
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
