<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/t/add" text="Add"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        link="/t/add/pipeline-todo"
        text="Pipeline-Todo"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box v-bind:overflow="false">
        <formulate-form v-on:submit="submit" :name="name" v-model="formData">
          <formulate-input
            type="text"
            name="name"
            label="Name"
            id="name"
            validation="required"
          >
          </formulate-input>
          <formulate-input
            type="select"
            label="Previous"
            name="previous"
            id="previous"
            validation="required"
            v-bind:options="todoOptions"
          >
          </formulate-input>
          <formulate-input type="submit" value="Add"> </formulate-input>
        </formulate-form>
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "../components/BackendBox.vue";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import GeneralBox from "../components/GeneralBox.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import axios from "../plugins/backendAxios.js";

export default {
  name: "TodosAddNormal",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
  },
  computed: {
    todoOptions() {
      return this.todos.map((todo) => {
        return {
          id: "todo-" + todo.id,
          value: todo.url,
          label: todo.name,
        };
      });
    },
  },
  data() {
    return {
      formData: {},
      todos: [],
      name: "add-pipeline-todo-form",
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios
        .get("/t/api/todos/")
        .then((response) => (this.todos = response.data));
    },
    submit() {
      axios
        .post("/t/api/pipeline-todos/", this.formData)
        .then((response) =>
          this.$router.push("/t/list/todos/" + response.data.id + "/")
        )
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
