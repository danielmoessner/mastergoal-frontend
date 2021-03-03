<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="Dashboard" link="/t/dashboard"></breadcrumb-link>
    </breadcrumb-navigation>
    <controls :content="controls">
      <div class="p-4 flex-1"></div>
      <button
        type="button"
        class="p-4 flex items-center justify-center cursor-pointer hover:bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset"
        @click="() => $store.dispatch('todos/changeTimeToPreviousWeek')"
      >
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        @click="() => $store.dispatch('todos/changeTimeToNextWeek')"
        class="rounded-r-lg p-4 flex items-center justify-center cursor-pointer hover:bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset"
      >
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </controls>
    <div>
      <todo-item
        v-for="todo in todosThisWeek"
        v-bind:key="todo.url"
        v-bind:todo="todo"
      />
    </div>
    <add-todo-form />
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import TodoItem from "../../components/todo/Index.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import { mapGetters } from "vuex";
import AddTodoForm from "../../components/AddTodoForm.vue";
import Controls from "../../components/Controls/Index.vue";

export default {
  name: "TodosDashboard",
  components: {
    BackendBox,
    Controls,
    AddTodoForm,
    TodoItem,
    BreadcrumbLink,
    BreadcrumbNavigation,
  },
  computed: {
    ...mapGetters({
      todosThisWeek: "todos/todosThisWeek",
      week: "todos/week",
      year: "todos/year",
      time: "todos/time",
    }),
    test() {
      return this.$store.state.todos.time;
    },
    done() {
      const all = this.todosThisWeek.length;
      const done = this.todosThisWeek.filter((todo) => todo.status === "DONE")
        .length;
      if (all === 0) {
        return "N/A";
      }
      return Math.round((done / all) * 100);
    },
    controls() {
      return [
        { heading: "ISO Week", text: this.week },
        { heading: "ISO Week Year", text: this.year },
        { heading: "Done", text: `${this.done} %` },
      ];
    },
  },
  mounted() {
    this.$store.dispatch("todos/fetchTodos");
  },
};
</script>
