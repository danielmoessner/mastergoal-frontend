import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router";
// import VueFormulate from "@braid/vue-formulate";
// import setup from "./helpers/interceptors";

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

// app.use(VueFormulate, {
//   classes: {
//     outer: "mb-4 last:mb-0",
//     input(context) {
//       switch (context.classification) {
//         case "button":
//           return "ml-auto cursor-pointer flex flex-row items-center px-6 py-2 tracking-wide font-bold rounded-lg text-gray-200 hover:bg-blue-900 bg-blue-800 shadow transition duration-100 ease-in-out focus:outline-none focus:shadow-outline";
//         case "box":
//           return "border-gray-400 rounded leading-none focus:border-blue-700 border-2 outline-none border-box w-4 h-4 align-text-top mr-1";
//         default:
//           return "border-gray-400 rounded px-3 py-2 leading-none focus:border-blue-700 border-2 outline-none border-box mb-1 w-full";
//       }
//     },
//     label: "font-medium text-sm",
//     help: "text-xs mb-1 text-gray-600",
//     error: "text-red-700 text-xs mb-1",
//   },
//   errorHandler: function (data) {
//     return {
//       inputErrors: data,
//       formErrors: data.non_field_errors,
//     };
//   },
// });

app.mount("#app");

store.dispatch("users/autoLogin");

// setup();
