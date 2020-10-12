<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="Tree" link="/g/tree"></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid gap-4 grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
      <general-box v-bind:overflow="false"> 
        <tree-item v-bind:item="item" v-for="item in tree" v-bind:key="item.url"></tree-item>
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import axios from "@/plugins/backendAxios.js";
import GeneralBox from "@/components/GeneralBox.vue";
import TreeItem from '@/components/TreeItem.vue';

export default {
  name: "GoalsTree",
  components: {
    BackendBox,
    BreadcrumbLink,
    BreadcrumbNavigation,
    GeneralBox,
    TreeItem
  },
  data() {
    return {
      tree: [],
    };
  },
  methods: {
    fetch() {
      axios
        .get("/g/api/goals/tree/")
        .then((response) => (this.tree = response.data));
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
