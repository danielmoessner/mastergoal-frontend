<template>
  <backend-box>
    <todos-todo-breadcrumb :todo="todo" :todoListUrl="todoListUrl">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        v-bind:link="'/t/list/todos/' + todo.id + '/edit/'"
      ></breadcrumb-link>
    </todos-todo-breadcrumb>
    <detail-grid>
      <general-box
        v-bind:overflow="false"
        class="col-span-2 md:col-span-3 xl:col-span-4"
      >
        <formulate-form
          v-on:submit="submit"
          name="edit-todo-form"
          v-model="formData"
        >
          <formulate-input
            type="text"
            label="Name"
            name="name"
            id="name"
            validation="required"
          >
          </formulate-input>
          <formulate-input
            type="textarea"
            name="notes"
            id="notes"
            rows="6"
            label="Notes"
            validation=""
          >
          </formulate-input>
          <formulate-input
            type="datetime-local"
            name="activate"
            id="activate"
            label="Activate"
            validation=""
          >
          </formulate-input>
          <formulate-input
            type="datetime-local"
            name="deadline"
            id="deadline"
            label="Deadline"
          >
          </formulate-input>
          <formulate-input
            type="text"
            v-if="todo.type === 'REPETITIVE' || todo.type === 'NEVER_ENDING'"
            name="duration"
            id="duration"
            label="Duration"
          >
          </formulate-input>
          <formulate-input
            type="number"
            v-if="todo.type === 'REPETITIVE'"
            name="repetitions"
            id="repetitions"
            label="Repetitions"
            validation="min:0"
          >
          </formulate-input>
          <formulate-input
            v-if="todo.type === 'NEVER_ENDING'"
            type="checkbox"
            name="blocked"
            id="blocked"
            label="Blocked"
          >
          </formulate-input>
          <formulate-input type="submit" value="Save"> </formulate-input>
        </formulate-form>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import BackendBox from "../components/BackendBox.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import axios from "../plugins/backendAxios.js";
import DetailGrid from "../components/DetailGrid.vue";
import GeneralBox from "../components/GeneralBox.vue";
import TodosTodoBreadcrumb from "../components/TodosTodoBreadcrumb.vue";
import TodosTodo from "../mixins/TodosTodo.js";

export default {
  name: "TodosTodoEdit",
  mixins: [TodosTodo],
  components: {
    GeneralBox,
    BackendBox,
    TodosTodoBreadcrumb,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
  },
  data() {
    return {
      name: "edit-todo-form",
      formData: {},
    };
  },
  watch: {
    todo() {
      this.formData = this.todo;
    },
  },
  methods: {
    submit() {
      axios
        .put(this.todo.url, this.formData)
        .then((response) =>
          this.$router.push("/t/list/todos/" + response.data.id + "/")
        )
        .catch((err) => {
          this.$formulate.handle(err.response.data, "edit-todo-form");
        });
    },
  },
};
</script>
