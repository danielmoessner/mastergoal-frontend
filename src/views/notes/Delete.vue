<template>
  <backend-box v-if="note">
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
import HrefFormButton from "../../components/HrefFormButton.vue";
import NotesNoteBreadcrumb from "../../components/NotesNoteBreadcrumb.vue";
import BackendBox from "../../components/BackendBox.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GeneralBox from "../../components/GeneralBox.vue";
import SubmitButton from "../../components/SubmitButton.vue";

export default {
  components: {
    SubmitButton,
    HrefFormButton,
    NotesNoteBreadcrumb,
    GeneralBox,
    BreadcrumbDivider,
    BreadcrumbLink,
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
  methods: {
    deleteNote() {
      this.$store
        .dispatch("notes/deleteNote", this.note.url)
        .then(() => this.$router.push("/n/dashboard/"));
    },
  },
};
</script>
