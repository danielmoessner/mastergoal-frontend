<template>
  <div
    class="shadow-sm rounded-lg border-gray-200 flex flex-col items-baseline bg-white"
  >
    <h2
      v-if="heading"
      class="text-xl bg-blue-900 text-gray-100 rounded-br-lg rounded-tl-lg px-4 py-2 font-semibold absolute z-10"
    >
      {{ heading }}
    </h2>
    <div class="w-full" :class="{ 'pt-16': heading, 'p-4': padding }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneralBox",
  props: {
    heading: {
      type: String,
      default: "",
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
