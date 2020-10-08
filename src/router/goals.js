import GoalDashboard from "@/components/GoalDashboard.vue";
import GoalDetail from "@/components/GoalDetail.vue";
import GoalList from "@/components/GoalList.vue";
import GoalListGoals from "@/components/GoalListGoals.vue";
import GoalListLinks from "@/components/GoalListLinks.vue";
import GoalListMonitors from "@/components/GoalListMonitors.vue";
import GoalListStrategies from "@/components/GoalListStrategies.vue";
import GoalsAdd from '@/views/GoalsAdd.vue';
import GoalsAddGoal from '@/views/GoalsAddGoal.vue';
import GoalsAddMonitor from '@/views/GoalsAddMonitor.vue';
import GoalsAddLink from '@/views/GoalsAddLink.vue';
import GoalsAddStrategy from '@/views/GoalsAddStrategy.vue';
import GoalsLink from '@/views/GoalsLink.vue';
import GoalsMonitor from '@/views/GoalsMonitor.vue';
import GoalsStrategy from '@/views/GoalsStrategy.vue';

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
    path: "/g/add",
    component: GoalsAdd,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/goal",
    component: GoalsAddGoal,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/link",
    component: GoalsAddLink,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/monitor",
    component: GoalsAddMonitor,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/strategy",
    component: GoalsAddStrategy,
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
  {
    path: "/g/list/monitors/:id",
    component: GoalsMonitor,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links/:id",
    component: GoalsLink,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies/:id",
    component: GoalsStrategy,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
