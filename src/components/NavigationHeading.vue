<template>
  <li class="my-px">
    <div class="flex font-medium text-sm text-gray-400 mt-6 mb-2 uppercase">
      {{ heading }}
    </div>
  </li>
</template>

<script>
export default {
  name: "NavigationHeading",
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>
