<template>
  <backend-box v-if="link">
    <goals-link-breadcrumb :link="link"></goals-link-breadcrumb>
    <detail-grid>
      <goal-item
        v-if="mastergoal"
        v-bind:goal="mastergoal"
        type="Mastergoal"
      ></goal-item>
    </detail-grid>
    <detail-grid>
      <general-box
        class="col-span-2 lg:col-span-2 xl:col-span-3"
        v-bind:overflow="false"
      >
        <heading-one
          :text="`${mastergoal.name} --> ${subgoal.name}`"
        ></heading-one>
        <property-text property="Weight" :text="link.weight"></property-text>
        <hr />
        <property-short property="Archived" :short="link.is_archived">
          <form-button
            text="Toggle"
            v-bind:link="link.url"
            v-bind:data="{ is_archived: !link.is_archived }"
          ></form-button>
        </property-short>
        <hr />
        <href-form-button to="edit/" text="Edit"></href-form-button>
        <href-form-button to="delete/" text="Delete"></href-form-button>
      </general-box>
    </detail-grid>
    <detail-grid>
      <goal-item
        v-if="subgoal"
        v-bind:goal="subgoal"
        type="Subgoal"
      ></goal-item>
    </detail-grid>
  </backend-box>
</template>

<script>
import GeneralBox from "../../components/Box/General.vue";
import FormButton from "../../components/FormButton.vue";
import GoalItem from "../../components/GoalItem.vue";
import MonitorItem from "../../components/MonitorItem.vue";
import StrategyItem from "../../components/StrategyItem.vue";
import HeadingOne from "../../components/HeadingOne.vue";
import PropertyText from "../../components/PropertyText.vue";
import PropertyShort from "../../components/PropertyShort.vue";
import HrefFormButton from "../../components/HrefFormButton.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import GoalsGoalBreadcrumb from "../../components/GoalsGoalBreadcrumb.vue";
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GoalsLinkBreadcrumb from "../../components/GoalsLinkBreadcrumb.vue";

export default {
  components: {
    GoalsLinkBreadcrumb,
    BreadcrumbDivider,
    BreadcrumbLink,
    BackendBox,
    GoalsGoalBreadcrumb,
    FormButton,
    DetailGrid,
    PropertyShort,
    GeneralBox,
    GoalItem,
    MonitorItem,
    PropertyText,
    StrategyItem,
    HeadingOne,
    HrefFormButton,
  },
  computed: {
    link() {
      return this.$store.getters["goals/link"](this.$route.params.id);
    },
    mastergoal() {
      return this.$store.getters["goals/goal"](this.link.master_goal);
    },
    subgoal() {
      return this.$store.getters["goals/goal"](this.link.sub_goal);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
    this.$store.dispatch("goals/fetchLinks");
  },
};
</script>
