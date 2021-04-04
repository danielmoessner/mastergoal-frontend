import axios from "../plugins/backendAxios";

const state = () => ({
  notes: [],
  api: {
    notes: "/notes/",
  },
  noteFields: [
    {
      type: "hidden",
      name: "url",
      create: false,
      readOnly: false,
    },
    {
      type: "tinymce",
      label: "Content",
      name: "content",
      create: true,
      readOnly: false,
    },
  ],
});

const getters = {
  notes: (state) => {
    return state.notes;
  },
  note: (state) => (id) => {
    return state.notes.find((note) => note.id.toString() === id);
  },
  noteFormFields: (state) => {
    return state.noteFields.filter((field) => field.create);
  },
};

const mutations = {
  setNotes(state, notes) {
    state.notes = notes;
  },
  changeNote(state, note) {
    let index = state.notes.findIndex((noteItem) => noteItem.url === note.url);
    if (index !== -1) {
      state.notes.splice(index, 1, note);
    }
  },
  addNote(state, note) {
    state.notes.push(note);
  },
  removeNote(state, url) {
    let index = state.notes.findIndex((noteItem) => noteItem.url === url);
    if (index !== -1) {
      state.notes.splice(index, 1);
    }
  },
};

const actions = {
  fetchNotes(context) {
    if (context.state.notes.length === 0) {
      axios
        .get(context.state.api.notes)
        .then((response) => context.commit("setNotes", response.data));
    }
  },
  createNote({ state, commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(state.api.notes, data)
        .then((response) => {
          commit("addNote", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  patchNote({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch(data.url, data)
        .then((response) => {
          commit("changeNote", response.data);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
  deleteNote({ commit }, url) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then(() => {
          commit("removeNote", url);
          resolve();
        })
        .catch((error) => reject(error.response.data));
    });
  },
};

export const notes = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
