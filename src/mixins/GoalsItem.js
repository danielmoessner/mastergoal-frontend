import axios from "../plugins/backendAxios.js";
import BackendBox from "../components/BackendBox.vue";
import DetailGrid from "../components/DetailGrid.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import GeneralBox from "../components/GeneralBox.vue";

export default {
  components: {
    GeneralBox,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
    BackendBox,
  },
  data: function () {
    return {
      item: false,
    };
  },
  mounted() {
    this.fetchItem();
  },
  watch: {
    url() {
      this.fetchItem();
    },
  },
  methods: {
    fetchItem() {
      axios.get(this.url).then((response) => (this.item = response.data));
    },
  },
};
