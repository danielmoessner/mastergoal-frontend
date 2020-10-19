<template>
  <backend-box>
    <notes-note-breadcrumb :note="note">
      
    </notes-note-breadcrumb>
    <detail-grid>
      <general-box class="col-span-2 md:col-span-4">
        <!-- <heading-one :title="note.name"></heading-one> -->
        <article v-html="note.content" class="prose"></article>
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
import NotesNote from "@/mixins/NotesNote.js";
// import HeadingOne from "@/components/HeadingOne.vue";
import HrefFormButton from "@/components/HrefFormButton.vue";
export default {
  name: "NotesNoteDetail",
  mixins: [NotesNote],
  components: {
    // HeadingOne,
    HrefFormButton,
  },
};
</script>
