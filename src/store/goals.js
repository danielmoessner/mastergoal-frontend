import axios from "../plugins/backendAxios";

const state = () => ({
  api: {
    goals: "/goals/",
    strategies: "/strategies/",
    monitors: "/monitors/",
    links: "/links/",
    goalsState: "/goals/state/",
    linksState: "/links/state/",
    monitorsState: "/monitors/state/",
    strategiesState: "/strategies/state/",
  },
  /*
  // Goals
  */
  goalsState: null,
  goals: [],
  goalFields: [
    {
      type: "hidden",
      name: "url",
      create: false,
      readOnly: true,
    },
    {
      label: "Name",
      type: "text",
      name: "name",
      create: true,
      readOnly: false,
    },
    {
      label: "Why",
      type: "textarea",
      name: "why",
      create: true,
      readOnly: false,
    },
    {
      label: "Impact",
      type: "textarea",
      name: "impact",
      create: true,
      readOnly: false,
    },
    {
      label: "Deadline",
      type: "datetime-local",
      name: "datetime",
      create: true,
      readOnly: false,
    },
    {
      label: "Archived",
      type: "checkbox",
      name: "is_archived",
      create: false,
      readOnly: false,
    },
    {
      label: "Addition",
      type: "textarea",
      name: "addition",
      create: false,
      readOnly: false,
    },
    {
      label: "Starred",
      type: "checkbox",
      name: "is_starred",
      create: false,
      readOnly: false,
    },
    {
      label: "Progress",
      type: "number",
      name: "progress",
      create: false,
      readOnly: true,
    },
  ],
  /*
  // Strategies
  */
  strategiesState: null,
  strategies: [],
  strategyFields: [
    {
      type: "hidden",
      name: "url",
      create: false,
      readOnly: true,
    },
    {
      label: "Goal",
      type: "select",
      name: "goal",
      create: true,
      readOnly: false,
      children: [],
    },
    {
      label: "Name",
      type: "text",
      name: "name",
      create: true,
      readOnly: false,
    },
    {
      label: "Description",
      type: "textarea",
      name: "description",
      create: false,
      readOnly: false,
    },
    {
      label: "Starred",
      type: "checkbox",
      name: "is_starred",
      create: false,
      readOnly: false,
    },
    {
      label: "Archived",
      type: "checkbox",
      name: "is_archived",
      create: false,
      readOnly: false,
    },
  ],
  /*
  // Monitors
  */
  monitorsState: null,
  monitors: [],
  monitorFields: [
    {
      type: "hidden",
      name: "url",
      create: false,
      readOnly: true,
    },
    {
      label: "Goal",
      type: "select",
      name: "goal",
      create: true,
      readOnly: false,
      children: [],
    },
    {
      label: "Name",
      type: "text",
      name: "name",
      create: true,
      readOnly: false,
    },
    {
      label: "Steps",
      type: "number",
      name: "steps",
      create: true,
      readOnly: false,
    },
    {
      label: "Weight",
      type: "number",
      name: "weight",
      create: true,
      readOnly: false,
    },
    {
      label: "Step",
      type: "number",
      name: "step",
      create: false,
      readOnly: false,
    },
    {
      label: "Notes",
      type: "textarea",
      name: "notes",
      create: false,
      readOnly: false,
    },
    {
      label: "Archived",
      type: "checkbox",
      name: "is_archived",
      create: false,
      readOnly: false,
    },
  ],
  /*
  // Links
  */
  linksState: null,
  links: [],
  linkFields: [
    {
      type: "hidden",
      name: "url",
      create: false,
      readOnly: true,
    },
    {
      label: "Mastergoal",
      type: "select",
      name: "master_goal",
      create: true,
      readOnly: false,
      children: [],
    },
    {
      label: "Subgoal",
      type: "select",
      name: "sub_goal",
      create: true,
      readOnly: false,
      children: [],
    },
    {
      label: "Weight",
      type: "number",
      name: "weight",
      create: true,
      readOnly: false,
    },
    {
      label: "Archived",
      type: "checkbox",
      name: "is_archived",
      create: false,
      readOnly: false,
    },
  ],
});

const getters = {
  /*
  // Goals
  */
  goals: (state) => {
    return state.goals;
  },
  starredGoals: (state) => {
    return state.goals.filter((goal) => goal.is_starred);
  },
  goal: (state) => (identifier) => {
    return state.goals.find(
      (item) => item.id.toString() === identifier || item.url === identifier,
    );
  },
  goalFormFields: (state) => {
    return state.goalFields.filter((field) => !field.readOnly);
  },
  goalCreateFormFields: (state, getters) => {
    return getters.goalFormFields.filter((field) => field.create);
  },
  goalMonitors: (state) => (goal) => {
    return state.monitors.filter((monitor) => monitor.goal === goal.url);
  },
  goalSubgoals: (state) => (goal) => {
    const links = state.links.filter((link) => link.master_goal === goal.url);
    const urls = links.map((link) => link.sub_goal);
    const subgoals = state.goals.filter((goal) => urls.includes(goal.url));
    return subgoals;
  },
  goalMastergoals: (state) => (goal) => {
    const links = state.links.filter((link) => link.sub_goal === goal.url);
    const urls = links.map((link) => link.master_goal);
    const mastergoals = state.goals.filter((goal) => urls.includes(goal.url));
    return mastergoals;
  },
  goalStrategies: (state) => (goal) => {
    return state.strategies.filter((strategy) => strategy.goal === goal.url);
  },
  /*
  // Strategies
  */
  strategies: (state) => {
    console.log(state.strategies);
    return state.strategies;
  },
  starredStrategies: (state) => {
    return state.strategies.filter((strategy) => strategy.is_starred);
  },
  strategy: (state) => (id) => {
    return state.strategies.find((item) => item.id.toString() === id);
  },
  strategyFormFields: (state, getters) => {
    const fields = state.strategyFields.filter((field) => !field.readOnly);
    const goals = getters.goals.map((goal) => {
      return {
        value: `${import.meta.env.VITE_API_URL}${state.api.goals}${goal.id}/`,
        text: goal.name,
      };
    });
    fields.find((field) => field.name === "goal").children = goals;
    return fields;
  },
  strategyCreateFormFields: (state, getters) => {
    return getters.strategyFormFields.filter((field) => field.create);
  },
  /*
  // Monitors
  */
  monitors: (state) => {
    return state.monitors;
  },
  monitor: (state) => (id) => {
    return state.monitors.find((item) => item.id.toString() === id);
  },
  monitorFormFields: (state, getters) => {
    const fields = state.monitorFields.filter((field) => !field.readOnly);
    const goals = getters.goals.map((goal) => {
      return {
        value: `${import.meta.env.VITE_API_URL}${state.api.goals}${goal.id}/`,
        text: goal.name,
      };
    });
    fields.find((field) => field.name === "goal").children = goals;
    return fields;
  },
  monitorCreateFormFields: (state, getters) => {
    return getters.monitorFormFields.filter((field) => field.create);
  },
  /*
  // Links
  */
  links: (state) => {
    return state.links;
  },
  link: (state) => (id) => {
    return state.links.find((item) => item.id.toString() === id);
  },
  linkFormFields: (state, getters) => {
    const fields = state.linkFields.filter((field) => !field.readOnly);
    const goals = getters.goals.map((goal) => {
      return {
        value: `${import.meta.env.VITE_API_URL}${state.api.goals}${goal.id}/`,
        text: goal.name,
      };
    });
    fields
      .filter(
        (field) => field.name === "master_goal" || field.name === "sub_goal",
      )
      .forEach((field) => (field.children = goals));
    return fields;
  },
  linkCreateFormFields: (state, getters) => {
    return getters.linkFormFields.filter((field) => field.create);
  },
};

const mutations = {
  /*
  // Goals
  */
  setGoalsState: (state, value) => {
    state.goalsState = value;
  },
  setGoals: (state, goals) => {
    state.goals = goals;
  },
  addGoal(state, goal) {
    state.goals.push(goal);
  },
  changeGoal(state, goal) {
    let index = state.goals.findIndex((goalItem) => goalItem.url === goal.url);
    if (index !== -1) {
      state.goals.splice(index, 1, goal);
    }
  },
  removeGoal(state, url) {
    let index = state.goals.findIndex((goalItem) => goalItem.url === url);
    if (index !== -1) {
      state.goals.splice(index, 1);
    }
  },
  /*
  // Strategies
  */
  setStrategiesState: (state, value) => {
    state.strategiesState = value;
  },
  setStrategies: (state, strategies) => {
    state.strategies = strategies;
  },
  addStrategy(state, strategy) {
    state.strategies.push(strategy);
  },
  changeStrategy(state, strategy) {
    let index = state.strategies.findIndex(
      (strategyItem) => strategyItem.url === strategy.url,
    );
    if (index !== -1) {
      state.strategies.splice(index, 1, strategy);
    }
  },
  removeStrategy(state, url) {
    let index = state.strategies.findIndex(
      (strategyItem) => strategyItem.url === url,
    );
    if (index !== -1) {
      state.strategies.splice(index, 1);
    }
  },
  /*
  // Monitors
  */
  setMonitorsState: (state, value) => {
    state.monitorsState = value;
  },
  setMonitors: (state, monitors) => {
    state.monitors = monitors;
  },
  addMonitor(state, monitor) {
    state.monitors.push(monitor);
  },
  changeMonitor(state, monitor) {
    let index = state.monitors.findIndex(
      (monitorItem) => monitorItem.url === monitor.url,
    );
    if (index !== -1) {
      state.monitors.splice(index, 1, monitor);
    }
  },
  removeMonitor(state, url) {
    let index = state.monitors.findIndex(
      (monitorItem) => monitorItem.url === url,
    );
    if (index !== -1) {
      state.monitors.splice(index, 1);
    }
  },
  /*
  // Links
  */
  setLinksState: (state, value) => {
    state.linksState = value;
  },
  setLinks: (state, links) => {
    state.links = links;
  },
  addLink(state, link) {
    state.links.push(link);
  },
  changeLink(state, link) {
    let index = state.links.findIndex((linkItem) => linkItem.url === link.url);
    if (index !== -1) {
      state.links.splice(index, 1, link);
    }
  },
  removeLink(state, url) {
    let index = state.links.findIndex((linkItem) => linkItem.url === url);
    if (index !== -1) {
      state.links.splice(index, 1);
    }
  },
};

const actions = {
  /*
  // Goals
  */
  fetchGoals({ commit, state }) {
    axios.get(state.api.goalsState).then((response) => {
      let apiState = response.data.state;
      if (apiState !== state.goalsState) {
        axios
          .get(state.api.goals)
          .then((response) => commit("setGoals", response.data));
        commit("setGoalsState", apiState);
      }
    });
  },
  createGoal({ state, commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(state.api.goals, data)
        .then((response) => {
          commit("addGoal", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  patchGoal({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch(data.url, data)
        .then((response) => {
          commit("changeGoal", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  deleteGoal({ commit }, url) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then(() => {
          commit("removeGoal", url);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  /*
  // Links
  */
  fetchLinks({ commit, state }) {
    axios.get(state.api.linksState).then((response) => {
      let apiState = response.data.state;
      if (apiState !== state.linksState) {
        axios
          .get(state.api.links)
          .then((response) => commit("setLinks", response.data));
        commit("setLinksState", apiState);
      }
    });
  },
  createLink({ state, commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(state.api.links, data)
        .then((response) => {
          commit("addLink", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  patchLink({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch(data.url, data)
        .then((response) => {
          commit("changeLink", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  deleteLink({ commit }, url) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then(() => {
          commit("removeLink", url);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  /*
  // Monitors
  */
  fetchMonitors({ commit, state }) {
    axios.get(state.api.monitorsState).then((response) => {
      let apiState = response.data.state;
      if (apiState !== state.monitorsState) {
        axios
          .get(state.api.monitors)
          .then((response) => commit("setMonitors", response.data));
        commit("setMonitorsState", apiState);
      }
    });
  },
  createMonitor({ state, commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(state.api.monitors, data)
        .then((response) => {
          commit("addMonitor", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  patchMonitor({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch(data.url, data)
        .then((response) => {
          commit("changeMonitor", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  deleteMonitor({ commit }, url) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then(() => {
          commit("removeMonitor", url);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  /*
  // Strategies
  */
  fetchStrategies({ commit, state }) {
    axios.get(state.api.strategiesState).then((response) => {
      let apiState = response.data.state;
      if (apiState !== state.strategiesState) {
        axios
          .get(state.api.strategies)
          .then((response) => commit("setStrategies", response.data));
        commit("setStrategiesState", apiState);
      }
    });
  },
  createStrategy({ state, commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(state.api.strategies, data)
        .then((response) => {
          commit("addStrategy", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  patchStrategy({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch(data.url, data)
        .then((response) => {
          commit("changeStrategy", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  deleteStrategy({ commit }, url) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then(() => {
          commit("removeStrategy", url);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
};

export const goals = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
