<template>
  <backend-box v-if="strategy">
    <goals-strategy-breadcrumb :strategy="strategy">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        :link="'/g/list/strategies/' + strategy.id + '/delete/'"
        text="Delete"
      ></breadcrumb-link>
    </goals-strategy-breadcrumb>
    <delete-box
      :object="strategy.name"
      :to="`/g/list/strategies/${strategy.id}/`"
      @click="deleteStrategy()"
    />
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GoalsStrategyBreadcrumb from "../../components/GoalsStrategyBreadcrumb.vue";
import DeleteBox from "../../components/Box/Delete.vue";

export default {
  components: {
    DeleteBox,
    BackendBox,
    BreadcrumbLink,
    BreadcrumbDivider,
    GoalsStrategyBreadcrumb,
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
