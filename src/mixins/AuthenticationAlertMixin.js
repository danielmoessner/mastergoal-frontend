import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      alert: (state) => state.alert,
    }),
  },
  methods: {
    ...mapActions({
      clearAlert: "alert/clear",
    }),
  },
  watch: {
    $route() {
      // clear alert on location change
      this.clearAlert();
    },
  },
};
