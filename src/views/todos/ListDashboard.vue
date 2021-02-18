<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/t/list" text="List"></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box v-bind:overflow="false">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <overview-item
            name="Normal-Todos"
            link="/t/list/normal-todos"
            v-bind:iconPaths="normalIconPaths"
          ></overview-item>
          <overview-item
            name="Never-Ending-Todos"
            link="/t/list/never-ending-todos"
            v-bind:iconPaths="neverEndingIconPaths"
          ></overview-item>
          <overview-item
            name="Repetitive-Todos"
            link="/t/list/repetitive-todos"
            v-bind:iconPaths="repetitiveIconPaths"
          ></overview-item>
          <overview-item
            name="Pipeline-Todos"
            link="/t/list/pipeline-todos"
            v-bind:iconPaths="pipelineIconPaths"
          ></overview-item>
        </div>
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import OverviewItem from "../../components/OverviewItem.vue";
import GeneralBox from "../../components/GeneralBox.vue";

export default {
  name: "TodosList",
  components: {
    GeneralBox,
    OverviewItem,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
  },
  data() {
    return {
      neverEndingIconPaths:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />',
      pipelineIconPaths:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />',
      repetitiveIconPaths:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />',
      normalIconPaths:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />',
    };
  },
};
</script>
