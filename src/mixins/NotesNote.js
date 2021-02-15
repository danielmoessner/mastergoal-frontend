import NotesNoteBreadcrumb from "../components/NotesNoteBreadcrumb.vue";
import axios from "../plugins/backendAxios.js";
import BackendBox from "../components/BackendBox.vue";
import DetailGrid from "../components/DetailGrid.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import GeneralBox from "../components/GeneralBox.vue";

export default {
  components: {
    NotesNoteBreadcrumb,
    GeneralBox,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
    BackendBox,
  },
  data() {
    return {
      note: false,
    };
  },
  computed: {
    url() {
      return "/n/api/notes/" + this.$route.params.id + "/";
    },
  },
  mounted() {
    this.fetchNote();
  },
  watch: {
    url() {
      this.fetchNote();
    },
  },
  methods: {
    fetchNote() {
      axios.get(this.url).then((response) => (this.note = response.data));
    },
  },
};
