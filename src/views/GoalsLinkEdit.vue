<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link text="links" link="/g/list/links"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-if="link"
        v-bind:text="linkName"
        v-bind:link="'/g/list/links/' + link.id"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        v-bind:link="'/g/list/links/' + link.id + '/edit/'"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <detail-grid>
      <general-box
        v-bind:overflow="false"
        class="col-span-2 lg:col-span-3 xl:col-span-3"
      >
        <formulate-form v-on:submit="submit" :name="name" v-model="formData">
          <formulate-input
            type="number"
            label="Weight"
            name="weight"
            id="weight"
            validation="required|min:0"
          >
          </formulate-input>
          <formulate-input type="submit" value="Save"> </formulate-input>
        </formulate-form>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import axios from "@/plugins/backendAxios.js";
import DetailGrid from "@/components/DetailGrid.vue";
import GeneralBox from "@/components/GeneralBox.vue";

export default {
  name: "GoalsLinkEdit",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
  },
  data() {
    return {
      link: false,
      name: "edit-link-form",
      formData: {},
    };
  },
  computed: {
    url() {
      return "/g/api/links/" + this.$route.params.id + "/";
    },
    linkName() {
      return this.link.mastergoal.name + " --> " + this.link.subgoal.name;
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios.get(this.url).then((response) => {
        this.link = response.data;
        this.formData = response.data;
      });
    },
    submit() {
      axios
        .put(this.link.url, this.formData)
        .then((response) =>
          this.$router.push("/g/list/links/" + response.data.id + "/")
        )
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
