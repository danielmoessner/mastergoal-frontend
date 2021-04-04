<template>
  <backend-box v-if="monitor">
    <goals-monitor-breadcrumb :monitor="monitor"></goals-monitor-breadcrumb>
    <detail-grid>
      <goal-item :goal="goal" type="Goal"></goal-item>
      <Detail :heading="monitor.name">
        <template #actions>
          <Up :selected="false" @click="up()" />
          <Down :selected="false" @click="down()" />
          <Archive :selected="monitor.is_archived" @click="archive()" />
          <Edit to="edit/" />
          <Delete to="delete/" />
        </template>
        <template #infos>
          <Info :info="`${monitor.progress} %`">
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
          <Info :info="`${monitor.step} of ${monitor.steps}`">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
              />
            </svg>
          </Info>
        </template>
        <template v-if="monitor.notes" #content>
          <Descriptive :data="[['Notes', monitor.notes]]" />
        </template>
      </Detail>
    </detail-grid>
  </backend-box>
</template>

<script>
import GoalsMonitorBreadcrumb from "../../components/GoalsMonitorBreadcrumb.vue";
import GoalItem from "../../components/GoalItem.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import BackendBox from "../../components/BackendBox.vue";
import Detail from "../../components/Box/Detail.vue";
import Up from "../../components/Action/Up.vue";
import Down from "../../components/Action/Down.vue";
import Archive from "../../components/Action/Archive.vue";
import Edit from "../../components/Action/Edit.vue";
import Delete from "../../components/Action/Delete.vue";
import Info from "../../components/Info.vue";
import Descriptive from "../../components/Table/Descriptive.vue";

export default {
  components: {
    Descriptive,
    Info,
    Detail,
    GoalsMonitorBreadcrumb,
    BackendBox,
    DetailGrid,
    GoalItem,
    Up,
    Down,
    Archive,
    Edit,
    Delete,
  },
  computed: {
    monitor() {
      return this.$store.getters["goals/monitor"](this.$route.params.id);
    },
    goal() {
      return this.$store.getters["goals/goal"](this.monitor.goal);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
    this.$store.dispatch("goals/fetchMonitors");
  },
  methods: {
    archive() {
      const data = {
        is_archived: !this.monitor.is_archived,
        url: this.monitor.url,
      };
      this.$store.dispatch("goals/patchMonitor", data);
    },
    up() {
      const data = {
        step: this.monitor.step + 1,
        url: this.monitor.url,
      };
      this.$store.dispatch("goals/patchMonitor", data);
    },
    down() {
      const data = {
        step: this.monitor.step - 1,
        url: this.monitor.url,
      };
      this.$store.dispatch("goals/patchMonitor", data);
    },
  },
};
</script>
