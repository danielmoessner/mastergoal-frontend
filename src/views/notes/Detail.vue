<template>
  <backend-box>
    <notes-note-breadcrumb :note="note"> </notes-note-breadcrumb>
    <detail-grid>
      <general-box class="col-span-2 md:col-span-4">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <article class="prose" v-html="note.content"></article>
        <hr />
        <href-form-button
          :to="'/n/' + $route.params.id + '/edit/'"
          text="Edit"
        ></href-form-button>
        <href-form-button
          :to="'/n/' + $route.params.id + '/delete/'"
          text="Delete"
        ></href-form-button>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import HrefFormButton from "../../components/HrefFormButton.vue";
import NotesNoteBreadcrumb from "../../components/NotesNoteBreadcrumb.vue";
import BackendBox from "../../components/BackendBox.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import GeneralBox from "../../components/Box/General.vue";

export default {
  components: {
    HrefFormButton,
    NotesNoteBreadcrumb,
    GeneralBox,
    DetailGrid,
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
};
</script>
