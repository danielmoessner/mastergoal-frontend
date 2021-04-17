<template>
  <div :class="bg" class="border rounded-lg relative col-span-3">
    <div class="flex flex-row h-12">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: "bg-white",
    },
  },
};
</script>
