<template>
  <backend-box v-if="monitor">
    <goals-monitor-breadcrumb :monitor="monitor"></goals-monitor-breadcrumb>
    <detail-grid>
      <goal-item v-bind:goal="goal" type="Goal"></goal-item>
    </detail-grid>
    <detail-grid>
      <general-box class="col-span-2 lg:col-span-3" v-bind:overflow="false">
        <heading-one
          :text="monitor.name"
          :subtitle="monitor.progress + ' %'"
        ></heading-one>
        <property-text property="Notes" :text="monitor.text"></property-text>

        <property-text property="Weight" :text="monitor.weight"></property-text>
        <property-text property="Steps" :text="monitor.steps"></property-text>
        <hr />
        <property-short property="Step" :short="monitor.step">
          <div>
            <form-button
              text="Up"
              v-bind:link="monitor.url"
              v-bind:data="{ step: monitor.step + 1 }"
            ></form-button>
            <form-button
              class="ml-4"
              text="Down"
              v-bind:link="monitor.url"
              v-bind:data="{ step: monitor.step - 1 }"
            ></form-button>
          </div>
        </property-short>
        <hr />
        <property-short property="Archived" :short="monitor.is_archived">
          <form-button
            text="Toggle"
            v-bind:link="monitor.url"
            v-bind:data="{ is_archived: !monitor.is_archived }"
          ></form-button>
        </property-short>
        <hr />
        <href-form-button text="Edit" to="edit/"></href-form-button>
        <href-form-button text="Delete" to="delete/"></href-form-button>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import GoalsMonitorBreadcrumb from "../../components/GoalsMonitorBreadcrumb.vue";
import GeneralBox from "../../components/Box/GeneralBox.vue";
import FormButton from "../../components/FormButton.vue";
import GoalItem from "../../components/GoalItem.vue";
import HeadingOne from "../../components/HeadingOne.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import HrefFormButton from "../../components/HrefFormButton.vue";
import PropertyText from "../../components/PropertyText.vue";
import PropertyShort from "../../components/PropertyShort.vue";
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";

export default {
  components: {
    BreadcrumbDivider,
    BreadcrumbLink,
    GoalsMonitorBreadcrumb,
    BackendBox,
    PropertyShort,
    PropertyText,
    HrefFormButton,
    DetailGrid,
    HeadingOne,
    FormButton,
    GeneralBox,
    GoalItem,
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
};
</script>
