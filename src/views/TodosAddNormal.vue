<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/t/add" text="Add"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        link="/t/add/normal-todo"
        text="Normal-Todo"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box v-bind:overflow="false">
        <dynamic-form @submit="onSubmit" :form="form" />
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
import DynamicForm from "../components/DynamicForm.vue";
import * as yup from "yup";

export default {
  name: "TodosAddNormal",
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
    DynamicForm,
  },
  data() {
    return {
      form: {
        errors: {},
        nonFieldErrors: [],
        fields: {
          name: {
            type: "text",
            label: "Name",
            name: "name",
            as: "input",
          },
          activate: {
            type: "datetime-local",
            name: "activate",
            as: "input",
            label: "Activate",
          },
          deadline: {
            type: "datetime-local",
            name: "deadline",
            as: "input",
            label: "Deadline",
          },
          notes: {
            name: "notes",
            as: "textarea",
            label: "Notes",
          },
        },
        validation: yup.object().shape({
          name: yup.string().max(300).required(),
          activate: yup.date(),
          deadline: yup.date(),
          notes: yup.string(),
        }),
        values: {},
        success: "",
        submit: "Add",
      },
    };
  },
  methods: {
    onSubmit(data) {
      this.$store
        .dispatch("todos/createNormalTodo", data)
        .then(() => {
          this.form.success = "Todo created";
        })
        .catch((errors) => {
          this.form.errors = errors;
          this.form.nonFieldErrors = errors.non_field_errors;
          this.form.values = data;
        });
    },
    submit() {
      axios
        .post("/t/api/normal-todos/", this.formData)
        .then((response) =>
          this.$router.push("/t/list/todos/" + response.data.id + "/")
        )
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
