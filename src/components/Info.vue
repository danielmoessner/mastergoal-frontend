<template>
  <div class="text-gray-400 flex items-center space-x-1">
    <abbr :title="abbr">
      <slot />
    </abbr>
    <div class="text-sm text-gray-500">{{ info }}</div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: [String, Number],
      required: true,
    },
    abbr: {
      type: String,
      required: true,
    },
  },
};
</script>
