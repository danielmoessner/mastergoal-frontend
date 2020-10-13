<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Monitors"
        link="/g/list/monitors"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-if="monitor"
        v-bind:text="monitor.monitor"
        v-bind:link="'/g/list/monitors/' + monitor.id"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <detail-grid>
      <goal-item v-bind:goal="goal" type="Goal" v-if="goal"></goal-item>
    </detail-grid>
    <detail-grid>
      <general-box
        class="col-span-2 lg:col-span-2 xl:col-span-3"
        v-bind:overflow="false"
      >
        <heading-one :text="monitor.monitor" :subtitle="monitor.progress + ' %'"></heading-one>
        <property-text property="Notes" :text="monitor.text"></property-text>
        <hr />
        <property-short
          property="Weight"
          :short="monitor.weight"
        ></property-short>
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
        <property-short
          property="Steps"
          :short="monitor.steps"
        ></property-short>
        <hr>
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
      </general-box>
    </detail-grid>
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
import HeadingOne from "@/components/HeadingOne.vue";
import DetailGrid from "@/components/DetailGrid.vue";
import HrefFormButton from "@/components/HrefFormButton.vue";
import PropertyText from "@/components/PropertyText.vue";
import PropertyShort from "@/components/PropertyShort.vue";

export default {
  name: "GoalsMonitor",
  components: {
    PropertyShort,
    PropertyText,
    HrefFormButton,
    DetailGrid,
    HeadingOne,
    FormButton,
    BackendBox,
    BreadcrumbLink,
    BreadcrumbDivider,
    BreadcrumbNavigation,
    GeneralBox,
    GoalItem,
  },
  computed: {
    url() {
      return "/g/api/monitors/" + this.$route.params.id + "/";
    },
  },
  data() {
    return {
      monitor: false,
      goal: false,
    };
  },
  mounted() {
    this.fetch();
  },
  watch: {
    url() {
      this.fetch();
    },
    monitor() {
      axios
        .get(this.monitor.goal)
        .then((response) => (this.goal = response.data));
    },
  },
  methods: {
    changed(data) {
      this.monitor = data;
    },
    fetch() {
      axios.get(this.url).then((response) => (this.monitor = response.data));
    },
  },
};
</script>
