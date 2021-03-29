<template>
  <div class="py-2 sm:grid sm:grid-cols-2 sm:gap-2">
    <dt class="text-sm font-medium text-gray-500">{{ label }}</dt>
    <dd class="mt-1 text-sm text-gray-900 sm:mt-0">{{ info }}</dd>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
  },
};
</script>
