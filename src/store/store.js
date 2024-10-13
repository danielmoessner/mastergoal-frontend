import { createStore } from 'vuex';
import { alert } from '@/store/alert.js';
import { api } from '@/store/api.js';
import { auth } from '@/store/auth.js';

export default createStore({
  modules: {
    alert,
    api,
    auth,
  },
});