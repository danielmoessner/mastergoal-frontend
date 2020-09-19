import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { alert } from "@/store/alert.js";
import { api } from "@/store/api.js";
import { auth } from "@/store/auth.js";

export default new Vuex.Store({
  modules: {
    alert,
    api,
    auth,
  },
});
