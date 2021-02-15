<template>
  <div
    class="flex w-full px-4 py-4 md:justify-center bg-blue-900 rounded-br-lg md:rounded-r-lg items-center justify-between"
  >
    <div class="h-8 flex items-center">
      <mastergoal-svg-logo></mastergoal-svg-logo>
      <span class="text-2xl font-semibold text-gray-100">Mastergoal</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import MastergoalSvgLogo from "../components/MastergoalSvgLogo.vue";

export default {
  name: "MastergoalLogo",
  components: { MastergoalSvgLogo },
};
</script>
