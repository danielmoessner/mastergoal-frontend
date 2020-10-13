<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/t/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-bind:text="breadcrumbText"
        v-bind:link="breadcrumbUrl"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-if="todo.name"
        v-bind:text="todo.name"
        v-bind:link="'/t/list/todos/' + todo.id"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        v-bind:link="'/t/list/todos/' + todo.id + '/edit/'"
      ></breadcrumb-link>
    </breadcrumb-navigation>
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
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import axios from "@/plugins/backendAxios.js";
import DetailGrid from "@/components/DetailGrid.vue";
import GeneralBox from "@/components/GeneralBox.vue";

export default {
  name: "TodosTodoEdit",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
  },
  data() {
    return {
      todo: false,
      name: "edit-todo-form",
      formData: {},
    };
  },
  computed: {
    url() {
      return "/t/api/todos/" + this.$route.params.id + "/";
    },
    breadcrumbUrl() {
      if (!this.todo.type) return "#";
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
    breadcrumbText() {
      if (!this.todo.type) return "";
      switch (this.todo.type) {
        case "NORMAL":
          return "Normal-Todos";
        case "REPETITIVE":
          return "Repetitive-Todos";
        case "NEVER_ENDING":
          return "Never-Ending-Todos";
        case "PIPELINE":
          return "Pipeline-Todos";
      }
      return "";
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios.get(this.url).then((response) => {
        this.todo = response.data;
        this.formData = response.data;
      });
    },
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
