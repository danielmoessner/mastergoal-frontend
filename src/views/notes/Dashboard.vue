<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/n/dashboard" text="Dashboard"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <div class="space-y-2 mb-4">
      <NoteItem v-for="note in notes" :key="note.url" :note="note"></NoteItem>
    </div>
    <NoteAddBox />
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import NoteItem from "../../components/NoteItem.vue";
import { mapGetters } from "vuex";
import NoteAddBox from "../../components/NoteAddBox.vue";

export default {
  components: {
    NoteAddBox,
    BackendBox,
    NoteItem,
    BreadcrumbNavigation,
    BreadcrumbLink,
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
