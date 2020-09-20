import axios from "axios";
import router from "@/router.js";

const state = {
  token: null,
  mainView: "/t/dashboard",
};

const mutations = {
  authUser(state, token) {
    state.token = token;
  },
  clearAuth(state) {
    state.token = null;
  },
};

const actions = {
  signup({ rootState, dispatch }, data) {
    axios
      .post(rootState.api.baseURL + "/u/api/register/", {
        ...data.formData,
        returnSecureToken: true,
      })
      .then((res) => {
        let message =
          "Welcome! You can now login with '" +
          res.data.email +
          "' and your password.";
        dispatch("alert/success", message, { root: true });
        this._vm.$formulate.reset(data.formName);
      })
      .catch((error) => {
        this._vm.$formulate.handle(error.response.data, data.formName);
      });
  },
  login({ commit, getters, rootState }, data) {
    axios
      .post(rootState.api.baseURL + "/api-token-auth/", {
        ...data.formData,
        returnSecureToken: true,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        commit("authUser", res.data.token);
        router.push(getters.mainView);
      })
      .catch((error) => {
        console.log(data.formName);
        this._vm.$formulate.handle(error.response.data, data.formName);
      });
  },
  signout({ commit }) {
    commit("clearAuth");
    localStorage.removeItem("token");
    router.push("/signin");
  },
  autoLogin({ commit }) {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    commit("authUser", token);
  },
};

const getters = {
  isAuthenticated(state) {
    return !!state.token;
  },
  mainView(state) {
    return state.mainView;
  },
};

export const auth = {
  namespaced: false,
  state,
  actions,
  mutations,
  getters,
};
