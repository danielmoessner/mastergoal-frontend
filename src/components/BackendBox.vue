<template>
  <div id="vue-main" class="flex bg-gray-100 w-full flex-wrap">
    <aside class="w-full md:w-1/4 lg:w-1/4 xl:w-1/6">
      <left-navigation :navigation="navigation"></left-navigation>
    </aside>
    <main class="w-full md:w-3/4 lg:w-3/4 xl:w-5/6">
      <top-navigation></top-navigation>
      <div class="p-8">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
import LeftNavigation from "@/components/LeftNavigation.vue";
import TopNavigation from "@/components/TopNavigation.vue";

export default {
  name: "BackendBox",
  components: { LeftNavigation, TopNavigation },
  data() {
    return {
      navigation: [
        {
          name: "Todos",
          links: [
            {
              name: "Dashboard",
              url: "/",
              icon:
                '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
            },
            {
              name: "List",
              url: "/all",
              icon:
                '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
            },
            {
              name: "Add",
              url: "/add",
              icon:
                '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
            },
          ],
        },
        {
          name: "Goals",
          links: [
            {
              name: "Dashboard",
              url: "#",
              icon:
                '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
            },
            {
              name: "Strategy",
              url: "#",
              icon:
                '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
            },
            {
              name: "Tree",
              url: "#",
              icon:
                '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
            },
            {
              name: "Star",
              url: "#",
              icon:
                '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
            },
            {
              name: "Add",
              url: "#",
              icon:
                '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
            },
            {
              name: "All",
              url: "#",
              icon:
                '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
            },
          ],
        },
        {
          name: "Notes",
          links: [
            {
              name: "Dashboard",
              url: "#",
              icon:
                '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>