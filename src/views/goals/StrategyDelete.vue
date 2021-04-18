<template>
  <BackendBox v-if="strategy">
    <GoalsGoalBreadcrumb :item="strategy">
      <BreadcrumbDivider></BreadcrumbDivider>
      <BreadcrumbLink text="Delete"></BreadcrumbLink>
    </GoalsGoalBreadcrumb>
    <DeleteBox
      :object="strategy.name"
      :to="`/g/list/strategies/${strategy.id}/`"
      @click="deleteStrategy()"
    />
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";
import DeleteBox from "../../components/Box/Delete.vue";

export default {
  components: {
    DeleteBox,
    BackendBox,
    BreadcrumbLink,
    BreadcrumbDivider,
    GoalsGoalBreadcrumb,
  },
  computed: {
    strategy() {
      return this.$store.getters["goals/strategy"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchStrategies");
  },
  methods: {
    deleteStrategy() {
      this.$store
        .dispatch("goals/deleteStrategy", this.strategy.url)
        .then(() => this.$router.push("/g/goals/"));
    },
  },
};
</script>
