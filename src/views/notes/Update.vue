<template>
  <backend-box v-if="note">
    <notes-note-breadcrumb :note="note">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        :link="'/n/' + $route.params.id + '/edit/'"
      ></breadcrumb-link>
    </notes-note-breadcrumb>
    <detail-grid>
      <general-box class="col-span-2 md:col-span-6">
        <dynamic-form
          :fields="$store.getters['notes/noteFormFields']"
          :initial="note"
          action="notes/patchNote"
          success="Note updated"
          submit="Save"
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
import NotesNoteBreadcrumb from "../../components/NotesNoteBreadcrumb.vue";

export default {
  components: {
    DetailGrid,
    DynamicForm,
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    SubmitButton,
    BreadcrumbDivider,
    NotesNoteBreadcrumb,
  },
  computed: {
    note() {
      return this.$store.getters["notes/note"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("notes/fetchNotes");
  },
};
</script>
