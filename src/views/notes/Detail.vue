<template>
  <BackendBox v-if="note">
    <NotesNoteBreadcrumb :note="note"> </NotesNoteBreadcrumb>
    <DetailGrid>
      <DetailBox :heading="note.name">
        <template #actions>
          <Edit to="edit/" />
          <Delete to="delete/" />
        </template>
        <template v-if="note.content" #content>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <article class="prose break-words" v-html="note.content"></article>
        </template>
      </DetailBox>
    </DetailGrid>
  </BackendBox>
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
  data() {
    return {
      note: null,
    };
  },
  mounted() {
    this.$store
      .dispatch("notes/fetchNote", this.$route.params.id)
      .then((note) => (this.note = note));
  },
};
</script>
