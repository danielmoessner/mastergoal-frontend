<template>
  <backend-box>
    <goals-monitor-breadcrumb :monitor="monitor"></goals-monitor-breadcrumb>
    <detail-grid>
      <goal-item v-bind:goal="goal" type="Goal" v-if="goal"></goal-item>
    </detail-grid>
    <detail-grid>
      <general-box
        class="col-span-2 lg:col-span-2 xl:col-span-3"
        v-bind:overflow="false"
      >
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
              v-on:response="changed"
              text="Up"
              v-if="monitor"
              v-bind:link="monitor.url"
              v-bind:data="{ step: monitor.step + 1 }"
            ></form-button>
            <form-button
              v-on:response="changed"
              class="ml-4"
              text="Down"
              v-if="monitor"
              v-bind:link="monitor.url"
              v-bind:data="{ step: monitor.step - 1 }"
            ></form-button>
          </div>
        </property-short>
        <hr />
        <property-short property="Archived" :short="monitor.is_archived">
          <form-button
            v-on:response="changed"
            text="Toggle"
            v-if="monitor"
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
import axios from "../plugins/backendAxios.js";
import GeneralBox from "../components/GeneralBox.vue";
import FormButton from "../components/FormButton.vue";
import GoalItem from "../components/GoalItem.vue";
import HeadingOne from "../components/HeadingOne.vue";
import DetailGrid from "../components/DetailGrid.vue";
import HrefFormButton from "../components/HrefFormButton.vue";
import PropertyText from "../components/PropertyText.vue";
import PropertyShort from "../components/PropertyShort.vue";
import GoalsMonitor from "../mixins/GoalsMonitor.js";

export default {
  name: "GoalsMonitor",
  mixins: [GoalsMonitor],
  components: {
    PropertyShort,
    PropertyText,
    HrefFormButton,
    DetailGrid,
    HeadingOne,
    FormButton,
    GeneralBox,
    GoalItem,
  },
  data() {
    return {
      goal: false,
    };
  },
  watch: {
    monitor() {
      axios
        .get(this.monitor.goal)
        .then((response) => (this.goal = response.data));
    },
  },
  methods: {
    changed(data) {
      this.item = data;
    },
  },
};
</script>
