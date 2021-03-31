<template>
  <abbr :title="abbr">
    <router-link
      :to="to"
      class="text-gray-400 focus:outline-none active:bg-gray-100 p-1 rounded hover:bg-gray-50 block"
    >
      <slot />
    </router-link>
  </abbr>
</template>

<script>
export default {
  props: {
    abbr: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
