<template>
  <div
    class="flex-1 flex-row flex h-12 items-center overflow-y-hidden overflow-x-scroll md:overflow-x-auto"
  >
    <div class="flex-col flex pr-5">
      <div class="block text-gray-900 leading-tight truncate">
        {{ todo.name }}
        <span v-if="todo.type === 'REPETITIVE'">{{ todo.repetitions }}</span>
      </div>
      <div class="flex flex-row space-x-5">
        <div
          v-if="showDeadline"
          class="flex text-xs text-gray-500 leading-tight whitespace-nowrap"
          :class="{ 'text-red-500': deadlineIsBeforeToday }"
        >
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="ml-1">{{ timeToDeadline }}</span>
        </div>
        <div
          v-if="showDuration"
          class="flex text-xs text-gray-500 leading-tight whitespace-nowrap"
        >
          <svg
            class="w-4 h-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="ml-1">{{ getDuration(todo.duration) }}</span>
        </div>
        <div
          v-if="showReactivate"
          class="flex text-xs text-gray-500 leading-tight whitespace-nowrap"
        >
          <svg
            class="w-4 h-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"
            />
          </svg>
          <span class="ml-1">{{ getReactivate(todo.duration) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    showReactivate() {
      return this.todo.type === "NEVER_ENDING";
    },
    showDeadline() {
      return this.todo.status === "ACTIVE" && this.todo.deadline;
    },
    showDuration() {
      return this.todo.type === "REPETITIVE";
    },
    deadlineIsBeforeToday() {
      if (!this.todo.deadline) return null;
      return moment(this.todo.deadline).isBefore(moment());
    },
    timeToDeadline() {
      if (!this.todo.deadline) return "";
      const timeToDeadline = moment(this.todo.deadline).fromNow(true);
      const timeToDeadlineString = this.deadlineIsBeforeToday
        ? `Overdue for ${timeToDeadline}`
        : `Due in ${timeToDeadline}`;
      return timeToDeadlineString;
    },
  },
  methods: {
    getDuration(duration) {
      const days = moment.duration(duration).asDays();
      if (days === 1) return "Repeats every day";
      return `Repeats every ${days} days`;
    },
    getReactivate(duration) {
      const days = moment.duration(duration).asDays();
      if (days === 1) return "Reappears a day after completion";
      return `Reappears ${Math.round(days * 100) / 100} days after completion`;
    },
  },
};
</script>
