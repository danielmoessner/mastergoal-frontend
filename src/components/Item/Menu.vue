<template>
  <button
    :class="{ 'bg-gray-100': open, 'rounded-r-lg': last }"
    class="text-gray-400 h-12 flex w-12 items-center justify-center cursor-pointer border-l border-gray-100 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 ring-gray-300 ring-inset"
    @click="open = !open"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
      />
    </svg>
  </button>
  <div
    v-show="open"
    class="absolute bg-white space-y-0.5 translate-y-full transform ring-1 ring-gray-200 rounded-lg shadow bottom-0 right-0 px-1 py-1 z-20"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    last: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>
