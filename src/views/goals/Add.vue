<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/g/add" text="Add"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <GeneralBox>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <OverviewItem name="Goal" link="/g/add/goal">
          <GoalSvg />
        </OverviewItem>
        <OverviewItem name="Monitor" link="/g/add/monitor">
          <MonitorSvg />
        </OverviewItem>
        <OverviewItem name="Strategy" link="/g/add/strategy">
          <StrategySvg />
        </OverviewItem>
        <OverviewItem name="Link" link="/g/add/link">
          <LinkSvg />
        </OverviewItem>
      </div>
    </GeneralBox>
  </BackendBox>
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
