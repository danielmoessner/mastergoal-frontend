<template>
  <router-link
    :class="{ 'rounded-r-lg': last }"
    class="text-gray-400 h-12 flex w-12 items-center justify-center cursor-pointer border-l border-gray-100 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 ring-gray-300 ring-inset"
    :to="to"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </router-link>
</template>

<script>
export default {
  props: {
    last: {
      type: Boolean,
      default: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
