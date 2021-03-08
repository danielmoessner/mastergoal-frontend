<template>
  <component
    :is="is"
    :to="to"
    :type="type"
    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    is: {
      default: "router-link",
      type: String,
    },
    to: {
      default: null,
      type: [String, null],
    },
    type: {
      default: null,
      type: [String, null],
    },
  },
};
</script>
