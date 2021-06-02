import axios from "../plugins/backendAxios";

const state = () => ({
  stories: [],
  api: {
    story: "/stories/",
  },
  storyFields: [
    {
      type: "hidden",
      name: "url",
      create: false,
      readOnly: false,
    },
    {
      type: "tinymce",
      label: "What Is",
      name: "what_is",
      create: true,
      readOnly: false,
    },
    {
      type: "tinymce",
      label: "What Should Be",
      name: "what_should_be",
      create: true,
      readOnly: false,
    },
  ],
});

const getters = {
  stories: (state) => {
    return state.stories;
  },
  story: (state) => (id) => {
    return state.stories.find((story) => story.id.toString() === id);
  },
  latestStory: (state) => {
    if (state.stories.length > 0) return state.stories[0];
    return {
      what_is: "&nbsp;",
      what_should_be: "&nbsp;",
    };
  },
  storyFormFields: (state) => {
    return state.storyFields.filter((field) => field.create);
  },
};

const mutations = {
  setStories(state, stories) {
    state.stories = stories;
  },
  changeStory(state, story) {
    let index = state.stories.findIndex(
      (storyItem) => storyItem.url === story.url,
    );
    if (index !== -1) {
      state.stories.splice(index, 1, story);
    } else {
      state.stories.unshift(story);
    }
  },
  // removeStory(state, url) {
  //   let index = state.stories.findIndex((storyItem) => storyItem.url === url);
  //   if (index !== -1) {
  //     state.stories.splice(index, 1);
  //   }
  // },
};

const actions = {
  fetchStories(context) {
    if (context.state.stories.length === 0) {
      axios
        .get(context.state.api.story)
        .then((response) => context.commit("setStories", response.data));
    }
  },
  postStory({ state, commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(state.api.story, data)
        .then((response) => {
          commit("changeStory", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  // deleteStory({ commit }, url) {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .delete(url)
  //       .then(() => {
  //         commit("removeStory", url);
  //         resolve();
  //       })
  //       .catch((error) => reject(error.response.data));
  //   });
  // },
};

export const story = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
