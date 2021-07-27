import axios from "../plugins/backendAxios";

const state = () => ({
  achievements: [],
  api: {
    achievements: "/achievements/",
  },
  achievementFields: [
    {
      type: "hidden",
      name: "url",
      create: false,
      readOnly: false,
    },
    {
      type: "date",
      label: "Date",
      name: "date",
      create: true,
      readOnly: false,
    },
    {
      type: "text",
      label: "Title",
      name: "title",
      create: true,
      readOnly: false,
    },
    {
      type: "textarea",
      label: "Description",
      name: "description",
      create: true,
      readOnly: false,
    },
  ],
});

const getters = {
  achievements: (state) => {
    return state.achievements;
  },
  achievement: (state) => (id) => {
    return state.achievements.find(
      (achievement) => achievement.id.toString() === id,
    );
  },
  achievementFormFields: (state) => {
    return state.achievementFields.filter((field) => field.create);
  },
};

const mutations = {
  setAchievements(state, achievements) {
    state.achievements = achievements;
  },
  changeAchievement(state, achievement) {
    let index = state.achievements.findIndex(
      (achievementItem) => achievementItem.url === achievement.url,
    );
    if (index !== -1) {
      state.achievements.splice(index, 1, achievement);
    }
  },
  addAchievement(state, achievement) {
    state.achievements.push(achievement);
  },
  removeAchievement(state, url) {
    let index = state.achievements.findIndex(
      (achievementItem) => achievementItem.url === url,
    );
    if (index !== -1) {
      state.achievements.splice(index, 1);
    }
  },
};

const actions = {
  fetchAchievements(context) {
    if (context.state.achievements.length === 0) {
      axios
        .get(context.state.api.achievements)
        .then((response) => context.commit("setAchievements", response.data));
    }
  },
  fetchAchievement(context, id) {
    return axios
      .get(`${context.state.api.achievements}${id}/`)
      .then((response) => response.data);
  },
  createAchievement({ state, commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(state.api.achievements, data)
        .then((response) => {
          commit("addAchievement", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  patchAchievement({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch(data.url, data)
        .then((response) => {
          commit("changeAchievement", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  deleteAchievement({ commit }, url) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then(() => {
          commit("removeAchievement", url);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
};

export const achievements = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
