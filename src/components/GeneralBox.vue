<template>
  <div
    class="shadow-sm rounded-lg border-gray-200 flex flex-col items-baseline bg-white"
    v-bind:class="{ 'overflow-y-scroll': overflow }"
  >
    <h2
      class="text-xl bg-blue-900 text-gray-100 rounded-br-lg rounded-tl-lg px-4 py-2 font-semibold absolute z-10"
      v-if="heading"
    >
      {{ heading }}
    </h2>
    <div class="p-4 w-full" v-bind:class="{ 'pt-16': heading }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "GeneralBox",
  props: {
    heading: {
      type: String,
      default: "",
    },
    overflow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>