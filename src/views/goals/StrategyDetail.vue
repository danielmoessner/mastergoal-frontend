<template>
  <backend-box v-if="strategy">
    <goals-strategy-breadcrumb :strategy="strategy"></goals-strategy-breadcrumb>
    <detail-grid>
      <goal-item v-bind:goal="goal"></goal-item>
      <DetailBox :heading="strategy.name">
        <template v-slot:actions>
          <Star @click="star()" :selected="strategy.is_starred" />
          <Archive @click="archive()" :selected="strategy.is_archived" />
          <Edit to="edit/" />
          <Delete to="delete/" />
        </template>
        <template v-if="strategy.description" v-slot:content>
          <Descriptive :data="[['Description', strategy.description]]" />
        </template>
      </DetailBox>
    </detail-grid>
  </backend-box>
</template>

<script>
import GoalItem from "../../components/GoalItem.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GoalsStrategyBreadcrumb from "../../components/GoalsStrategyBreadcrumb.vue";
import Star from "../../components/Action/Star.vue";
import Archive from "../../components/Action/Archive.vue";
import Delete from "../../components/Action/Delete.vue";
import Edit from "../../components/Action/Edit.vue";
import DetailBox from "../../components/Box/Detail.vue";
import Info from "../../components/Info.vue";
import Descriptive from "../../components/Table/Descriptive.vue";

export default {
  components: {
    Star,
    Archive,
    Delete,
    Edit,
    DetailBox,
    Info,
    Descriptive,
    GoalsStrategyBreadcrumb,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
    BackendBox,
    GoalItem,
  },
  computed: {
    strategy() {
      return this.$store.getters["goals/strategy"](this.$route.params.id);
    },
    goal() {
      return this.$store.getters["goals/goal"](this.strategy.goal);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
    this.$store.dispatch("goals/fetchStrategies");
  },
  methods: {
    star() {
      const data = {
        is_starred: !this.strategy.is_starred,
        url: this.strategy.url,
      };
      this.$store.dispatch("goals/patchStrategy", data);
    },
    archive() {
      const data = {
        is_archived: !this.strategy.is_archived,
        url: this.strategy.url,
      };
      this.$store.dispatch("goals/patchStrategy", data);
    },
  },
};
</script>
