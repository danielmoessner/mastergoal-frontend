<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/n/dashboard" text="Dashboard"></breadcrumb-link>
    </breadcrumb-navigation>
    <detail-grid>
      <note-item v-for="note in notes" :key="note.url" :note="note"></note-item>
      <navigation-button
        link="/n/add/"
        text="Add a note"
        v-bind:icon="addIcon"
      ></navigation-button>
    </detail-grid>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import NoteItem from "../../components/NoteItem.vue";
import NavigationButton from "../../components/NavigationButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "NotesDashboard",
  components: {
    NavigationButton,
    BackendBox,
    NoteItem,
    BreadcrumbNavigation,
    BreadcrumbLink,
    DetailGrid,
  },
  data() {
    return {
      addIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />',
    };
  },
  computed: {
    ...mapGetters({
      notes: "notes/notes",
    }),
  },
  mounted() {
    this.$store.dispatch("notes/fetchNotes");
  },
};
</script>
