<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link text="Goals" link="/g/list/goals"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-if="goal"
        v-bind:text="goal.name"
        v-bind:link="'/g/list/goals/' + goal.id"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      <goal-item
        v-bind:goal="masterGoal"
        v-for="masterGoal in masterGoals"
        v-bind:key="masterGoal.id"
        type="Mastergoal"
      ></goal-item>
      <general-box
        class="col-span-2 lg:col-span-2 xl:col-span-3"
        v-bind:overflow="false"
      >
        <p>
          Name:
          <span>{{ goal.name }}</span>
        </p>
        <p>
          Progress: <span>{{ goal.progress }}</span>
        </p>
        <p>
          Why:
          <span>{{ goal.why }}</span>
        </p>
        <p>
          Impact:
          <span>{{ goal.impact }}</span>
        </p>
        <p>
          Addition:
          <span>{{ goal.addition }}</span>
        </p>
        <p>
          Deadline:
          <span>{{ goal.deadline }}</span>
        </p>
        <div class="flex justify-between items-center w-full">
          <p>
            Archived:
            <span>{{ goal.is_archived }}</span>
          </p>
          <form-button
            v-on:response="changed"
            v-bind:text="'Toggle'"
            v-if="goal"
            v-bind:link="goal.url"
            v-bind:data="{ is_archived: !goal.is_archived }"
          ></form-button>
        </div>
        <div class="flex justify-between items-center w-full">
          <p>
            Starred:
            <span>{{ goal.is_starred }}</span>
          </p>
          <form-button
            v-on:response="changed"
            v-bind:text="'Toggle'"
            v-if="goal"
            v-bind:link="goal.url"
            v-bind:data="{ is_starred: !goal.is_starred }"
          ></form-button>
        </div>
      </general-box>
      <monitor-item v-bind:monitor="monitor" v-for="monitor in monitors" v-bind:key='monitor.url'></monitor-item>
      <strategy-item
        v-bind:strategy="strategy"
        v-for="strategy in strategies"
        v-bind:key="strategy.url"
                    ></strategy-item> 
      <goal-item
        v-bind:goal="subGoal"
        v-for="subGoal in subGoals"
        v-bind:key="subGoal.id"
        type="Subgoal"
      ></goal-item>
     
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import axios from "@/plugins/backendAxios.js";
import GeneralBox from "@/components/GeneralBox.vue";
import FormButton from "@/components/FormButton.vue";
import GoalItem from "@/components/GoalItem.vue";
import MonitorItem from "@/components/MonitorItem.vue";
import StrategyItem from "@/components/StrategyItem.vue";

export default {
  name: "GoalsGoal",
  components: {
    FormButton,
    BackendBox,
    BreadcrumbLink,
    BreadcrumbDivider,
    BreadcrumbNavigation,
    GeneralBox,
    GoalItem,
    MonitorItem,
    StrategyItem,
  },
  computed: {
    url() {
      return "/g/api/goals/" + this.$route.params.id + "/";
    },
  },
  data() {
    return {
      goal: false,
      subGoals: [],
      masterGoals: [],
      monitors: [],
      strategies: [],
    };
  },
  mounted() {
    this.fetch();
  },
  watch: {
    url() {
      this.fetch();
    },
    goal() {
      axios.get(this.goal.monitor).then((response) => (this.monitor = response.data));
    },
  },
  methods: {
    changed(data) {
      this.goal = data;
    },
    fetch() {
      axios.get(this.url).then((response) => (this.goal = response.data));
      axios
        .get(this.url + "subgoals/")
        .then((response) => (this.subGoals = response.data));
      axios
        .get(this.url + "mastergoals/")
        .then((response) => (this.masterGoals = response.data));
      axios
        .get(this.url + "strategies")
        .then((response) => (this.strategies = response.data));
      axios.get(this.url + 'monitors/').then(response => this.monitors = response.data)
    },
  },
};
</script>
