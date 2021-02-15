import { createStore } from "vuex";

import { alert } from "./alert";
import { auth } from "./auth";
import { todos } from "./todos";

export default createStore({
  modules: {
    alert,
    auth,
    todos,
  },
});
