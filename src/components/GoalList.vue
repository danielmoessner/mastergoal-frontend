<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/t/list" text="List"></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box v-bind:overflow="false">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <overview-item
            name="Goals"
            link="/g/list/goals"
            v-bind:iconPaths="goalsIcon"
          ></overview-item>
          <overview-item
            name="Monitors"
            link="/g/list/monitors"
            v-bind:iconPaths="monitorsIcon"
          ></overview-item>
          <overview-item
            name="Strategies"
            link="/g/list/strategies"
            v-bind:iconPaths="strategiesIcon"
          ></overview-item>
          <overview-item
            name="Links"
            link="/g/list/links"
            v-bind:iconPaths="linksIcon"
          ></overview-item>
        </div>
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import OverviewItem from "@/components/OverviewItem.vue";
import GeneralBox from "@/components/GeneralBox.vue";

export default {
  name: "TodoList",
  components: {
    GeneralBox,
    OverviewItem,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
  },
  data() {
    return {
      goalsIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />',
      linksIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />',
      strategiesIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />',
      monitorsIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />',
    };
  },
};
</script>
