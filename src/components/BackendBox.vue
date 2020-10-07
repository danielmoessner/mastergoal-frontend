<template>
  <div id="vue-main" class="flex bg-gray-200 w-full flex-wrap">
    <aside class="w-full md:w-1/4 lg:w-1/4 xl:w-1/6">
      <left-navigation></left-navigation>
    </aside>
    <main class="w-full md:w-3/4 lg:w-3/4 xl:w-5/6 pb-64">
      <top-navigation></top-navigation>
      <transition name="fade">
        <alert-box
          v-if="alert.message"
          v-bind:message="alert.message"
          v-bind:type="alert.type"
        ></alert-box>
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
};
</script>
