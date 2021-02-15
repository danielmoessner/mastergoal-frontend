import GoalsMonitorBreadcrumb from "../components/GoalsMonitorBreadcrumb.vue";
import GoalsItem from "../mixins/GoalsItem.js";

export default {
  mixins: [GoalsItem],
  components: {
    GoalsMonitorBreadcrumb,
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
