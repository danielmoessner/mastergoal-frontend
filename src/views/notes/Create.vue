<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/n/dashboard/" text="Dashboard"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link link="/n/add/" text="Add Note"></breadcrumb-link>
    </breadcrumb-navigation>
    <detail-grid>
      <general-box class="col-span-2 md:col-span-6">
        <dynamic-form
          action="notes/createNote"
          :fields="$store.getters['notes/noteFormFields']"
          success="Note added"
          submit="Create"
        />
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GeneralBox from "../../components/Box/GeneralBox.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import DynamicForm from "../../components/DynamicForm.vue";

export default {
  name: "NotesAddNote",
  components: {
    DetailGrid,
    DynamicForm,
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    SubmitButton,
    BreadcrumbDivider,
  },
  mounted() {
    this.$store.dispatch("notes/fetchNotes");
  },
};
</script>
