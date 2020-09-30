<template>
  <div id="vue-main" class="flex bg-gray-100 w-full flex-wrap">
    <aside class="w-full md:w-1/4 lg:w-1/4 xl:w-1/6">
      <left-navigation :navigation="navigation"></left-navigation>
    </aside>
    <main class="w-full md:w-3/4 lg:w-3/4 xl:w-5/6 pb-64">
      <top-navigation></top-navigation>
      <transition name="fade">
        <alert-box v-if="alert.message" v-bind:message="alert.message" v-bind:type="alert.type"></alert-box>
      </transition>
      <div class="p-8">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
import LeftNavigation from "@/components/LeftNavigation.vue";
import TopNavigation from "@/components/TopNavigation.vue";
import AlertBox from "@/components/AlertBox.vue";

export default {
  name: "BackendBox",
  components: { LeftNavigation, TopNavigation, AlertBox },
  data() {
    return {
      navigation: [
        {
          name: "Todos",
          links: [
            {
              name: "Dashboard",
              url: "/t/dashboard",
              icon:
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />',
            },
            {
              name: "List",
              url: "/t/all",
              icon:
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />',
            },
            {
              name: "Add",
              url: "/t/add",
              icon:
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />',
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
