<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link name="Settings" link="/u/settings"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        name="Goal"
        link="/u/settings/goal-settings"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box v-bind:overflow="false">
        <formulate-form
          v-bind:name="name"
          v-on:submit="submit"
          v-model="formData"
        >
          <formulate-input
            type="select"
            label="Goals"
            name="goal_view_goal_choice"
            id="goal-view-goal-choice"
            v-bind:options="goalsOptions"
          ></formulate-input>
          <formulate-input
            type="select"
            label="Tree goals"
            name="treeview_goal_choice"
            id="treeview-goal-choice"
            v-bind:options="treeGoalOptions"
          ></formulate-input>
          <formulate-input
            type="select"
            label="Tree monitors"
            name="treeview_monitor_choice"
            id="treeview-monitor-choice"
            v-bind:options="treeMonitorOptions"
          ></formulate-input>
          <formulate-input
            type="select"
            label="Tree strategies"
            name="treeview_strategy_choice"
            id="treeview-strategy-choice"
            v-bind:options="treeStrategyOptions"
          ></formulate-input>
          <formulate-input type="submit" value="Save"></formulate-input>
        </formulate-form>
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";
import axios from "@/plugins/backendAxios.js";
import GeneralBox from "@/components/GeneralBox.vue";

export default {
  name: "SettingsGeneral",
  mixins: [],
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
    GeneralBox,
  },
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
    goalsOptions() {
      if (!this.userOptions) return [];
      let options = [];
      this.userOptions.actions.PUT.goal_view_goal_choice.choices.forEach(
        (choice) =>
          options.push({
            id: choice.value,
            value: choice.value,
            label: choice.display_name,
          })
      );
      return options;
    },
    treeGoalOptions() {
      if (!this.userOptions) return [];
      let options = [];
      this.userOptions.actions.PUT.treeview_goal_choice.choices.forEach(
        (choice) =>
          options.push({
            id: choice.value,
            value: choice.value,
            label: choice.display_name,
          })
      );
      return options;
    },
    treeStrategyOptions() {
      if (!this.userOptions) return [];
      let options = [];
      this.userOptions.actions.PUT.treeview_strategy_choice.choices.forEach(
        (choice) =>
          options.push({
            id: choice.value,
            value: choice.value,
            label: choice.display_name,
          })
      );
      return options;
    },
    treeMonitorOptions() {
      if (!this.userOptions) return [];
      let options = [];
      this.userOptions.actions.PUT.treeview_monitor_choice.choices.forEach(
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
  methods: {
    submit: function() {
      this.$store.dispatch("alert/clear");
      axios({ method: this.method, url: this.url, data: this.formData })
        .then((response) => {
          this.$formulate.reset(this.name);
          this.user = response.data;
          this.$store.dispatch("alert/success", "Goal settings saved.");
        })
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
  mounted() {
    axios
      .get("/u/api/users/")
      .then((response) => (this.user = response.data[0]));
  },
  watch: {
    user: function(newValue) {
      axios
        .options(newValue.url)
        .then((response) => (this.userOptions = response.data));
      this.formData = newValue;
    },
  },
};
</script>
