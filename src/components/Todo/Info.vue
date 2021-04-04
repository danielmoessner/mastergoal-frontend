<template>
  <button
    type="button"
    :class="{ 'bg-gray-100': open }"
    class="text-gray-400 h-12 flex w-12 items-center justify-center cursor-pointer border-l border-gray-100 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset"
    @click="open = !open"
  >
    <svg
      class="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  <div
    class="absolute bg-white space-y-0.5 translate-y-full transform ring-1 ring-gray-200 rounded-lg shadow bottom-0 right-0 px-3 py-1 z-10"
    :class="{ hidden: !open, block: open }"
  >
    <dl class="sm:divide-y sm:divide-gray-200">
      <InfoRow label="Name" :info="todo.name" />
      <InfoRow v-if="todo.blocked" label="Blocked" :info="todo.blocked" />
      <InfoRow
        v-if="todo.repetitions"
        label="Repetitions"
        :info="todo.repetitions"
      />
      <InfoRow v-if="todo.activate" label="Activate" :info="todo.activate" />
      <InfoRow v-if="todo.deadline" label="Deadline" :info="todo.deadline" />
      <InfoRow v-if="todo.completed" label="Completed" :info="todo.completed" />
      <InfoRow v-if="todo.duration" label="Duration" :info="todo.duration" />
      <InfoRow label="Status" :info="todo.status" />
      <InfoRow label="Type" :info="todo.type" />
      <InfoRow v-if="todo.notes" label="Notes" :info="todo.notes" />
    </dl>
  </div>
</template>

<script>
import InfoRow from "./InfoRow.vue";

export default {
  components: {
    InfoRow,
  },
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
};
</script>
