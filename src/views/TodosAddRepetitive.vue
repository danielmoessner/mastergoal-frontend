<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/t/add" text="Add"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        link="/t/add/repetitive-todo"
        text="Repetitive-Todo"
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
            type="datetime-local"
            id="activate"
            name="activate"
            label="Activate"
          >
          </formulate-input>
          <formulate-input
            type="datetime-local"
            id="deadline"
            name="deadline"
            label="Deadline"
          >
          </formulate-input>
          <formulate-input
            type="text"
            id="duration"
            name="duration"
            label="Duration"
          >
          </formulate-input>
          <formulate-input
            type="number"
            id="repetitions"
            name="repetitions"
            label="Repetitions"
          >
          </formulate-input>
          <formulate-input type="submit" value="Add"> </formulate-input>
        </formulate-form>
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import GeneralBox from "@/components/GeneralBox.vue";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";
import axios from "@/plugins/backendAxios.js";

export default {
  name: "TodosAddNormal",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
  },
  data() {
    return {
      formData: {},
      name: "add-repetitive-todo-form",
    };
  },
  methods: {
    submit() {
      axios
        .post("/t/api/repetitive-todos/", this.formData)
        .then((response) =>
          this.$router.push(
            "/t/list/todos/" + response.data.id + "/"
          )
        )
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
