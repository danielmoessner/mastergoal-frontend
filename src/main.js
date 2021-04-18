import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router";
// import { QuillEditor } from "@vueup/vue-quill";

// styles
// import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "./assets/global.css";

// app stuff
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

// app.component("QuillEditor", QuillEditor);

app.mount("#app");

// store stuff
store.dispatch("users/autoLogin");
