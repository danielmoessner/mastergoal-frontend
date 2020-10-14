import GoalsLinkBreadcrumb from "@/components/GoalsLinkBreadcrumb.vue";
import GoalsItem from "@/mixins/GoalsItem.js";

export default {
  mixins: [GoalsItem],
  components: {
    GoalsLinkBreadcrumb,
  },
  computed: {
    url() {
      return "/g/api/links/" + this.$route.params.id + "/";
    },
    link() {
      return this.item;
    },
  },
};
