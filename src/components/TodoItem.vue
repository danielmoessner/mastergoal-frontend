<template>
  <div
    class="flex items-stretch border rounded-lg mb-2 last:mb-0 w-full justify-between bg-white h-12"
  >
    <div class="flex items-center pl-4 w-9/12">
      <input
        v-if="todo.status === 'ACTIVE'"
        v-on:change="change"
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
          class="block text-gray-800 leading-tight truncate"
          v-html="todo.name"
        ></span>
        <span
          class="block text-xs text-gray-800 leading-tight"
          v-bind:class="{ 'text-red-500': deadlineIsBeforeToday }"
          v-html="timeToDeadline"
          v-if="deadline"
        ></span>
      </div>
    </div>
    <navigation-button
      v-bind:text="'Open'"
      v-bind:link="'/t/list/todos/' + todo.id"
    ></navigation-button>
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
    change: function () {
      const payload = {
        url: this.todo.url,
        data: {
          status: this.checked ? "DONE" : "ACTIVE",
        },
      };
      this.$store.dispatch("todos/patchTodo", payload);
    },
  },
};
</script>
