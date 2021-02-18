import axios from "../plugins/backendAxios";
import moment from "moment";

const state = {
  todos: [],
  apiState: false,
  time: moment().valueOf(),
  api: {
    todos: "/t/api/todos/",
    normalTodo: "/t/api/normal-todos/",
    neverEndingTodo: "/t/api/never-ending-todos/",
    repetitiveTodo: "/t/api/repetitive-todos/",
    pipelineTodo: "/t/api/pipeline-todos/",
    state: "/t/api/state/",
  },
};

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
  setApiState(state) {
    state.apiState = state;
  },
  changeTodo(state, todo) {
    let index = state.todos.findIndex((todoItem) => todoItem.url === todo.url);
    if (index !== -1) {
      state.todos.splice(index, 1, todo);
    }
  },
  addTodo(state, todo) {
    state.todos.push(todo);
  },
  removeTodo(state, url) {
    let index = state.todos.findIndex((todoItem) => todoItem.url === url);
    if (index !== -1) {
      state.todos.splice(index, 1);
    }
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
    axios.get(context.state.api.state).then((response) => {
      let apiState = response.data.status;
      console.log(apiState);
      if (apiState !== context.state.apiState) {
        axios
          .get(context.state.api.todos)
          .then((response) => context.commit("setTodos", response.data));
        context.commit("setApiState", apiState);
      }
    });
  },
  todoChanged(context, todo) {
    context.commit("changeTodo", todo);
  },
  patchTodo(context, data) {
    axios
      .patch(data.url, data)
      .then((response) => context.commit("changeTodo", response.data))
      .catch((error) => {
        reject(error.response.datal);
      });
  },
  changeTimeToNextWeek(context) {
    context.commit("changeTimeToNextWeek");
  },
  changeTimeToPreviousWeek(context) {
    context.commit("changeTimeToPreviousWeek");
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
  patchTodo(context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .patch(payload.url, payload.data)
        .then((response) => {
          context.commit("changeTodo", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  updateTodo(context, data) {
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
        .then((response) => {
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
};

const getters = {
  todos: (state, getters) => {
    return state.todos;
  },
  normalTodos: (state, getters) => {
    return getters.todos.filter((todo) => todo.type === "NORMAL");
  },
  pipelineTodos: (state, getters) => {
    return getters.todos.filter((todo) => todo.type === "PIPELINE");
  },
  neverEndingTodos: (state, getters) => {
    return getters.todos.filter((todo) => todo.type === "NEVER_ENDING");
  },
  repetitiveTodos: (state, getters) => {
    return getters.todos.filter((todo) => todo.type === "REPETITIVE");
  },
  todo: (state, getters) => (id) => {
    return getters.todos.find((todo) => todo.id.toString() === id);
  },
  todosThisWeek: (state, getters) => {
    const now = moment(state.time);
    return getters.todos.filter((todo) => {
      const activate = moment(todo.activate);
      const deadline = moment(todo.deadline);
      const relevantThisWeek =
        activate <= now ||
        (deadline.isoWeek() <= now.isoWeek() &&
          deadline.isoWeekYear() <= now.isoWeekYear());
      const completed = todo.completed ? moment(todo.completed) : false;
      const completedThisWeek =
        completed &&
        completed.isoWeek() === now.isoWeek() &&
        completed.isoWeekYear() === now.isoWeekYear();
      const unCompleted = !completed;
      return (relevantThisWeek && unCompleted) || completedThisWeek;
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
    return moment(state.time).startOf("isoWeek");
  },
  timeDeadline: (state, getters) => {
    return moment(state.time).endOf("isoWeek");
  },
  todoDefaultFields: (state, getters) => {
    return [
      {
        type: "hidden",
        name: "url",
        as: "input",
        create: false,
        readOnly: false,
      },
      {
        type: "text",
        label: "Name",
        name: "name",
        as: "input",
        create: true,
        readOnly: false,
      },
      {
        label: "Status",
        name: "status",
        as: "select",
        create: false,
        readOnly: false,
        children: [
          {
            tag: "option",
            value: "ACTIVE",
            text: "Active",
          },
          {
            tag: "option",
            value: "DONE",
            text: "Done",
          },
          {
            tag: "option",
            value: "FAILED",
            text: "Failed",
          },
        ],
      },
      {
        name: "notes",
        as: "textarea",
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
    ];
  },
  normalTodoFields: (state, getters) => {
    const fields = [
      {
        type: "datetime-local",
        name: "activate",
        as: "input",
        label: "Activate",
        create: true,
        readOnly: false,
      },
      {
        type: "datetime-local",
        name: "deadline",
        as: "input",
        label: "Deadline",
        create: true,
        readOnly: false,
      },
    ];
    return getters.todoDefaultFields.concat(fields);
  },
  neverEndingTodoFields: (state, getters) => {
    const fields = [
      {
        type: "datetime-local",
        name: "activate",
        as: "input",
        label: "Activate",
        create: false,
        readOnly: false,
      },
      {
        type: "text",
        name: "duration",
        label: "Duration",
        placeholder: "7 days",
        as: "input",
        create: true,
        readOnly: false,
      },
    ];
    return getters.todoDefaultFields.concat(fields);
  },
  repetitiveTodoFields: (state, getters) => {
    const fields = [
      {
        type: "datetime-local",
        name: "activate",
        as: "input",
        label: "Activate",
        create: true,
        readOnly: false,
      },
      {
        type: "datetime-local",
        name: "deadline",
        as: "input",
        label: "Deadline",
        create: true,
        readOnly: false,
      },
      {
        type: "text",
        name: "duration",
        label: "Repeat",
        placeholder: "7 days",
        as: "input",
        create: true,
        readOnly: false,
      },
      {
        type: "number",
        name: "repetitions",
        label: "Repetitions",
        placeholder: "10",
        as: "input",
        create: true,
        readOnly: false,
      },
    ];
    return getters.todoDefaultFields.concat(fields);
  },
  pipelineTodoFields: (state, getters) => {
    const fields = [
      {
        label: "Previous",
        name: "previous",
        as: "select",
        create: true,
        readOnly: false,
        children: getters.todos.map((todo) => {
          return {
            tag: "option",
            value: `${import.meta.env.VITE_API_URL}/t/api/todos/${todo.id}/`,
            text: todo.name,
          };
        }),
      },
    ];
    return getters.todoDefaultFields.concat(fields);
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
  todoListUrl: (state, getters) => (todo) => {
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
};

export const todos = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
