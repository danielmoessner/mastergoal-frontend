import GoalDashboard from "@/views/GoalsDashboard.vue";
import GoalsGoal from "@/views/GoalsGoal.vue";
import GoalsList from "@/views/GoalsList.vue";
import GoalsListGoal from "@/views/GoalsListGoal.vue";
import GoalsListLink from "@/views/GoalsListLink.vue";
import GoalsListMonitor from "@/views/GoalsListMonitor.vue";
import GoalsListStrategy from "@/views/GoalsListStrategy.vue";
import GoalsAdd from '@/views/GoalsAdd.vue';
import GoalsAddGoal from '@/views/GoalsAddGoal.vue';
import GoalsAddMonitor from '@/views/GoalsAddMonitor.vue';
import GoalsAddLink from '@/views/GoalsAddLink.vue';
import GoalsAddStrategy from '@/views/GoalsAddStrategy.vue';
import GoalsLink from '@/views/GoalsLink.vue';
import GoalsMonitor from '@/views/GoalsMonitor.vue';
import GoalsStrategy from '@/views/GoalsStrategy.vue';
import GoalsStarred from '@/views/GoalsStarred.vue';
import GoalsTree from '@/views/GoalsTree.vue';
import GoalsGoalEdit from '@/views/GoalsGoalEdit.vue';

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
    }
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
    component: GoalsGoal,
    meta: {
      requiresAuthenticationTrue: true,
    }
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
];
