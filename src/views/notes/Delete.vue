<template>
  <backend-box v-if="note">
    <notes-note-breadcrumb :note="note">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Delete"
        :link="'/n/' + $route.params.id + '/delete/'"
      ></breadcrumb-link>
    </notes-note-breadcrumb>
    <delete-box
      :object="note.name"
      :to="`/n/${note.id}/`"
      @click="deleteNote"
    />
  </backend-box>
</template>

<script>
import NotesNoteBreadcrumb from "../../components/NotesNoteBreadcrumb.vue";
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import DeleteBox from "../../components/Box/Delete.vue";

export default {
  components: {
    DeleteBox,
    NotesNoteBreadcrumb,
    BreadcrumbDivider,
    BreadcrumbLink,
    BackendBox,
  },
  computed: {
    note() {
      return this.$store.getters["notes/note"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("notes/fetchNotes");
  },
  methods: {
    deleteNote() {
      this.$store
        .dispatch("notes/deleteNote", this.note.url)
        .then(() => this.$router.push("/n/dashboard/"));
    },
  },
};
</script>
