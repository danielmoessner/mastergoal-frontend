import Settings from "../views/users/Settings.vue";
import SettingsTodo from "../views/users/SettingsTodo.vue";
import SettingsGoal from "../views/users/SettingsGoal.vue";
import SettingsUser from "../views/users/SettingsUser.vue";
import SignIn from "../views/users/SignIn.vue";
import SignUp from "../views/users/SignUp.vue";

export default [
  {
    path: "/signup/",
    component: SignUp,
    meta: {
      requiresAuthenticationFalse: true,
    },
  },
  {
    path: "/signin/",
    component: SignIn,
    meta: {
      requiresAuthenticationFalse: true,
    },
  },
  /*
   ** Setting Pages
   */
  {
    path: "/u/settings/",
    component: Settings,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/todo-settings/",
    component: SettingsTodo,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/goal-settings/",
    component: SettingsGoal,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/user-settings/",
    component: SettingsUser,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
