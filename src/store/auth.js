import axios from "axios";
import router from "../router";

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
      .post(import.meta.env.VITE_API_URL + "/u/api/register/", {
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
    return new Promise((resolve, reject) => {
      axios
        .post(import.meta.env.VITE_API_URL + "/api-token-auth/", {
          ...data,
          returnSecureToken: true,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          commit("authUser", res.data.token);
          router.push(getters.mainView);
          resolve();
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  },
  test: (context) => {
    return new Promise((resolve, reject) => {
      reject('error from action "Test"!');
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
  token(state) {
    return state.token;
  },
};

export const auth = {
  namespaced: false,
  state,
  actions,
  mutations,
  getters,
};
