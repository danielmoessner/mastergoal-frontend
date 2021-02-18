<template>
  <backend-box v-if="todo">
    <todos-todo-breadcrumb :todo="todo" :todoListUrl="todoListUrl">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-bind:link="'/t/list/todos/' + todo.id + '/delete/'"
        text="Delete"
      ></breadcrumb-link>
    </todos-todo-breadcrumb>
    <detail-grid>
      <general-box class="col-span-2 md:col-span-3" :overflow="false">
        <div class="flex-col flex justify-start items-start">
          <p class="mb-4">Are you sure you want to delete '{{ todo.name }}'?</p>
          <div class="flex items-end w-full justify-end">
            <navigation-button
              class="pt-2 pb-2"
              :link="'/t/list/todos/' + todo.id + '/'"
              text="Cancel"
            ></navigation-button>
            <submit-button
              v-on:click.native.prevent="deleteTodo"
              class="ml-2"
              text="Yes, delete"
            ></submit-button>
          </div>
        </div>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import NavigationButton from "../../components/NavigationButton.vue";
import SubmitButton from "../../components/SubmitButton.vue";
import TodosTodoBreadcrumb from "../../components/TodosTodoBreadcrumb.vue";
import BackendBox from "../../components/BackendBox.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GeneralBox from "../../components/GeneralBox.vue";

export default {
  name: "TodosTodoDelete",
  components: {
    TodosTodoBreadcrumb,
    NavigationButton,
    SubmitButton,
    GeneralBox,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
    BackendBox,
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

<style></style>
