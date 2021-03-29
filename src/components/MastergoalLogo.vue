<template>
  <div
    class="flex w-full h-12 px-4 bg-gray-800 rounded-br-lg items-center md:rounded-r-lg"
  >
    <div class="max-w-2xl w-full mx-auto">
      <div class="flex items-center justify-between">
        <div class="text-2xl font-semibold text-gray-100">Mastergoal</div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MastergoalSvgLogo from "../components/MastergoalSvgLogo.vue";

export default {
  name: "MastergoalLogo",
  components: { MastergoalSvgLogo },
};
</script>
