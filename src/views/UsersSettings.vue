<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/u/settings" text="Settings"></breadcrumb-link>
    </breadcrumb-navigation>
    <general-box :overflow="false">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <overview-item name="User settings" link="/u/settings/user-settings">
          <UserSvg />
        </overview-item>
        <overview-item
          name="General settings"
          link="/u/settings/general-settings"
        >
          <GeneralSvg />
        </overview-item>
        <overview-item name="Todo settings" link="/u/settings/todo-settings">
          <TodoSvg />
        </overview-item>
        <overview-item name="Goal settings" link="/u/settings/goal-settings">
          <GoalSvg />
        </overview-item>
      </div>
    </general-box>
  </backend-box>
</template>

<script>
import BackendBox from "../components/BackendBox.vue";
import GeneralBox from "../components/Box/General.vue";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import OverviewItem from "../components/OverviewItem.vue";
import UserSvg from "../components/Svg/User.vue";
import TodoSvg from "../components/Svg/NormalTodo.vue";
import GoalSvg from "../components/Svg/Goal.vue";
import GeneralSvg from "../components/Svg/General.vue";

export default {
  name: "UsersSettings",
  components: {
    OverviewItem,
    UserSvg,
    TodoSvg,
    GoalSvg,
    GeneralSvg,
    BackendBox,
    GeneralBox,
    BreadcrumbLink,
    BreadcrumbNavigation,
  },
  mounted() {
    this.$store.dispatch("users/fetchUser");
  },
};
</script>
