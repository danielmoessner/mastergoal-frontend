import { createStore } from "vuex";

import { alert } from "./alert";
import { todos } from "./todos";
import { users } from "./users";
import { notes } from "./notes";
import { goals } from "./goals";
import { story } from "./story";

export default createStore({
  modules: {
    alert,
    todos,
    users,
    notes,
    goals,
    story,
  },
});
