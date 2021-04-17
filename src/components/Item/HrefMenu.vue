<template>
  <router-link
    :class="{ 'rounded-r-lg': last }"
    class="text-gray-400 h-12 flex w-12 items-center justify-center cursor-pointer border-l border-gray-100 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 ring-gray-300 ring-inset"
    :to="to"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
        clip-rule="evenodd"
      />
    </svg>
  </router-link>
</template>

<script>
export default {
  props: {
    last: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
