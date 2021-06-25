<template>
  <BackendBox v-if="note && storeNote">
    <NotesNoteBreadcrumb :note="storeNote">
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink
        text="Edit"
        :link="'/n/' + $route.params.id + '/edit/'"
      ></BreadcrumbLink>
    </NotesNoteBreadcrumb>
    <GeneralBox class="col-span-2 md:col-span-3 xl:col-span-4">
      <DynamicForm
        action="notes/patchNote"
        success="Note saved"
        submit="Save"
        :initial="note"
        :fields="$store.getters['notes/noteFormFields']"
      />
    </GeneralBox>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import NotesNoteBreadcrumb from "../../components/NotesNoteBreadcrumb.vue";
import DynamicForm from "../../components/DynamicForm.vue";
import GeneralBox from "../../components/Box/General.vue";

export default {
  components: {
    GeneralBox,
    DynamicForm,
    BackendBox,
    BreadcrumbLink,
    BreadcrumbDivider,
    NotesNoteBreadcrumb,
  },
  data() {
    return {
      note: null,
    };
  },
  computed: {
    storeNote() {
      return this.$store.getters["notes/note"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store
      .dispatch("notes/fetchNote", this.$route.params.id)
      .then((note) => (this.note = note));
    this.$store.dispatch("notes/fetchNotes");
  },
};
</script>
