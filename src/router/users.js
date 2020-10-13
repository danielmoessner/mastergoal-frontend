import SettingsPage from "@/views/UsersSettings.vue";
import SettingsGeneral from "@/views/UsersSettingsGeneral.vue";
import SettingsTodo from "@/views/UsersSettingsTodo.vue";
import SettingsGoal from "@/views/UsersSettingsGoal.vue";
import SettingsUser from "@/views/UsersSettingsUser.vue";
import SignIn from "@/views/UsersSignIn.vue";
import SignUp from "@/views/UsersSignUp.vue";

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
    component: SettingsPage,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/general-settings/",
    component: SettingsGeneral,
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
