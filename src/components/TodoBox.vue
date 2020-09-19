<template>
  <general-box v-bind:heading="heading" :style="{ 'height': todosMinHeight }">
    <div>
      <transition-group name="todo" tag="div" class="relative">
        <todo-item
          v-on:changed="todoChanged"
          v-for="todo in unarchivedTodos"
          :key="todo.url"
          v-bind:todo="todo"
          class="todo-item"
        ></todo-item>
      </transition-group>
    </div>
  </general-box>
</template>

<script>
import GeneralBox from "@/components/GeneralBox.vue";
import TodoItem from "@/components/TodoItem.vue";
import axios from "@/plugins/backendAxios.js";

export default {
  name: "TodoBox",
  components: {
    GeneralBox,
    TodoItem,
  },
  props: {
    url: {
      required: true,
      type: String,
    },
    heading: {
      required: true,
      type: String,
    },
  },
  data: function () {
    return {
      todos: [],
    };
  },
  computed: {
    todosMinHeight: function () {
      return String(8 * 56 - 8) + "px";
      // return String(this.unarchivedTodos.length * 56 - 8) + "px";
    },
    unarchivedTodos: function () {
      return this.todos.filter((todo) => !todo.is_archived);
    },
  },
  mounted() {
    axios.get(this.url).then((response) => (this.todos = response.data));
  },
  methods: {
    todoChanged: function (data) {
      let index = this.todos.findIndex((todo) => todo.url === data.url);
      if (index !== -1) {
        this.todos.splice(index, 1, data);
      }
    },
  },
};
</script>
