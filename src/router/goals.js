// main views
import Dashboard from "../views/goals/Dashboard.vue";
import List from "../views/goals/List.vue";
import Add from "../views/goals/Add.vue";
import Star from "../views/goals/Star.vue";
import Tree from "../views/goals/Tree.vue";
// goals
import GoalList from "../views/goals/GoalList.vue";
import GoalDetail from "../views/goals/GoalDetail.vue";
import GoalCreate from "../views/goals/GoalCreate.vue";
import GoalUpdate from "../views/goals/GoalUpdate.vue";
import GoalDelete from "../views/goals/GoalDelete.vue";
// monitor
import MonitorList from "../views/goals/MonitorList.vue";
import MonitorDetail from "../views/goals/MonitorDetail.vue";
import MonitorCreate from "../views/goals/MonitorCreate.vue";
import MonitorUpdate from "../views/goals/MonitorUpdate.vue";
import MonitorDelete from "../views/goals/MonitorDelete.vue";
// link
import LinkList from "../views/goals/LinkList.vue";
import LinkDetail from "../views/goals/LinkDetail.vue";
import LinkCreate from "../views/goals/LinkCreate.vue";
import LinkUpdate from "../views/goals/LinkUpdate.vue";
import LinkDelete from "../views/goals/LinkDelete.vue";
// strategy
import StrategyList from "../views/goals/StrategyList.vue";
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
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/starred/",
    component: Star,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/tree/",
    component: Tree,
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
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/goal/",
    component: GoalCreate,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/link/",
    component: LinkCreate,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/monitor/",
    component: MonitorCreate,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/add/strategy/",
    component: StrategyCreate,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  /*
   ** List Pages
   */
  {
    path: "/g/list/",
    component: List,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/goals/",
    component: GoalList,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies/",
    component: StrategyList,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/monitors/",
    component: MonitorList,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links/",
    component: LinkList,
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
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/monitors/:id/",
    component: MonitorDetail,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links/:id/",
    component: LinkDetail,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies/:id/",
    component: StrategyDetail,
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
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies/:id/edit/",
    component: StrategyUpdate,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/monitors/:id/edit/",
    component: MonitorUpdate,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links/:id/edit/",
    component: LinkUpdate,
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
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/monitors/:id/delete/",
    component: MonitorDelete,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/strategies/:id/delete/",
    component: StrategyDelete,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/g/list/links/:id/delete/",
    component: LinkDelete,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];
