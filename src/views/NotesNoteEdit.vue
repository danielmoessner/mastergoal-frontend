<template>
  <backend-box>
    <notes-note-breadcrumb :note="note">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        :link="'/n/' + $route.params.id + '/edit/'"
      ></breadcrumb-link>
    </notes-note-breadcrumb>
    <detail-grid>
      <general-box class="col-span-2 md:col-span-6">
        <!-- <vue-editor class="mb-3" v-model="formData.content"></vue-editor> -->
        <submit-button
          class="ml-auto"
          text="Save"
          @click.prevent.native="submit"
        ></submit-button>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import NotesNote from "../mixins/NotesNote.js";
import axios from "../plugins/backendAxios.js";
// import { VueEditor } from "vue2-editor";
import SubmitButton from "../components/SubmitButton.vue";

export default {
  name: "NotesNoteEdit",
  mixins: [NotesNote],
  components: {
    // VueEditor,
    SubmitButton,
  },
  data() {
    return {
      name: "edit-note-form",
      formData: {
        content: "",
      },
    };
  },
  watch: {
    note() {
      this.formData = this.note;
    },
  },
  methods: {
    submit() {
      axios
        .put(this.note.url, this.formData)
        .then((response) => this.$router.push("/n/" + response.data.id + "/"))
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
