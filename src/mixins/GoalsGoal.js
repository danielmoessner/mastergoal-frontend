import axios from "@/plugins/backendAxios.js";
import GoalsGoalBreadcrumb from "@/components/GoalsGoalBreadcrumb.vue";
import BackendBox from "@/components/BackendBox.vue";
import DetailGrid from "@/components/DetailGrid.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";
import GeneralBox from '@/components/GeneralBox.vue';

export default {
  components: {
    GeneralBox,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
    GoalsGoalBreadcrumb,
    BackendBox,
  },
  data: function() {
    return {
      goal: false,
    };
  },
  computed: {
    url() {
      return "/g/api/goals/" + this.$route.params.id + "/";
    },
  },
  mounted() {
    this.fetchGoal();
  },
  watch: {
    url() {
      this.fetchGoal();
    },
  },
  methods: {
    fetchGoal() {
      axios.get(this.url).then((response) => (this.goal = response.data));
    },
  },
};
