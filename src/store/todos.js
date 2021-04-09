import axios from "../plugins/backendAxios";
import moment from "moment";

const state = () => ({
  api: {
    todos: "/todos/",
    normalTodo: "/normal-todos/",
    neverEndingTodo: "/never-ending-todos/",
    repetitiveTodo: "/repetitive-todos/",
    pipelineTodo: "/pipeline-todos/",
    state: "/todos/state/",
  },
  /*
  // Todos
  */
  todos: [],
  todoFields: [
    {
      type: "hidden",
      name: "url",
      create: false,
      readOnly: false,
    },
    {
      type: "text",
      label: "Name",
      name: "name",
      create: true,
      readOnly: false,
    },
    {
      label: "Status",
      name: "status",
      type: "select",
      create: false,
      readOnly: false,
      children: [
        {
          value: "ACTIVE",
          text: "Active",
        },
        {
          value: "DONE",
          text: "Done",
        },
        {
          value: "FAILED",
          text: "Failed",
        },
      ],
    },
    {
      name: "notes",
      type: "textarea",
      label: "Notes",
      create: false,
      readOnly: false,
    },
    {
      name: "completed",
      label: "Completed",
      create: false,
      readOnly: true,
    },
  ],
  normalTodoFields: [
    {
      type: "datetime-local",
      name: "activate",
      label: "Activate",
      create: true,
      readOnly: false,
    },
    {
      type: "datetime-local",
      name: "deadline",
      label: "Deadline",
      create: true,
      readOnly: false,
    },
  ],
  neverEndingTodoFields: [
    {
      type: "datetime-local",
      name: "activate",
      label: "Activate",
      create: false,
      readOnly: false,
    },
    {
      type: "text",
      name: "duration",
      label: "Duration",
      placeholder: "7 days",
      create: true,
      readOnly: false,
    },
  ],
  repetitiveTodoFields: [
    {
      type: "datetime-local",
      name: "activate",
      label: "Activate",
      create: true,
      readOnly: false,
    },
    {
      type: "datetime-local",
      name: "deadline",
      label: "Deadline",
      create: true,
      readOnly: false,
    },
    {
      type: "text",
      name: "duration",
      label: "Repeat",
      placeholder: "7 days",
      create: true,
      readOnly: false,
    },
    {
      type: "number",
      name: "repetitions",
      label: "Repetitions",
      placeholder: "10",
      create: true,
      readOnly: false,
    },
  ],
  pipelineTodoFields: [
    {
      label: "Previous",
      name: "previous",
      type: "select",
      create: true,
      readOnly: false,
      children: [],
    },
  ],
  /*
  // Other
  */
  time: moment().format(),
  apiState: false,
});

const getters = {
  /*
  // Todos
  */
  todos: (state) => {
    return state.todos;
  },
  normalTodos: (state) => {
    return state.todos.filter((todo) => todo.type === "NORMAL");
  },
  pipelineTodos: (state) => {
    return state.todos.filter((todo) => todo.type === "PIPELINE");
  },
  neverEndingTodos: (state) => {
    return state.todos.filter((todo) => todo.type === "NEVER_ENDING");
  },
  repetitiveTodos: (state) => {
    return state.todos.filter((todo) => todo.type === "REPETITIVE");
  },
  todo: (state) => (id) => {
    return state.todos.find((todo) => todo.id.toString() === id);
  },
  todosThisWeek: (state) => {
    const now = moment(state.time);
    return state.todos.filter((todo) => {
      const activate = moment(todo.activate);
      // const deadline = moment(todo.deadline);
      // const relevantThisWeek =
      //   activate <= now ||
      //   (deadline.isoWeek() <= now.isoWeek() &&
      //     deadline.isoWeekYear() <= now.isoWeekYear());
      const relevantThisWeek = activate <= now;
      const completed = todo.completed ? moment(todo.completed) : false;
      const completedThisWeek =
        completed &&
        completed.isoWeek() === now.isoWeek() &&
        completed.isoWeekYear() === now.isoWeekYear();
      const unCompleted = !completed;
      return (relevantThisWeek && unCompleted) || completedThisWeek;
    });
  },
  todoDefaultFields: (state) => {
    return state.todoFields;
  },
  normalTodoFields: (state) => {
    return state.todoFields.concat(state.normalTodoFields);
  },
  neverEndingTodoFields: (state) => {
    return state.todoFields.concat(state.neverEndingTodoFields);
  },
  repetitiveTodoFields: (state) => {
    return state.todoFields.concat(state.repetitiveTodoFields);
  },
  pipelineTodoFields: (state) => {
    const pipelineTodoFields = state.pipelineTodoFields;
    pipelineTodoFields[0].children = state.todos.map((todo) => {
      return {
        value: `${import.meta.env.VITE_API_URL}${state.api.todos}${todo.id}/`,
        text: todo.name,
      };
    });
    return state.todoFields.concat(pipelineTodoFields);
  },
  todoFormFields: (state, getters) => (type) => {
    switch (type) {
      case "NORMAL":
      case "normal-todo":
        return getters.normalTodoFields.filter((field) => !field.readOnly);
      case "REPETITIVE":
      case "repetitive-todo":
        return getters.repetitiveTodoFields.filter((field) => !field.readOnly);
      case "NEVER_ENDING":
      case "never-ending-todo":
        return getters.neverEndingTodoFields.filter((field) => !field.readOnly);
      case "PIPELINE":
      case "pipeline-todo":
        return getters.pipelineTodoFields.filter((field) => !field.readOnly);
      default:
        return [];
    }
  },
  todoListUrl: () => (todo) => {
    const defaultUrl = "#";
    if (!todo || !todo.type) return defaultUrl;
    switch (todo.type) {
      case "NORMAL":
      case "normal-todo":
        return "/t/list/normal-todos";
      case "REPETITIVE":
      case "repetitive-todo":
        return "/t/list/repetitive-todos";
      case "NEVER_ENDING":
      case "never-ending-todo":
        return "/t/list/never-ending-todos";
      case "PIPELINE":
      case "pipeline-todo":
        return "/t/list/pipeline-todos";
    }
    return defaultUrl;
  },
  /*
  // Other
  */
  week: (state) => {
    return moment(state.time).isoWeek();
  },
  year: (state) => {
    return moment(state.time).isoWeekYear();
  },
  time: (state) => {
    return moment(state.time);
  },
  timeActivate: (state) => {
    return moment(state.time).startOf("isoWeek");
  },
  timeDeadline: (state) => {
    return moment(state.time).endOf("isoWeek");
  },
};

const mutations = {
  /*
  // Todos
  */
  setApiState(state) {
    state.apiState = state;
  },
  setTodos(state, todos) {
    state.todos = todos;
  },
  addTodo(state, todo) {
    state.todos.push(todo);
  },
  changeTodo(state, todo) {
    let index = state.todos.findIndex((todoItem) => todoItem.url === todo.url);
    if (index !== -1) {
      state.todos.splice(index, 1, todo);
    }
  },
  removeTodo(state, url) {
    let index = state.todos.findIndex((todoItem) => todoItem.url === url);
    if (index !== -1) {
      state.todos.splice(index, 1);
    }
  },
  /*
  // Other
  */
  changeTime(state, time) {
    // time should be a moment object
    state.time = time.format();
  },
};

const actions = {
  /*
  // Todos
  */
  fetchTodos(context) {
    axios.get(context.state.api.state).then((response) => {
      let apiState = response.data.status;
      if (apiState !== context.state.apiState) {
        axios
          .get(context.state.api.todos)
          .then((response) => context.commit("setTodos", response.data));
        context.commit("setApiState", apiState);
      }
    });
  },
  createTodo(context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(payload.url, payload.data)
        .then((response) => {
          context.commit("addTodo", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  patchTodo(context, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch(data.url, data)
        .then((response) => {
          context.commit("changeTodo", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  deleteTodo(context, url) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then(() => {
          context.commit("removeTodo", url);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  createNormalTodo(context, data) {
    const payload = {
      url: context.state.api.normalTodo,
      data: data,
    };
    return context.dispatch("createTodo", payload);
  },
  createNeverEndingTodo(context, data) {
    const payload = {
      url: context.state.api.neverEndingTodo,
      data: data,
    };
    return context.dispatch("createTodo", payload);
  },
  createRepetitiveTodo(context, data) {
    const payload = {
      url: context.state.api.repetitiveTodo,
      data: data,
    };
    return context.dispatch("createTodo", payload);
  },
  createPipelineTodo(context, data) {
    const payload = {
      url: context.state.api.pipelineTodo,
      data: data,
    };
    return context.dispatch("createTodo", payload);
  },
  /*
  // Other
  */
  changeTimeToNextWeek({ state, commit }) {
    let time = moment(state.time).add(1, "week").startOf("isoWeek");
    const now = moment();
    if (
      time.isoWeek() == now.isoWeek() &&
      time.isoWeekYear() == now.isoWeekYear()
    )
      time = now;
    commit("changeTime", time);
  },
  changeTimeToPreviousWeek({ state, commit }) {
    let time = moment(state.time).subtract(1, "week"); //.startOf("isoWeek");
    const now = moment();
    if (
      time.isoWeek() == now.isoWeek() &&
      time.isoWeekYear() == now.isoWeekYear()
    )
      time = now;
    commit("changeTime", time);
  },
};

export const todos = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
