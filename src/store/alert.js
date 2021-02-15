const state = {
  type: "",
  message: "",
};

const actions = {
  success({ commit }, message) {
    commit("success", message);
  },
  error({ commit }, message) {
    commit("error", message);
  },
  clear({ commit }) {
    commit("clear");
  },
};

const mutations = {
  success(state, message) {
    state.type = "SUCCESS";
    state.message = message;
  },
  error(state, message) {
    state.type = "ERROR";
    state.message = message;
  },
  clear(state) {
    state.type = "";
    state.message = "";
  },
};

export const alert = {
  namespaced: true,
  state,
  actions,
  mutations,
};
