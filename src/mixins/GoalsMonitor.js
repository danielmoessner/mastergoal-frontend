import GoalsGoalBreadcrumb from "@/components/GoalsGoalBreadcrumb.vue";
import GoalsItem from "@/mixins/GoalsItem.js";

export default {
  mixins: [GoalsItem],
  components: {
    GoalsGoalBreadcrumb,
  },
  computed: {
    url() {
      return "/g/api/monitors/" + this.$route.params.id + "/";
    },
    monitor() {
      return this.item;
    },
  },
};
