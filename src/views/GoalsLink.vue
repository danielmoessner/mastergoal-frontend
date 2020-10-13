<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link text="Links" link="/g/list/links"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-if="link"
        v-bind:text="linkName"
        v-bind:link="'/g/list/links/' + link.id"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <detail-grid>
      <goal-item
        v-if="mastergoal"
        v-bind:goal="mastergoal"
        type="Mastergoal"
      ></goal-item>
    </detail-grid>
    <detail-grid>
      <general-box
        class="col-span-2 lg:col-span-2 xl:col-span-3"
        v-bind:overflow="false"
      >
        <heading-one :text="linkName"></heading-one>
        <hr>
        <property-short property="Weight" :short="link.weight"></property-short>
        <hr>
        <property-short property="Archived" :short="link.is_archived">
          <form-button
            v-on:response="changed"
            text="Toggle"
            v-if="link"
            v-bind:link="link.url"
            v-bind:data="{ is_archived: !link.is_archived }"
          ></form-button>
        </property-short>
        <hr>
        <href-form-button to="edit/" text="Edit"></href-form-button>
      </general-box>
    </detail-grid>
    <detail-grid>
      <goal-item
        v-if="subgoal"
        v-bind:goal="subgoal"
        type="Subgoal"
      ></goal-item>
    </detail-grid>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import axios from "@/plugins/backendAxios.js";
import GeneralBox from "@/components/GeneralBox.vue";
import FormButton from "@/components/FormButton.vue";
import GoalItem from "@/components/GoalItem.vue";
import DetailGrid from "@/components/DetailGrid.vue";
import HrefFormButton from "@/components/HrefFormButton.vue";
import PropertyShort from "@/components/PropertyShort.vue";
import HeadingOne from "@/components/HeadingOne.vue";

export default {
  name: "GoalDetail",
  components: {
    DetailGrid,
    HrefFormButton,
    PropertyShort,
    FormButton,
    BackendBox,
    BreadcrumbLink,
    HeadingOne,
    BreadcrumbDivider,
    BreadcrumbNavigation,
    GeneralBox,
    GoalItem,
  },
  computed: {
    url() {
      return "/g/api/links/" + this.$route.params.id + "/";
    },
    mastergoal() {
      if (!this.link) return false;
      return this.link.mastergoal;
    },
    subgoal() {
      if (!this.link) return false;
      return this.link.subgoal;
    },
    linkName() {
      if (!this.link) return "";
      return this.link.mastergoal.name + " --> " + this.link.subgoal.name;
    },
  },
  data() {
    return {
      link: false,
    };
  },
  mounted() {
    this.fetch();
  },
  watch: {
    url() {
      this.fetch();
    },
  },
  methods: {
    changed(data) {
      this.link = data;
    },
    fetch() {
      axios.get(this.url).then((response) => (this.link = response.data));
    },
  },
};
</script>
