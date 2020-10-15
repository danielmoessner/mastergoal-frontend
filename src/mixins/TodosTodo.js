import axios from "@/plugins/backendAxios.js";
import BackendBox from "@/components/BackendBox.vue";
import DetailGrid from "@/components/DetailGrid.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";
import GeneralBox from "@/components/GeneralBox.vue";

export default {
  components: {
    GeneralBox,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
    BackendBox,
  },
  data: function() {
    return {
      todo: false,
    };
  },
  computed: {
    url() {
      return "/t/api/todos/" + this.$route.params.id + "/";
    },
    todoListUrl() {
      if (!this.todo.type) return "#";
      switch (this.todo.type) {
        case "NORMAL":
          return "/t/list/normal-todos";
        case "REPETITIVE":
          return "/t/list/repetitive-todos";
        case "NEVER_ENDING":
          return "/t/list/never-ending-todos";
        case "PIPELINE":
          return "/t/list/pipeline-todos";
      }
      return "#";
    },
  },
  mounted() {
    this.fetchTodo();
  },
  watch: {
    url() {
      this.fetchTodo();
    },
  },
  methods: {
    fetchTodo() {
      axios.get(this.url).then((response) => (this.todo = response.data));
    },
  },
};
