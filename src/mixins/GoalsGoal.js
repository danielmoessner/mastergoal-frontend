import GoalsGoalBreadcrumb from "../components/GoalsGoalBreadcrumb.vue";
import GoalsItem from "../mixins/GoalsItem.js";

export default {
  mixins: [GoalsItem],
  components: {
    GoalsGoalBreadcrumb,
  },
  computed: {
    url() {
      return "/g/api/goals/" + this.$route.params.id + "/";
    },
    goal() {
      return this.item;
    },
  },
};
