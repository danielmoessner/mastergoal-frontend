<template>
  <div
    class="rounded-lg bg-white overflow-hidden mb-4 overflow-x-scroll lg:overflow-x-auto"
  >
    <div class="flex divide-x-2 divide-gray-100">
      <Box
        v-for="(box, index) in content"
        :key="index"
        :heading="box.heading"
        :text="box.text"
      />
      <slot />
    </div>
  </div>
</template>

<script>
import Box from "./Box.vue";

export default {
  components: {
    Box,
  },
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
};
</script>
