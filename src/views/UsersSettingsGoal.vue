<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="Settings" link="/u/settings"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Goal"
        link="/u/settings/goal-settings"
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
            id="goal-view-goal-choice"
            type="select"
            label="Goals"
            name="goal_view_goal_choice"
            :options="goalsOptions"
          ></formulate-input>
          <formulate-input
            id="strategy-main-choice"
            type="select"
            label="Strategies"
            name="strategy_main_choice"
            :options="strategyOptions"
          ></formulate-input>
          <formulate-input
            id="treeview-goal-choice"
            type="select"
            label="Tree goals"
            name="treeview_goal_choice"
            :options="treeGoalOptions"
          ></formulate-input>
          <formulate-input
            id="treeview-monitor-choice"
            type="select"
            label="Tree monitors"
            name="treeview_monitor_choice"
            :options="treeMonitorOptions"
          ></formulate-input>
          <formulate-input
            id="treeview-strategy-choice"
            type="select"
            label="Tree strategies"
            name="treeview_strategy_choice"
            :options="treeStrategyOptions"
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
  name: "UsersSettingsGoal",
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
    strategyOptions() {
      if (!this.userOptions) return [];
      let options = [];
      this.userOptions.actions.PUT.strategy_main_choice.choices.forEach(
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
          this.$store.dispatch("alert/success", "Goal settings saved.");
        })
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};
</script>
