<template>
  <BackendBox v-if="strategy">
    <GoalsGoalBreadcrumb :item="strategy" />
    <DetailGrid>
      <GoalItem :goal="goal"></GoalItem>
      <DetailBox :heading="strategy.name">
        <template #actions>
          <Star :selected="strategy.is_starred" @click="star()" />
          <Archive :selected="strategy.is_archived" @click="archive()" />
          <Edit to="edit/" />
          <Delete to="delete/" />
        </template>
        <template v-if="strategy.description" #content>
          <Descriptive :data="[['Description', strategy.description]]" />
        </template>
      </DetailBox>
    </DetailGrid>
  </BackendBox>
</template>

<script>
import GoalItem from "../../components/GoalItem.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import BackendBox from "../../components/BackendBox.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";
import Star from "../../components/Action/Star.vue";
import Archive from "../../components/Action/Archive.vue";
import Delete from "../../components/Action/Delete.vue";
import Edit from "../../components/Action/Edit.vue";
import DetailBox from "../../components/Box/Detail.vue";
import Descriptive from "../../components/Table/Descriptive.vue";

export default {
  components: {
    Star,
    Archive,
    Delete,
    Edit,
    DetailBox,
    Descriptive,
    GoalsGoalBreadcrumb,
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
