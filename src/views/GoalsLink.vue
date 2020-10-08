<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link text="Links" link="/g/list/links"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-if="link"
        v-bind:text="'Link'"
        v-bind:link="'/g/list/links/' + link.id"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      <general-box
        class="col-span-2 lg:col-span-2 xl:col-span-3"
        v-bind:overflow="false"
      >
        <p>
          Weight:
          <span>{{ link.weight }}</span>
        </p>
        <p>
          Proportion:
          <span>{{ link.proportion }}</span>
        </p>
        <div class="flex justify-between items-center w-full">
          <p>
            Archived:
            <span>{{ link.is_archived }}</span>
          </p>
          <form-button
            v-on:response="changed"
            text="Toggle"
            v-if="link"
            v-bind:link="link.url"
            v-bind:data="{ is_archived: !link.is_archived }"
          ></form-button>
        </div>
        <p>
          Progress:
          <span>{{ link.progress }}</span>
        </p>
      </general-box>
      <goal-item v-if="mastergoal" v-bind:goal="mastergoal" type="Mastergoal"></goal-item>
      <goal-item v-if="subgoal" v-bind:goal="subgoal" type="Subgoal"></goal-item>
    </div>
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

export default {
  name: "GoalDetail",
  components: {
    FormButton,
    BackendBox,
    BreadcrumbLink,
    BreadcrumbDivider,
    BreadcrumbNavigation,
    GeneralBox,
    GoalItem,
  },
  computed: {
    url() {
      return "/g/api/links/" + this.$route.params.id + "/";
    },
  },
  data() {
    return {
      link: false,
      mastergoal: false,
      subgoal: false,
    };
  },
  mounted() {
    this.fetch();
  },
  watch: {
    url() {
      this.fetch();
    },
    link() {
      axios
        .get(this.link.sub_goal)
        .then((response) => (this.subgoal = response.data));
      axios
        .get(this.link.master_goal)
        .then((response) => (this.mastergoal = response.data));
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
