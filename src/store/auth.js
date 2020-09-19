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
//   signup({ commit, getters }, authData) {
//     axios
//       .post("http://127.0.0.1:8000/api-token-auth/", {
//         username: authData.username,
//         password: authData.password,
//         returnSecureToken: true,
//       })
//       .then((res) => {
//         localStorage.setItem("token", res.data.token);
//         commit("authUser", res.data.token);
//         router.push(getters.mainView);
//       })
//       .catch((error) => console.log(error));
//   },
  login({ commit, getters, dispatch, state }, authData) {
    axios
      .post(state.api.baseURL + "/api-token-auth/", {
        username: authData.username,
        password: authData.password,
        returnSecureToken: true,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        commit("authUser", res.data.token);
        router.push(getters.mainView);
      })
      .catch(() => {
        let message = "No user was found with this username and password.";
        dispatch("alert/error", message, { root: true });
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
