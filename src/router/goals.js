// main views
import Dashboard from "../views/goals/Dashboard.vue";
import Add from "../views/goals/Add.vue";
import Star from "../views/goals/Star.vue";
import Tree from "../views/goals/Tree.vue";
// goals
import GoalDetail from "../views/goals/GoalDetail.vue";
import GoalCreate from "../views/goals/GoalCreate.vue";
import GoalUpdate from "../views/goals/GoalUpdate.vue";
import GoalDelete from "../views/goals/GoalDelete.vue";
// monitor
import MonitorDetail from "../views/goals/MonitorDetail.vue";
import MonitorCreate from "../views/goals/MonitorCreate.vue";
import MonitorUpdate from "../views/goals/MonitorUpdate.vue";
import MonitorDelete from "../views/goals/MonitorDelete.vue";
// link
import LinkDetail from "../views/goals/LinkDetail.vue";
import LinkCreate from "../views/goals/LinkCreate.vue";
import LinkUpdate from "../views/goals/LinkUpdate.vue";
import LinkDelete from "../views/goals/LinkDelete.vue";
// strategy
import StrategyDetail from "../views/goals/StrategyDetail.vue";
import StrategyCreate from "../views/goals/StrategyCreate.vue";
import StrategyUpdate from "../views/goals/StrategyUpdate.vue";
import StrategyDelete from "../views/goals/StrategyDelete.vue";

export default [
  /*
  // Main Pages 
  */
  {
    path: "/g/goals/",
    component: Dashboard,
    name: "goals-dashboard",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/starred/",
    component: Star,
    name: "goals-star",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/tree/",
    component: Tree,
    name: "goals-tree",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /* 
  // Add Pages
  */
  {
    path: "/g/add/",
    component: Add,
    name: "goals-add",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/goal/",
    component: GoalCreate,
    name: "goals-goal-create",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/link/",
    component: LinkCreate,
    name: "goals-link-create",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/monitor/",
    component: MonitorCreate,
    name: "goals-monitor-create",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/strategy/",
    component: StrategyCreate,
    name: "goals-strategy-create",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** Detail Pages
   */
  {
    path: "/g/list/goals/:id/",
    component: GoalDetail,
    name: "goals-goal-detail",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/monitors/:id/",
    component: MonitorDetail,
    name: "goals-monitor-detail",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links/:id/",
    component: LinkDetail,
    name: "goals-link-detail",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies/:id/",
    component: StrategyDetail,
    name: "goals-strategy-detail",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** Edit Pages
   */
  {
    path: "/g/list/goals/:id/edit/",
    component: GoalUpdate,
    name: "goals-goal-update",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies/:id/edit/",
    component: StrategyUpdate,
    name: "goals-strategy-update",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/monitors/:id/edit/",
    component: MonitorUpdate,
    name: "goals-monitor-update",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links/:id/edit/",
    component: LinkUpdate,
    name: "goals-link-update",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** Delete Pages
   */
  {
    path: "/g/list/goals/:id/delete/",
    component: GoalDelete,
    name: "goals-goal-delete",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/monitors/:id/delete/",
    component: MonitorDelete,
    name: "goals-monitor-delete",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies/:id/delete/",
    component: StrategyDelete,
    name: "goals-strategy-delete",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links/:id/delete/",
    component: LinkDelete,
    name: "goals-link-delete",
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
