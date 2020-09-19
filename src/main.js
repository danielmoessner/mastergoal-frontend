import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "@/store/store.js";
import VueFormulate from "@braid/vue-formulate";
import "@/assets/global.css";

Vue.config.productionTip = false;

Vue.use(VueFormulate, {
  classes: {
    outer: "mb-4",
    input(context) {
      switch (context.classification) {
        case "button":
          return "ml-auto cursor-pointer flex flex-row items-center px-6 py-2 tracking-wide font-bold rounded-lg text-gray-200 hover:bg-blue-900 bg-blue-800 shadow transition duration-100 ease-in-out focus:outline-none focus:shadow-outline";
        default:
          return "border-gray-400 rounded px-3 py-2 leading-none focus:border-blue-700 border-2 outline-none border-box w-full mb-1";
      }
    },
    label: "font-medium text-sm",
    help: "text-xs mb-1 text-gray-600",
    error: "text-red-700 text-xs mb-1",
  },
  errorHandler: function(data) {
    return {
      inputErrors: data,
      formErrors: data.non_field_errors,
    };
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
