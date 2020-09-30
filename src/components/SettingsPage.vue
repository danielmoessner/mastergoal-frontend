<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/u/settings" name="Settings"></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box v-bind:overflow="false">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <settings-item
            name="User settings"
            link="/u/settings/user-settings"
            v-bind:iconPaths="userIcon"
          ></settings-item>
          <settings-item
            name="General settings"
            link="/u/settings/general-settings"
            v-bind:iconPaths="generalIcon"
          ></settings-item>
          <settings-item
            name="Todo settings"
            link="/u/settings/todo-settings"
            v-bind:iconPaths="todoIcon"
          ></settings-item>
          <settings-item
            name="Goal settings"
            link="/u/settings/goal-settings"
            v-bind:iconPaths="goalIcon"
          ></settings-item>
        </div>
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "@/components/BackendBox.vue";
import GeneralBox from "@/components/GeneralBox.vue";
import SettingsItem from "@/components/SettingsItem.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";

export default {
  name: "SettingsPage",
  components: {
    BackendBox,
    GeneralBox,
    SettingsItem,
    BreadcrumbLink,
    BreadcrumbNavigation,
  },
  data() {
    return {
      todoIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />',
      userIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />',
      goalIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />',
      generalIcon:
        ' <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />',
    };
  },
};
</script>
