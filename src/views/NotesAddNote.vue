<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/n/dashboard/" text="Dashboard"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link link="/n/add/" text="Add Note"></breadcrumb-link>
    </breadcrumb-navigation>
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
import BackendBox from "../components/BackendBox.vue";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import GeneralBox from "../components/GeneralBox.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import axios from "../plugins/backendAxios.js";
import DetailGrid from "../components/DetailGrid.vue";
// import { VueEditor } from "vue2-editor";
import SubmitButton from "../components/SubmitButton.vue";

export default {
  name: "NotesAddNote",
  components: {
    DetailGrid,
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    // VueEditor,
    SubmitButton,
    BreadcrumbDivider,
  },
  data() {
    return {
      formData: {
        content: "",
      },
    };
  },
  methods: {
    submit() {
      axios
        .post("/n/api/notes/", this.formData)
        .then((response) => this.$router.push("/n/" + response.data.id + "/"))
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
