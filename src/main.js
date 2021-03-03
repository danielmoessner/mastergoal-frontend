import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router";

import "./assets/global.css";

const app = createApp(App);

app.use(store);

app.use(router);

app.mixin({
  computed: {
    alert() {
      return this.$store.state.alert;
    },
  },
  watch: {
    $route() {
      // clear alert on location change
      this.$store.dispatch("alert/clear");
    },
  },
});

app.mount("#app");

store.dispatch("users/autoLogin");
