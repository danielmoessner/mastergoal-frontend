import GoalDashboard from "@/views/GoalsDashboard.vue";
import GoalsGoalDetail from "@/views/GoalsGoalDetail.vue";
import GoalsList from "@/views/GoalsList.vue";
import GoalsListGoal from "@/views/GoalsListGoal.vue";
import GoalsListLink from "@/views/GoalsListLink.vue";
import GoalsListMonitor from "@/views/GoalsListMonitor.vue";
import GoalsListStrategy from "@/views/GoalsListStrategy.vue";
import GoalsAdd from "@/views/GoalsAdd.vue";
import GoalsAddGoal from "@/views/GoalsAddGoal.vue";
import GoalsAddMonitor from "@/views/GoalsAddMonitor.vue";
import GoalsAddLink from "@/views/GoalsAddLink.vue";
import GoalsAddStrategy from "@/views/GoalsAddStrategy.vue";
import GoalsLink from "@/views/GoalsLinkDetail.vue";
import GoalsMonitor from "@/views/GoalsMonitorDetail.vue";
import GoalsStrategy from "@/views/GoalsStrategyDetail.vue";
import GoalsStarred from "@/views/GoalsStarred.vue";
import GoalsTree from "@/views/GoalsTree.vue";
import GoalsGoalEdit from "@/views/GoalsGoalEdit.vue";
import GoalsStrategyEdit from "@/views/GoalsStrategyEdit.vue";
import GoalsMonitorEdit from "@/views/GoalsMonitorEdit.vue";
import GoalsLinkEdit from "@/views/GoalsLinkEdit.vue";
import GoalsGoalDelete from "@/views/GoalsGoalDelete.vue";
import GoalsMonitorDelete from "@/views/GoalsMonitorDelete.vue";
import GoalsStrategyDelete from "@/views/GoalsStrategyDelete.vue";
import GoalsLinkDelete from "@/views/GoalsLinkDelete.vue";

export default [
  {
    path: "/g/goals/",
    component: GoalDashboard,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/starred/",
    component: GoalsStarred,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/tree/",
    component: GoalsTree,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** Add Pages
   */
  {
    path: "/g/add/",
    component: GoalsAdd,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/goal/",
    component: GoalsAddGoal,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/link/",
    component: GoalsAddLink,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/monitor/",
    component: GoalsAddMonitor,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/strategy/",
    component: GoalsAddStrategy,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** List Pages
   */
  {
    path: "/g/list/",
    component: GoalsList,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/goals/",
    component: GoalsListGoal,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies/",
    component: GoalsListStrategy,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/monitors/",
    component: GoalsListMonitor,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links/",
    component: GoalsListLink,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** Detail Pages
   */
  {
    path: "/g/list/goals/:id/",
    component: GoalsGoalDetail,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/monitors/:id/",
    component: GoalsMonitor,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links/:id/",
    component: GoalsLink,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies/:id/",
    component: GoalsStrategy,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** Edit Pages
   */
  {
    path: "/g/list/goals/:id/edit/",
    component: GoalsGoalEdit,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies/:id/edit/",
    component: GoalsStrategyEdit,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/monitors/:id/edit/",
    component: GoalsMonitorEdit,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links/:id/edit/",
    component: GoalsLinkEdit,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** Delete Pages
   */
  {
    path: "/g/list/goals/:id/delete/",
    component: GoalsGoalDelete,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/monitors/:id/delete/",
    component: GoalsMonitorDelete,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies/:id/delete/",
    component: GoalsStrategyDelete,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links/:id/delete/",
    component: GoalsLinkDelete,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
