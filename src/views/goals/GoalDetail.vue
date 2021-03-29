<template>
  <backend-box v-if="goal">
    <goals-goal-breadcrumb :goal="goal"></goals-goal-breadcrumb>
    <detail-grid v-if="masterGoals.length">
      <goal-item
        v-bind:goal="masterGoal"
        v-for="masterGoal in masterGoals"
        v-bind:key="masterGoal.id"
        type="Mastergoal"
      ></goal-item>
    </detail-grid>
    <detail-grid>
      <general-box class="col-span-3" v-bind:overflow="false">
        <heading-one
          :title="goal.name"
          :subtitle="goal.progress + ' %'"
        ></heading-one>
        <property-text property="Why" :text="goal.why"></property-text>
        <property-text property="Impact" :text="goal.impact"></property-text>
        <property-text
          property="Addition"
          :text="goal.addition"
        ></property-text>
        <property-text
          property="Deadline"
          :text="goal.deadline"
        ></property-text>
        <hr />
        <property-short property="Archived" :text="goal.is_archived">
          <form-button
            v-bind:text="'Toggle'"
            v-bind:link="goal.url"
            v-bind:data="{ is_archived: !goal.is_archived }"
          ></form-button>
        </property-short>
        <property-short property="Starred" :text="goal.is_starred">
          <form-button
            v-bind:text="'Toggle'"
            v-bind:link="goal.url"
            v-bind:data="{ is_starred: !goal.is_starred }"
          ></form-button>
        </property-short>
        <hr />
        <href-form-button to="edit/" text="Edit"></href-form-button>
        <href-form-button to="delete/" text="Delete"></href-form-button>
      </general-box>
    </detail-grid>
    <detail-grid v-if="monitors.length || strategies.length">
      <monitor-item
        v-bind:monitor="monitor"
        v-for="monitor in monitors"
        v-bind:key="monitor.url"
      ></monitor-item>
      <strategy-item
        v-bind:strategy="strategy"
        v-for="strategy in strategies"
        v-bind:key="strategy.url"
      ></strategy-item>
    </detail-grid>
    <detail-grid v-if="subGoals.length">
      <goal-item
        v-bind:goal="subGoal"
        v-for="subGoal in subGoals"
        v-bind:key="subGoal.id"
        type="Subgoal"
      ></goal-item>
    </detail-grid>
  </backend-box>
</template>

<script>
import GeneralBox from "../../components/GeneralBox.vue";
import FormButton from "../../components/FormButton.vue";
import GoalItem from "../../components/GoalItem.vue";
import MonitorItem from "../../components/MonitorItem.vue";
import StrategyItem from "../../components/StrategyItem.vue";
import HeadingOne from "../../components/HeadingOne.vue";
import PropertyText from "../../components/PropertyText.vue";
import PropertyShort from "../../components/PropertyShort.vue";
import HrefFormButton from "../../components/HrefFormButton.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";

export default {
  components: {
    BreadcrumbDivider,
    BreadcrumbLink,
    BackendBox,
    GoalsGoalBreadcrumb,
    FormButton,
    DetailGrid,
    PropertyShort,
    GeneralBox,
    GoalItem,
    MonitorItem,
    PropertyText,
    StrategyItem,
    HeadingOne,
    HrefFormButton,
  },
  computed: {
    goal() {
      return this.$store.getters["goals/goal"](this.$route.params.id);
    },
    subGoals() {
      return this.$store.getters["goals/goalSubgoals"](this.goal);
    },
    masterGoals() {
      return this.$store.getters["goals/goalMastergoals"](this.goal);
    },
    monitors() {
      return this.$store.getters["goals/goalMonitors"](this.goal);
    },
    strategies() {
      return this.$store.getters["goals/goalStrategies"](this.goal);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
    this.$store.dispatch("goals/fetchLinks");
    this.$store.dispatch("goals/fetchMonitors");
    this.$store.dispatch("goals/fetchStrategies");
  },
};
</script>
