import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    baseURL: 'http://127.0.0.1:8000'
  },
  mutations: {
    authUser(state, token) {
      state.token = token;
    },
    clearAuth(state) {
      state.token = null;
    },
  },
  actions: {
    signup({ commit }, authData) {
      axios
        .post("http://127.0.0.1:8000/api-token-auth/", {
          username: authData.username,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          commit("authUser", res.data.token);
          router.push("/dashboard");
        })
        .catch((error) => console.log(error));
    },
    login({ commit }, authData) {
      axios
        .post("http://127.0.0.1:8000/api-token-auth/", {
          username: authData.username,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          commit("authUser", res.data.token);
          router.push("/dashboard");
        })
        .catch((error) => console.log(error));
    },
    signout({ commit }) {
      commit("clearAuth");
      localStorage.removeItem("token");
      router.replace("/signin");
    },
    autoLogin({ commit }) {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      commit("authUser", token);
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  },
});
