import GoalsStrategyBreadcrumb from "@/components/GoalsStrategyBreadcrumb.vue";
import GoalsItem from "@/mixins/GoalsItem.js";

export default {
  mixins: [GoalsItem],
  components: {
    GoalsStrategyBreadcrumb,
  },
  computed: {
    url() {
      return "/g/api/strategies/" + this.$route.params.id + "/";
    },
    strategy() {
      return this.item;
    },
  },
};
