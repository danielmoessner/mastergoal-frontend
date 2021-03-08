<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/t/add" text="Add"></breadcrumb-link>
    </breadcrumb-navigation>
    <general-box v-bind:overflow="false">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <overview-item
          name="Normal-Todo"
          link="/t/add/normal-todo"
          v-bind:iconPaths="normalIconPaths"
        ></overview-item>
        <overview-item
          name="Never-Ending-Todo"
          link="/t/add/never-ending-todo"
          v-bind:iconPaths="neverEndingIconPaths"
        ></overview-item>
        <overview-item
          name="Repetitive-Todo"
          link="/t/add/repetitive-todo"
          v-bind:iconPaths="repetitiveIconPaths"
        ></overview-item>
        <overview-item
          name="Pipeline-Todo"
          link="/t/add/pipeline-todo"
          v-bind:iconPaths="pipelineIconPaths"
        ></overview-item>
      </div>
    </general-box>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import OverviewItem from "../../components/OverviewItem.vue";
import GeneralBox from "../../components/GeneralBox.vue";

export default {
  name: "TodosAdd",
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
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />',
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
