<template>
  <div
    class="flex w-full h-12 px-4 md:justify-center bg-gray-800 rounded-br-lg md:rounded-r-lg items-center justify-between relative"
  >
    <div class="md:absolute inset-0 w-full h-full flex items-center">
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
