<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link link="/g/add" text="Add"></breadcrumb-link>
    </breadcrumb-navigation>
    <general-box>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <overview-item name="Goal" link="/g/add/goal">
          <GoalSvg />
        </overview-item>
        <overview-item name="Monitor" link="/g/add/monitor">
          <MonitorSvg />
        </overview-item>
        <overview-item name="Strategy" link="/g/add/strategy">
          <StrategySvg />
        </overview-item>
        <overview-item name="Link" link="/g/add/link">
          <LinkSvg />
        </overview-item>
      </div>
    </general-box>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import OverviewItem from "../../components/OverviewItem.vue";
import GeneralBox from "../../components/Box/General.vue";
import GoalSvg from "../../components/Svg/Goal.vue";
import MonitorSvg from "../../components/Svg/Monitor.vue";
import StrategySvg from "../../components/Svg/Strategy.vue";
import LinkSvg from "../../components/Svg/Link.vue";

export default {
  components: {
    GeneralBox,
    OverviewItem,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    GoalSvg,
    MonitorSvg,
    StrategySvg,
    LinkSvg,
  },
};
</script>
