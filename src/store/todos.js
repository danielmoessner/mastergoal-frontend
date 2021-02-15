import axios from "../plugins/backendAxios";
import moment from "moment";

const state = {
  todos: [],
  fetched: false,
  time: moment(),
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
};

const actions = {
  fetchTodos(context) {
    if (context.getters.fetched) {
      return;
    }
    axios
      .get("/t/api/todos/all/")
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
};

const getters = {
  todos: (state, getters) => {
    return state.todos;
  },
  todosDoneThisWeek: (state, getters) => {
    const now = moment();
    return getters.todos.filter((todo) => {
      const date = moment(todo.completed);
      return (
        now.isoWeek() === date.isoWeek() &&
        now.isoWeekYear() === date.isoWeekYear()
      );
    });
  },
  todosActiveThisWeek: (state, getters) => {
    const now = moment();
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
    const now = moment();
    return getters.todos.filter((todo) => {
      const activate = moment(todo.activate);
      const deadline = moment(todo.deadline);
      return (
        (activate.isoWeek() <= now.isoWeek() &&
          activate.isoWeekYear() <= now.isoWeekYear()) ||
        (deadline.isoWeek() <= now.isoWeek() &&
          deadline.isoWeekYear() <= now.isoWeekYear())
      );
    });
  },
  fetched: (state, getters) => {
    return state.fetched;
  },
  week: (state, getters) => {
    return state.time.isoWeek();
  },
  year: (state, getters) => {
    return state.time.isoWeekYear();
  },
};

export const todos = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
