<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="Settings" link="/u/settings"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Todo"
        link="/u/settings/todo-settings"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box :overflow="false">
        <formulate-form
          v-model="formData"
          :name="name"
          @submit="submit"
        >
          <formulate-input
            id="normal-todos-choice"
            type="select"
            label="Normal-Todos"
            name="normal_to_dos_choice"
            :options="normalTodoOptions"
          ></formulate-input>
          <formulate-input
            id="never-ending-todos-choice"
            type="select"
            label="Never-Ending-Todos"
            name="never_ending_to_dos_choice"
            :options="neverEndingTodoOptions"
          ></formulate-input>
          <formulate-input
            id="repetitive-todos-choice"
            type="select"
            label="Repetitive-Todos"
            name="repetitive_to_dos_choice"
            :options="repetitiveTodoOptions"
          ></formulate-input>
          <formulate-input
            id="pipeline-todos-choice"
            type="select"
            label="Pipeline-Todos"
            name="pipeline_to_dos_choice"
            :options="pipelineTodoOptions"
          ></formulate-input>
          <formulate-input type="submit" value="Save"></formulate-input>
        </formulate-form>
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "../components/BackendBox.vue";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import axios from "../plugins/backendAxios.js";
import GeneralBox from "../components/Box/General.vue";

export default {
  name: "UsersSettingsTodo",
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
    GeneralBox,
  },
  mixins: [],
  data() {
    return {
      user: {},
      userOptions: false,
      name: "todoSettingsForm",
      method: "PUT",
      formData: {},
    };
  },
  computed: {
    pipelineTodoOptions() {
      if (!this.userOptions) return [];
      let options = [];
      this.userOptions.actions.PUT.pipeline_to_dos_choice.choices.forEach(
        (choice) =>
          options.push({
            id: choice.value,
            value: choice.value,
            label: choice.display_name,
          })
      );
      return options;
    },
    normalTodoOptions() {
      if (!this.userOptions) return [];
      let options = [];
      this.userOptions.actions.PUT.normal_to_dos_choice.choices.forEach(
        (choice) =>
          options.push({
            id: choice.value,
            value: choice.value,
            label: choice.display_name,
          })
      );
      return options;
    },
    repetitiveTodoOptions() {
      if (!this.userOptions) return [];
      let options = [];
      this.userOptions.actions.PUT.repetitive_to_dos_choice.choices.forEach(
        (choice) =>
          options.push({
            id: choice.value,
            value: choice.value,
            label: choice.display_name,
          })
      );
      return options;
    },
    neverEndingTodoOptions() {
      if (!this.userOptions) return [];
      let options = [];
      this.userOptions.actions.PUT.never_ending_to_dos_choice.choices.forEach(
        (choice) =>
          options.push({
            id: choice.value,
            value: choice.value,
            label: choice.display_name,
          })
      );
      return options;
    },
    url() {
      return this.user.url;
    },
  },
  watch: {
    user: function (newValue) {
      axios
        .options(newValue.url)
        .then((response) => (this.userOptions = response.data));
      this.formData = newValue;
    },
  },
  mounted() {
    axios
      .get("/u/api/users/")
      .then((response) => (this.user = response.data[0]));
  },
  methods: {
    submit: function () {
      this.$store.dispatch("alert/clear");
      axios({ method: this.method, url: this.url, data: this.formData })
        .then((response) => {
          this.$formulate.reset(this.name);
          this.user = response.data;
          this.$store.dispatch("alert/success", "Todo settings saved.");
        })
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
