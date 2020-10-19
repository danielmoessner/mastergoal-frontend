<template>
  <backend-box>
    <notes-note-breadcrumb :note="note">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Delete"
        :link="'/n/' + $route.params.id + '/delete/'"
      ></breadcrumb-link>
    </notes-note-breadcrumb>
    <detail-grid>
      <general-box class="col-span-2 md:col-span-3" :overflow="false">
        <div class="flex-col flex justify-start items-start">
          <p class="mb-4">Are you sure you want to delete '{{ note.name }}'?</p>
          <div class="flex items-end w-full justify-end">
            <navigation-button
              class="pt-2 pb-2"
              :link="'/n/' + $route.params.id + '/'"
              text="Cancel"
            ></navigation-button>
            <submit-button
              v-on:click.native.prevent="deleteNote"
              class="ml-2"
              text="Yes, delete"
            ></submit-button>
          </div>
        </div>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import NotesNote from "@/mixins/NotesNote.js";
import NavigationButton from "@/components/NavigationButton.vue";
import SubmitButton from "@/components/SubmitButton.vue";
import axios from "@/plugins/backendAxios.js";

export default {
  name: "NotesNoteDelete",
  mixins: [NotesNote],
  components: {
    NavigationButton,
    SubmitButton,
  },
  methods: {
    deleteNote() {
      axios
        .delete(this.note.url)
        .then(() => this.$router.push("/n/dashboard/"))
        .catch((error) => console.log(error));
    },
  },
};
</script>
