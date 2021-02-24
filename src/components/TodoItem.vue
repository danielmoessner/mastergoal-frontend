<template>
  <div
    class="flex items-stretch border rounded-lg mb-2 last:mb-0 w-full justify-between bg-white h-12 relative"
  >
    <div class="flex items-center pl-4 w-9/12">
      <input
        v-if="todo.status === 'ACTIVE'"
        v-on:change="setStatus('DONE')"
        v-model="checked"
        name="completed"
        value="true"
        class="w-4 h-4 mr-3 cursor-pointer flex-shrink-0"
        type="checkbox"
      />
      <div
        class="mr-3 flex-shrink-0 text-green-800"
        v-if="todo.status === 'DONE'"
      >
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="mr-3 flex-shrink-0 text-red-600"
        v-if="todo.status === 'FAILED'"
      >
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="flex flex-col max-w-full overflow-x-scroll md:overflow-x-auto"
      >
        <div class="block text-gray-900 leading-tight truncate">
          {{ todo.name }}
          <span v-if="todo.type === 'REPETITIVE'">{{ todo.repetitions }}</span>
        </div>
        <div class="flex flex-row space-x-5">
          <div
            class="flex text-xs text-gray-500 leading-tight whitespace-nowrap"
            v-bind:class="{ 'text-red-500': deadlineIsBeforeToday }"
            v-if="showDeadline"
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
    <button
      type="button"
      @click="open = !open"
      class="text-gray-400 h-full flex w-12 items-center justify-center cursor-pointer rounded-r-lg border-l border-gray-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset"
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
        @click="
          setStatus('FAILED');
          open = false;
        "
        class="px-2 py-1 hover:bg-gray-100 text-gray-500 hover:text-gray-700 cursor-pointer rounded text-sm focus:outline-none"
      >
        Set failed
      </button>
    </div>
  </div>
</template>

<script type="module">
import NavigationButton from "../components/NavigationButton.vue";
import moment from "moment";

export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
  data: function () {
    return {
      checked: this.todo.status === "DONE",
      open: false,
    };
  },
  components: {
    NavigationButton,
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
    setStatus: function (status) {
      const payload = {
        url: this.todo.url,
        data: {
          status: status,
        },
      };
      this.$store.dispatch("todos/patchTodo", payload);
    },
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
