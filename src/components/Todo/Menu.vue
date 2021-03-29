<template>
  <button
    type="button"
    @click="open = !open"
    :class="{ 'bg-gray-100': open }"
    class="text-gray-400 h-12 flex w-12 items-center justify-center cursor-pointer rounded-r-lg border-l border-gray-100 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="w-5 h-5"
    >
      <path
        d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
      />
    </svg>
  </button>
  <div
    class="absolute bg-white space-y-0.5 -translate-y-full transform ring-1 ring-gray-200 rounded-lg shadow top-0 right-0 px-1 py-1"
    :class="{ hidden: !open, block: open }"
  >
    <router-link
      :to="`/t/list/todos/${todo.id}/delete/`"
      class="block px-2 py-1 hover:bg-gray-100 text-gray-500 hover:text-gray-700 cursor-pointer rounded text-sm"
    >
      Delete
    </router-link>
    <router-link
      :to="`/t/list/todos/${todo.id}/edit/`"
      class="block px-2 py-1 hover:bg-gray-100 text-gray-500 hover:text-gray-700 cursor-pointer rounded text-sm"
    >
      Edit
    </router-link>
    <button
      type="button"
      @click="setFailed"
      class="px-2 py-1 hover:bg-gray-100 text-gray-500 hover:text-gray-700 cursor-pointer rounded text-sm focus:outline-none"
    >
      Set failed
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  emits: ["setFailed"],
  methods: {
    setFailed() {
      this.open = false;
      this.$emit("setFailed");
    },
  },
};
</script>
