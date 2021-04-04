<template>
  <div id="vue-main" class="flex bg-gray-200 w-full flex-wrap">
    <aside class="w-full md:w-64">
      <left-navigation></left-navigation>
    </aside>
    <main class="w-full md:flex-1">
      <transition name="fade">
        <alert-box
          v-if="alert.message"
          :message="alert.message"
          :type="alert.type"
        ></alert-box>
      </transition>
      <div class="p-4 md:p-8">
        <div class="max-w-2xl w-full mx-auto">
          <slot></slot>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import LeftNavigation from "../components/LeftNavigation.vue";
import AlertBox from "../components/AlertBox.vue";

export default {
  name: "BackendBox",
  components: { LeftNavigation, AlertBox },
};
</script>
