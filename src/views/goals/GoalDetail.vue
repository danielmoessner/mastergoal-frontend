<template>
  <backend-box v-if="goal">
    <goals-goal-breadcrumb :goal="goal"></goals-goal-breadcrumb>
    <detail-grid>
      <goal-item
        v-for="masterGoal in masterGoals"
        :key="masterGoal.id"
        :goal="masterGoal"
        type="Mastergoal"
      ></goal-item>

      <DetailBox :heading="goal.name">
        <template #actions>
          <Star :selected="goal.is_starred" @click="star()" />
          <Archive :selected="goal.is_archived" @click="archive()" />
          <Edit to="edit/" />
          <Delete to="delete/" />
        </template>
        <template #infos>
          <Info :info="`${goal.progress} %`">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                clip-rule="evenodd"
              />
            </svg>
          </Info>
          <Info v-if="goal.deadline" :info="goal.deadline">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              />
            </svg>
          </Info>
        </template>
        <template v-if="goal.why || goal.impact || goal.addition" #content>
          <Descriptive
            :data="[
              ['Why', goal.why],
              ['Impact', goal.impact],
              ['Addition', goal.addition],
            ]"
          />
        </template>
      </DetailBox>
      <monitor-item
        v-for="monitor in monitors"
        :key="monitor.url"
        :monitor="monitor"
      ></monitor-item>
      <strategy-item
        v-for="strategy in strategies"
        :key="strategy.url"
        :strategy="strategy"
      ></strategy-item>
      <goal-item
        v-for="subGoal in subGoals"
        :key="subGoal.id"
        :goal="subGoal"
        type="Subgoal"
      ></goal-item>
    </detail-grid>
  </backend-box>
</template>

<script>
import GoalItem from "../../components/GoalItem.vue";
import MonitorItem from "../../components/MonitorItem.vue";
import StrategyItem from "../../components/StrategyItem.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";
import BackendBox from "../../components/BackendBox.vue";
import Star from "../../components/Action/Star.vue";
import Archive from "../../components/Action/Archive.vue";
import Delete from "../../components/Action/Delete.vue";
import Edit from "../../components/Action/Edit.vue";
import DetailBox from "../../components/Box/Detail.vue";
import Info from "../../components/Info.vue";
import Descriptive from "../../components/Table/Descriptive.vue";

export default {
  components: {
    Info,
    Edit,
    DetailBox,
    Star,
    Delete,
    Archive,
    Descriptive,
    BackendBox,
    GoalsGoalBreadcrumb,
    DetailGrid,
    GoalItem,
    MonitorItem,
    StrategyItem,
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
  methods: {
    star() {
      const data = {
        is_starred: !this.goal.is_starred,
        url: this.goal.url,
      };
      this.$store.dispatch("goals/patchGoal", data);
    },
    archive() {
      const data = {
        is_archived: !this.goal.is_archived,
        url: this.goal.url,
      };
      this.$store.dispatch("goals/patchGoal", data);
    },
  },
};
</script>
