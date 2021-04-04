<template>
  <backend-box v-if="note">
    <notes-note-breadcrumb :note="note"> </notes-note-breadcrumb>
    <detail-grid>
      <DetailBox :heading="note.name">
        <template #actions>
          <Edit to="edit/" />
          <Delete to="delete/" />
        </template>
        <template v-if="note.content" #content>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <article class="prose" v-html="note.content"></article>
        </template>
      </DetailBox>
    </detail-grid>
  </backend-box>
</template>

<script>
import NotesNoteBreadcrumb from "../../components/NotesNoteBreadcrumb.vue";
import BackendBox from "../../components/BackendBox.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import DetailBox from "../../components/Box/Detail.vue";
import Edit from "../../components/Action/Edit.vue";
import Delete from "../../components/Action/Delete.vue";

export default {
  components: {
    Edit,
    Delete,
    NotesNoteBreadcrumb,
    DetailBox,
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
