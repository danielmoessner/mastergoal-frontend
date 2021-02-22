import { createStore } from "vuex";

import { alert } from "./alert";
import { auth } from "./auth";
import { todos } from "./todos";
import { users } from "./users";

export default createStore({
  modules: {
    alert,
    auth,
    todos,
    users,
  },
});
