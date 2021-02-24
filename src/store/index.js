import { createStore } from "vuex";

import { alert } from "./alert";
import { todos } from "./todos";
import { users } from "./users";
import { notes } from "./notes";

export default createStore({
  modules: {
    alert,
    todos,
    users,
    notes,
  },
});
