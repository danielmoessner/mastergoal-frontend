<template>
  <backend-box>
    <heading-one text="Dashboard"></heading-one>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box heading="Active todos" :style="{ 'height': toDosMinHeight }">
        <div>
          <transition-group name="todo" tag="div" id="to-dos-1" class="relative">
            <todo-item
              v-on:changed="toDoChanged"
              v-for="todo in activeToDos"
              v-bind:key="todo.url"
              v-bind:todo="todo"
              class="todo-item"
            ></todo-item>
          </transition-group>
        </div>
      </general-box>
      <general-box heading="Todos done today" :style="{ 'height': toDosMinHeight }">
        <div>
          <transition-group name="todo" tag="div" id="to-dos-2" class="relative">
            <todo-item
              v-on:changed="toDoChanged"
              v-for="todo in doneToDos"
              :key="todo.url"
              v-bind:todo="todo"
              class="todo-item"
            ></todo-item>
          </transition-group>
        </div>
      </general-box>
      <general-box heading="Add todo for this week">
        <alert-box v-bind:message="this.message"></alert-box>
        <add-week-todo-form v-on:response="created"></add-week-todo-form>
      </general-box>
      <general-box heading="Add todo for next week">
        <alert-box v-bind:message="this.message2"></alert-box>
        <add-week-todo-form
          v-on:response="created2"
          v-bind:weeks="1"
          label="What is there to be done next week?"
        ></add-week-todo-form>
      </general-box>
    </div>
  </backend-box>
</template>


<script>
import BackendBox from "@/components/BackendBox.vue";
import GeneralBox from "@/components/GeneralBox.vue";
import HeadingOne from "@/components/HeadingOne.vue";
import TodoItem from "@/components/TodoItem.vue";
import AddWeekTodoForm from "@/components/AddWeekTodoForm.vue";
import AlertBox from "@/components/AlertBox.vue";
import axios from "@/plugins/backendAxios.js";

export default {
  name: "TodoDashboard",
  components: {
    BackendBox,
    GeneralBox,
    HeadingOne,
    TodoItem,
    AddWeekTodoForm,
    AlertBox,
  },
  computed: {
    allToDos: function () {
      return this.toDos.concat(this.todayDoneToDos);
    },
    activeToDos: function () {
      return this.allToDos.filter((toDo) => { return toDo.status === "ACTIVE" });
    },
    doneToDos: function () {
      return this.allToDos.filter((toDo) => { return toDo.status === "DONE" });
    },
    toDosMinHeight: function () {
      return String(6 * 56 - 8) + "px";
      // return String(this.allToDos.length * 56 - 8) + 'px'
    },
  },
  data: function () {
    return {
      toDos: [],
      todayDoneToDos: [],
      message: "",
      message2: "",
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch: function () {
      axios
        .get("/t/api/todos/main/")
        .then((response) => (this.toDos = response.data));
      axios
        .get("/t/api/todos/done_today/")
        .then((response) => (this.todayDoneToDos = response.data));
    },
    toDoChanged: function (data) {
      let index = this.toDos.findIndex((toDo) => toDo.url === data.url);
      if (index !== -1) {
        this.toDos.splice(index, 1, data);
      } else {
        index = this.todayDoneToDos.findIndex((toDo) => toDo.url === data.url);
        if (index !== -1) {
          this.todayDoneToDos.splice(index, 1, data);
        }
      }
    },
    created: function (data) {
      this.message = "Todo '" + data.name + "' created";
      this.toDos.push(data);
    },
    created2: function (data) {
      this.message2 = "Todo '" + data.name + "' created";
    },
  },
};
</script>