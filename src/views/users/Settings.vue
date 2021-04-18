<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/u/settings" text="Settings"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <GeneralBox :overflow="false">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <OverviewItem name="User settings" link="/u/settings/user-settings">
          <UserSvg />
        </OverviewItem>
        <OverviewItem name="Todo settings" link="/u/settings/todo-settings">
          <TodoSvg />
        </OverviewItem>
        <OverviewItem name="Goal settings" link="/u/settings/goal-settings">
          <GoalSvg />
        </OverviewItem>
      </div>
    </GeneralBox>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import GeneralBox from "../../components/Box/General.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import OverviewItem from "../../components/OverviewItem.vue";
import UserSvg from "../../components/Svg/User.vue";
import TodoSvg from "../../components/Svg/NormalTodo.vue";
import GoalSvg from "../../components/Svg/Goal.vue";

export default {
  name: "UsersSettings",
  components: {
    OverviewItem,
    UserSvg,
    TodoSvg,
    GoalSvg,
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
