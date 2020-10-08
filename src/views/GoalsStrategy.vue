<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Strategies"
        link="/g/list/strategies"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-if="strategy"
        v-bind:text="strategy.name"
        v-bind:link="'/g/list/strategies/' + strategy.id"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      <general-box
        class="col-span-2 lg:col-span-2 xl:col-span-3"
        v-bind:overflow="false"
      >
        <p>
          Name:
          <span>{{ strategy.name }}</span>
        </p>
        <p>
          Description:
          <span>{{ strategy.description }}</span>
        </p>
        <div class="flex justify-between items-center w-full">
          <p>
            Archived:
            <span>{{ strategy.is_archived }}</span>
          </p>
          <form-button
            v-on:response="changed"
            text="Toggle"
            v-if="strategy"
            v-bind:link="strategy.url"
            v-bind:data="{ is_archived: !strategy.is_archived }"
          ></form-button>
        </div>
        <div class="flex justify-between items-center w-full">
          <p>
            Starred:
            <span>{{ strategy.is_starred }}</span>
          </p>
          <form-button
            v-on:response="changed"
            text="Toggle"
            v-if="strategy"
            v-bind:link="strategy.url"
            v-bind:data="{ is_starred: !strategy.is_starred }"
          ></form-button>
        </div>
      </general-box>
      <goal-item v-bind:goal="goal" v-if="goal"></goal-item>
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
  name: "GoalDetail",
  components: {
    GoalItem,
    FormButton,
    BackendBox,
    BreadcrumbLink,
    BreadcrumbDivider,
    BreadcrumbNavigation,
    GeneralBox,
  },
  computed: {
    url() {
      return "/g/api/strategies/" + this.$route.params.id + "/";
    },
  },
  data() {
    return {
      strategy: false,
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
    strategy() {
      axios
        .get(this.strategy.goal)
        .then((response) => (this.goal = response.data));
    },
  },
  methods: {
    changed(data) {
      this.strategy = data;
    },
    fetch() {
      axios.get(this.url).then((response) => (this.strategy = response.data));
    },
  },
};
</script>
