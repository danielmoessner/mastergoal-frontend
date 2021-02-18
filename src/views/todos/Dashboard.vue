<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="Dashboard" link="/t/dashboard"></breadcrumb-link>
    </breadcrumb-navigation>
    <controls :content="controls">
      <div class="p-4 flex-1"></div>
      <div class="p-4">
        <span
          class="text-pink-600 font-bold tracking-wide cursor-pointer hover:underline"
          @click="() => $store.dispatch('todos/changeTimeToPreviousWeek')"
        >
          Previous Week
        </span>
      </div>
      <div class="p-4">
        <span
          @click="() => $store.dispatch('todos/changeTimeToNextWeek')"
          class="text-pink-600 font-bold tracking-wide cursor-pointer hover:underline"
        >
          Next Week
        </span>
      </div>
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
import TodoItem from "../../components/TodoItem.vue";
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
