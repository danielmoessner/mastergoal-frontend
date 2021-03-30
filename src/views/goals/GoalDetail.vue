<template>
  <backend-box v-if="goal">
    <goals-goal-breadcrumb :goal="goal"></goals-goal-breadcrumb>
    <detail-grid>
      <goal-item
        v-bind:goal="masterGoal"
        v-for="masterGoal in masterGoals"
        v-bind:key="masterGoal.id"
        type="Mastergoal"
      ></goal-item>

      <div class="bg-white shadow rounded-lg col-span-3">
        <div class="px-4 py-5 sm:px-6">
          <div class="flex justify-between">
            <h2 class="text-2xl font-medium text-gray-900">
              {{ goal.name }}
            </h2>
            <div class="flex space-x-2">
              <abbr title="Star">
                <button
                  :class="{
                    'text-gray-800': goal.is_starred,
                    'text-gray-400': !goal.is_starred,
                  }"
                  class="focus:outline-none active:bg-gray-100 p-1 rounded hover:text-gray-500"
                  @click="star()"
                >
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </button>
              </abbr>
              <abbr title="Archive">
                <button
                  @click="archive()"
                  :class="{
                    'text-gray-800': goal.is_archived,
                    'text-gray-400': !goal.is_archived,
                  }"
                  class="focus:outline-none active:bg-gray-100 p-1 rounded hover:text-gray-500"
                >
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </button>
              </abbr>
              <abbr title="Edit">
                <router-link
                  class="p-1 text-gray-400 hover:text-gray-500 active:bg-gray-100 rounded block"
                  to="edit/"
                >
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </router-link>
              </abbr>
              <abbr title="Delete">
                <router-link
                  class="p-1 text-gray-400 hover:text-gray-500 active:bg-gray-100 rounded block"
                  to="delete/"
                >
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </router-link>
              </abbr>
            </div>
          </div>
          <div class="flex space-x-5">
            <div class="text-gray-400 flex items-center space-x-1">
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
              <div class="text-sm text-gray-500">{{ goal.progress }} %</div>
            </div>
            <div v-if="goal.deadline" class="text-gray-400 flex space-x-1">
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
              <div class="text-sm text-gray-500">{{ goal.deadline }}</div>
            </div>
          </div>
        </div>
        <div
          v-if="goal.why || goal.impact || goal.addition"
          class="border-t border-gray-200 px-4 py-5 sm:px-6"
        >
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div v-if="goal.why" class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Why</dt>
              <dd class="mt-1 text-gray-900">{{ goal.why }}</dd>
            </div>
            <div v-if="goal.impact" class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Impact</dt>
              <dd class="mt-1 text-gray-900">{{ goal.impact }}</dd>
            </div>
            <div v-if="goal.addition" class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">Impact</dt>
              <dd class="mt-1 text-gray-900">{{ goal.addition }}</dd>
            </div>
          </dl>
        </div>
      </div>
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
import GeneralBox from "../../components/Box/GeneralBox.vue";
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
