<template>
  <BackendBox v-if="note">
    <NotesNoteBreadcrumb :note="note">
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink
        text="Edit"
        :link="'/n/' + $route.params.id + '/edit/'"
      ></BreadcrumbLink>
    </NotesNoteBreadcrumb>
    <div class="bg-white relative">
      <QuillEditor
        v-model:content="note.content"
        content-type="html"
        theme="snow"
        toolbar="full"
        @textChange="textChanged"
      />
      <div class="text-sm text-gray-700 absolute right-0 bottom-0 px-2 py-1">
        {{ isSaved ? "Saved" : "Not saved.." }}
      </div>
    </div>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import NotesNoteBreadcrumb from "../../components/NotesNoteBreadcrumb.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  components: {
    QuillEditor,
    BackendBox,
    BreadcrumbLink,
    BreadcrumbDivider,
    NotesNoteBreadcrumb,
  },
  data() {
    return {
      isSaved: true,
      interval: null,
      contentSet: false,
    };
  },
  computed: {
    note() {
      return this.$store.getters["notes/note"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("notes/fetchNotes");
    this.interval = setInterval(this.checkSave, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    textChanged() {
      this.isSaved = false;
    },
    checkSave() {
      if (!this.isSaved) this.save();
    },
    save() {
      this.$store.dispatch("notes/patchNote", this.note);
      this.isSaved = true;
    },
  },
};
</script>
