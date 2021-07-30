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
    name: "users-signup",
    meta: {
      requiresAuthenticationFalse: true,
    },
  },
  {
    path: "/signin/",
    component: SignIn,
    name: "users-signin",
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
    name: "users-settings",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/todo-settings/",
    component: SettingsTodo,
    name: "users-settings-todos",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/goal-settings/",
    component: SettingsGoal,
    name: "users-settings-goals",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/user-settings/",
    component: SettingsUser,
    name: "users-settings-user",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
