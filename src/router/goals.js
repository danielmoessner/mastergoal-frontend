import GoalDashboard from "@/components/GoalDashboard.vue";
import GoalDetail from "@/components/GoalDetail.vue";
import GoalList from "@/components/GoalList.vue";
import GoalListGoals from "@/components/GoalListGoals.vue";
import GoalListLinks from "@/components/GoalListLinks.vue";
import GoalListMonitors from "@/components/GoalListMonitors.vue";
import GoalListStrategies from "@/components/GoalListStrategies.vue";

export default [
  {
    path: "/g/goals",
    component: GoalDashboard,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list",
    component: GoalList,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/goals",
    component: GoalListGoals,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies",
    component: GoalListStrategies,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/monitors",
    component: GoalListMonitors,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links",
    component: GoalListLinks,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/goals/:id",
    component: GoalDetail,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
