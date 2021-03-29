<template>
  <backend-box v-if="strategy">
    <goals-strategy-breadcrumb :strategy="strategy"></goals-strategy-breadcrumb>
    <detail-grid>
      <goal-item v-bind:goal="goal"></goal-item>
    </detail-grid>
    <detail-grid>
      <general-box class="col-span-2 lg:col-span-3" v-bind:overflow="false">
        <heading-one :text="strategy.name"></heading-one>
        <property-text
          property="Description"
          :text="strategy.description"
        ></property-text>
        <hr />
        <property-short property="Archived" :short="strategy.is_archived">
          <form-button
            text="Toggle"
            v-bind:link="strategy.url"
            v-bind:data="{ is_archived: !strategy.is_archived }"
          ></form-button>
        </property-short>
        <property-short property="Starred" :short="strategy.is_starred">
          <form-button
            text="Toggle"
            v-bind:link="strategy.url"
            v-bind:data="{ is_starred: !strategy.is_starred }"
          ></form-button>
        </property-short>
        <hr />
        <href-form-button to="edit/" text="Edit"></href-form-button>
        <href-form-button to="delete/" text="Delete"></href-form-button>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import FormButton from "../../components/FormButton.vue";
import GoalItem from "../../components/GoalItem.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import HeadingOne from "../../components/HeadingOne.vue";
import HrefFormButton from "../../components/HrefFormButton.vue";
import PropertyText from "../../components/PropertyText.vue";
import PropertyShort from "../../components/PropertyShort.vue";
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GeneralBox from "../../components/GeneralBox.vue";
import GoalsStrategyBreadcrumb from "../../components/GoalsStrategyBreadcrumb.vue";

export default {
  components: {
    GoalsStrategyBreadcrumb,
    BreadcrumbDivider,
    BreadcrumbLink,
    DetailGrid,
    BackendBox,
    HeadingOne,
    PropertyText,
    PropertyShort,
    HrefFormButton,
    GoalItem,
    FormButton,
    GeneralBox,
  },
  computed: {
    strategy() {
      return this.$store.getters["goals/strategy"](this.$route.params.id);
    },
    goal() {
      return this.$store.getters["goals/goal"](this.strategy.goal);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
    this.$store.dispatch("goals/fetchStrategies");
  },
};
</script>
