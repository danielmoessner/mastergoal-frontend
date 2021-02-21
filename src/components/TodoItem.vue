<template>
  <div
    class="flex items-stretch border rounded-lg mb-2 last:mb-0 w-full justify-between bg-white h-12"
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
      <div class="flex flex-col max-w-full">
        <span
          class="block text-gray-900 leading-tight truncate"
          v-html="todo.name"
        ></span>
        <div class="flex flex-row space-x-2">
          <span
            class="block text-xs text-gray-500 leading-tight"
            v-bind:class="{ 'text-red-500': deadlineIsBeforeToday }"
            v-if="deadline"
            >{{ timeToDeadline }}</span
          >
        </div>
      </div>
    </div>
    <div class="relative w-full flex justify-end">
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
        <router-link
          :to="`/t/list/todos/${todo.id}/edit/`"
          class="block px-2 py-1 hover:bg-gray-100 text-gray-500 hover:text-gray-700 cursor-pointer rounded text-sm"
        >
          Edit
        </router-link>
      </div>
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
    deadline() {
      return this.todo.deadline ? moment(this.todo.deadline) : null;
    },
    deadlineIsBeforeToday() {
      if (!this.deadline) return null;
      return this.deadline.isBefore(moment());
    },
    timeToDeadline() {
      if (this.todo.status !== "ACTIVE") return "";
      if (!this.deadline) return "";
      const timeToDeadline = this.deadline.fromNow(true);
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
  },
};
</script>
