import axios from "../plugins/backendAxios";
import router from "../router";

const state = () => ({
  token: null,
  api: {
    users: "/users/",
    authToken: "/users/auth_token/",
    changePassword: "/users/change_password/",
  },
  user: {},
  passwordChangeFields: [
    {
      type: "password",
      name: "old_password",
      required: true,
      readOnly: false,
      create: false,
      label: "Old Password",
      as: "input",
    },
    {
      type: "password",
      name: "new_password",
      required: true,
      readOnly: false,
      create: true,
      label: "New Password",
      as: "input",
    },
    {
      type: "password",
      name: "password_confirm",
      required: true,
      readOnly: false,
      create: true,
      label: "New Password Again",
      as: "input",
    },
  ],
  passwordField: [
    {
      type: "password",
      name: "password",
      required: true,
      readOnly: false,
      create: false,
      label: "Password",
      as: "input",
    },
  ],
  userFields: [
    {
      type: "email",
      name: "email",
      required: true,
      readOnly: false,
      create: true,
      label: "Email",
      as: "input",
    },
  ],
  generalFields: [
    {
      name: "show_archived_objects",
      as: "input",
      type: "checkbox",
      required: false,
      read_only: false,
      create: false,
      label: "Show archived objects",
    },
  ],
});

const mutations = {
  authUser(state, token) {
    state.token = token;
  },
  clearAuth(state) {
    state.token = null;
  },
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  signup({ dispatch, state }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${import.meta.env.VITE_API_URL}${state.api.users}`, {
          ...data,
          returnSecureToken: true,
        })
        .then((response) => {
          let message = `Welcome! You can now login with ${response.data.email} and your password.`;
          dispatch("alert/success", message, { root: true });
          resolve();
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  },
  login({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(state.api.authToken, {
          ...data,
          returnSecureToken: true,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          commit("authUser", response.data.token);
          router.push("/t/dashboard/");
          resolve();
        })
        .catch((error) => {
          reject(error.response.data);
        });
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
  fetchUser(context) {
    axios.get(context.state.api.users).then((response) => {
      context.commit("setUser", response.data[0]);
    });
  },
  patchUser(context, data) {
    return new Promise((resolve, reject) => {
      axios
        .put(`${context.state.api.users}${context.state.user.id}/`, data)
        .then((response) => {
          context.commit("setUser", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  changeUserPassword(context, data) {
    return new Promise((resolve, reject) => {
      axios
        .put(context.state.api.changePassword, data)
        .then(() => {
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
};

const getters = {
  isAuthenticated(state) {
    return !!state.token;
  },
  token(state) {
    return state.token;
  },
  user(state) {
    return state.user;
  },
  generalFormFields(state) {
    return state.generalFields;
  },
  userFormFields(state) {
    return state.userFields;
  },
  passwordFormFields(state) {
    return state.passwordChangeFields;
  },
  loginFormFields(state) {
    return state.userFields.concat(state.passwordField);
  },
  signUpFormFields(state) {
    return state.userFields.concat(state.passwordField);
  },
  headersToken(state) {
    if (state.token !== null) return `Token ${state.token}`;
    return "";
  },
};

export const users = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
