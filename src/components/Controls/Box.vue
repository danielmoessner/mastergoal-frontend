<template>
  <div class="py-4 px-6">
    <h2
      class="tracking-wide text-xs md:text-sm font-bold text-gray-600 whitespace-nowrap"
    >
      {{ heading }}
    </h2>
    <div
      class="whitespace-nowrap font-bold text-gray-800 text-xl md:text-2xl lg:text-4xl"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    heading: {
      type: [Number, String],
      required: true,
    },
    text: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>
