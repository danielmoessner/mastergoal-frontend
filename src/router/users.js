import SettingsPage from "@/components/SettingsPage.vue";
import SettingsGeneral from "@/components/SettingsGeneral.vue";
import SettingsTodo from "@/components/SettingsTodo.vue";
import SettingsGoal from "@/components/SettingsGoal.vue";
import SettingsUser from "@/components/SettingsUser.vue";

export default [
  {
    path: "/u/settings",
    component: SettingsPage,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/general-settings",
    component: SettingsGeneral,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/todo-settings",
    component: SettingsTodo,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/goal-settings",
    component: SettingsGoal,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/u/settings/user-settings",
    component: SettingsUser,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
