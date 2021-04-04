<template>
  <backend-box v-if="todo">
    <todos-todo-breadcrumb :todo="todo" :todo-list-url="todoListUrl">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        :link="'/t/list/todos/' + todo.id + '/delete/'"
        text="Delete"
      ></breadcrumb-link>
    </todos-todo-breadcrumb>
    <general-box>
      <div class="flex-col flex justify-start items-start">
        <p class="mb-4">Are you sure you want to delete '{{ todo.name }}'?</p>
        <div class="flex space-x-2">
          <PrimaryButton is="button" type="button" @click.prevent="deleteTodo">
            Delete
          </PrimaryButton>
          <SecondaryButton to="/t/dashboard/">Cancel</SecondaryButton>
        </div>
      </div>
    </general-box>
  </backend-box>
</template>

<script>
import TodosTodoBreadcrumb from "../../components/TodosTodoBreadcrumb.vue";
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GeneralBox from "../../components/Box/General.vue";
import PrimaryButton from "../../components/Button/Primary.vue";
import SecondaryButton from "../../components/Button/Secondary.vue";

export default {
  components: {
    TodosTodoBreadcrumb,
    GeneralBox,
    BreadcrumbDivider,
    BreadcrumbLink,
    BackendBox,
    PrimaryButton,
    SecondaryButton,
  },
  computed: {
    todo() {
      return this.$store.getters["todos/todo"](this.$route.params.id);
    },
    todoListUrl() {
      if (!this.todo || !this.todo.type) return "#";
      switch (this.todo.type) {
        case "NORMAL":
          return "/t/list/normal-todos";
        case "REPETITIVE":
          return "/t/list/repetitive-todos";
        case "NEVER_ENDING":
          return "/t/list/never-ending-todos";
        case "PIPELINE":
          return "/t/list/pipeline-todos";
      }
      return "#";
    },
  },
  mounted() {
    this.$store.dispatch("todos/fetchTodos");
  },
  methods: {
    deleteTodo() {
      this.$store
        .dispatch("todos/deleteTodo", this.todo.url)
        .then(() => this.$router.push("/t/dashboard/"))
        .catch((error) => console.log(error));
    },
  },
};
</script>
