import axios from "../plugins/backendAxios";
import moment from "moment";

const state = {
  todos: [],
  fetched: false,
  time: moment().valueOf(),
  urls: {
    todos: "/t/api/todos/",
    normalTodo: "/t/api/normal-todos/",
  },
};

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
  setLastFetch(state) {
    state.fetched = true;
  },
  changeTodo(state, todo) {
    let index = state.todos.findIndex((todoItem) => todoItem.url === todo.url);
    if (index !== -1) {
      state.todos.splice(index, 1, todo);
    }
  },
  addTodo(state, todo) {
    console.log("ADDING TODO");
    state.todos.push(todo);
  },
  changeTimeToNextWeek(state) {
    state.time = moment(state.time).add(1, "week").valueOf();
  },
  changeTimeToPreviousWeek(state) {
    state.time = moment(state.time).subtract(1, "week").valueOf();
  },
};

const actions = {
  fetchTodos(context) {
    if (context.getters.fetched) {
      return;
    }
    axios
      .get(context.state.urls.todos)
      .then((response) => context.commit("setTodos", response.data));
    context.commit("setLastFetch");
  },
  todoChanged(context, todo) {
    context.commit("changeTodo", todo);
  },
  patchTodo(context, data) {
    axios
      .patch(data.url, data)
      .then((response) => context.commit("changeTodo", response.data))
      .catch((error) => {
        console.log(error);
      });
  },
  changeTimeToNextWeek(context) {
    context.commit("changeTimeToNextWeek");
  },
  changeTimeToPreviousWeek(context) {
    context.commit("changeTimeToPreviousWeek");
  },
  createNormalTodo: (context, data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(context.state.urls.normalTodo, data)
        .then((response) => {
          context.commit("addTodo", response.data);
          resolve();
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  },
};

const getters = {
  todos: (state, getters) => {
    return state.todos;
  },
  todosDoneThisWeek: (state, getters) => {
    const now = state.time;
    return getters.todos.filter((todo) => {
      const date = moment(todo.completed);
      return (
        now.isoWeek() === date.isoWeek() &&
        now.isoWeekYear() === date.isoWeekYear()
      );
    });
  },
  todosActiveThisWeek: (state, getters) => {
    const now = state.time;
    return getters.todos.filter((todo) => {
      const activate = moment(todo.activate);
      const deadline = moment(todo.deadline);
      const open = todo.completed === null;
      return (
        (open &&
          activate.isoWeek() <= now.isoWeek() &&
          activate.isoWeekYear() <= now.isoWeekYear()) ||
        (deadline.isoWeek() <= now.isoWeek() &&
          deadline.isoWeekYear() <= now.isoWeekYear())
      );
    });
  },
  todosThisWeek: (state, getters) => {
    const now = moment(state.time);
    return getters.todos.filter((todo) => {
      const activate = moment(todo.activate);
      const deadline = moment(todo.deadline);
      const relevantThisWeek =
        (activate.isoWeek() <= now.isoWeek() &&
          activate.isoWeekYear() <= now.isoWeekYear()) ||
        (deadline.isoWeek() <= now.isoWeek() &&
          deadline.isoWeekYear() <= now.isoWeekYear());
      const completed = todo.completed ? moment(todo.completed) : false;
      const completedThisWeek =
        completed &&
        completed.isoWeek() === now.isoWeek() &&
        completed.isoWeekYear() === now.isoWeekYear();
      return relevantThisWeek && (!completed || completedThisWeek);
    });
  },
  fetched: (state, getters) => {
    return state.fetched;
  },
  week: (state, getters) => {
    return moment(getters.time).isoWeek();
  },
  year: (state, getters) => {
    return moment(getters.time).isoWeekYear();
  },
  time: (state, getters) => {
    return moment(state.time);
  },
  timeActivate: (state, getters) => {
    return moment(state.time).startOf("week");
  },
  timeDeadline: (state, getters) => {
    return moment(state.time).endOf("week");
  },
};

export const todos = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
