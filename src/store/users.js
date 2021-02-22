import axios from "../plugins/backendAxios";

const state = {
  api: {
    users: "/u/api/users/",
    changePassword: "/u/api/change-password/",
  },
  user: {},
  passwordFields: [
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
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
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
        .then((response) => {
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
};

const getters = {
  user(state, getters) {
    return state.user;
  },
  generalFormFields(state, getters) {
    return state.generalFields;
  },
  userFormFields(state, getters) {
    return state.userFields;
  },
  passwordFormFields(state, getters) {
    return state.passwordFields;
  },
};

export const users = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
