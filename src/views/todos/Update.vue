<template>
  <BackendBox v-if="todo">
    <TodosTodoBreadcrumb :todo="todo" :todo-list-url="todoListUrl">
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink
        text="Edit"
        :link="`/t/list/todos/${todo.id}/edit/`"
      ></BreadcrumbLink>
    </TodosTodoBreadcrumb>
    <GeneralBox class="col-span-2 md:col-span-3 xl:col-span-4">
      <DynamicForm
        :fields="$store.getters['todos/todoFormFields'](todo.type)"
        :initial="todo"
        submit="Save"
        success="Todo changed"
        action="todos/patchTodo"
      />
    </GeneralBox>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GeneralBox from "../../components/Box/General.vue";
import TodosTodoBreadcrumb from "../../components/TodosTodoBreadcrumb.vue";
import DynamicForm from "../../components/DynamicForm.vue";

export default {
  name: "TodosTodoEdit",
  components: {
    GeneralBox,
    BackendBox,
    TodosTodoBreadcrumb,
    BreadcrumbDivider,
    BreadcrumbLink,
    DynamicForm,
  },
  computed: {
    todo() {
      return this.$store.getters["todos/todo"](this.$route.params.id);
    },
    todoListUrl() {
      return this.$store.getters["todos/todoListUrl"](this.todo);
    },
  },
  mounted() {
    this.$store.dispatch("todos/fetchTodos");
  },
};
</script>
