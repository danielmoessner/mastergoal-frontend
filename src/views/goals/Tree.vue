<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink text="Tree" link="/g/tree"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <div class="grid gap-4 grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
      <GeneralBox :overflow="false">
        <TreeItem v-for="item in tree" :key="item.url" :item="item"></TreeItem>
      </GeneralBox>
    </div>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import axios from "../../plugins/backendAxios.js";
import GeneralBox from "../../components/Box/General.vue";
import TreeItem from "../../components/TreeItem.vue";

export default {
  name: "GoalsTree",
  components: {
    BackendBox,
    BreadcrumbLink,
    BreadcrumbNavigation,
    GeneralBox,
    TreeItem,
  },
  data() {
    return {
      tree: [],
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios.get("/goals/tree/").then((response) => (this.tree = response.data));
    },
  },
};
</script>
