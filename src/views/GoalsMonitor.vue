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
    <div class="grid gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      <goal-item v-bind:goal="goal" type="Goal" v-if="goal"></goal-item>
      <general-box
        class="col-span-2 lg:col-span-2 xl:col-span-3"
        v-bind:overflow="false"
      >
        <p>
          Name:
          <span>{{ monitor.monitor }}</span>
        </p>
        <p>
          Weight:
          <span>{{ monitor.weight }}</span>
        </p>
        <p>
          Notes:
          <span>{{ monitor.notes }}</span>
        </p>
        <div class="flex justify-between items-center w-full">
          <p>
            Step:
            <span>{{ monitor.step }}</span>
          </p>
          <p>
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
          </p>
        </div>
        <p>
          Steps:
          <span>{{ monitor.steps }}</span>
        </p>
        <p>
          Progress:
          <span>{{ monitor.progress }}</span>
        </p>
        <div class="flex justify-between items-center w-full">
          <p>
            Archived:
            <span>{{ monitor.is_archived }}</span>
          </p>
          <form-button
            v-on:response="changed"
            text="Toggle"
            v-if="monitor"
            v-bind:link="monitor.url"
            v-bind:data="{ is_archived: !monitor.is_archived }"
          ></form-button>
        </div>
      </general-box>
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

export default {
  name: "GoalsMonitor",
  components: {
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
