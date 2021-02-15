<template>
  <backend-box>
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
        <heading-one :text="linkName"></heading-one>
        <property-text property="Weight" :text="link.weight"></property-text>
        <hr />
        <property-short property="Archived" :short="link.is_archived">
          <form-button
            v-on:response="changed"
            text="Toggle"
            v-if="link"
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
import GeneralBox from "../components/GeneralBox.vue";
import FormButton from "../components/FormButton.vue";
import GoalItem from "../components/GoalItem.vue";
import DetailGrid from "../components/DetailGrid.vue";
import HrefFormButton from "../components/HrefFormButton.vue";
import PropertyShort from "../components/PropertyShort.vue";
import HeadingOne from "../components/HeadingOne.vue";
import PropertyText from "../components/PropertyText.vue";
import GoalsLink from "../mixins/GoalsLink.js";

export default {
  name: "GoalDetail",
  mixins: [GoalsLink],
  components: {
    PropertyText,
    DetailGrid,
    HrefFormButton,
    PropertyShort,
    FormButton,
    HeadingOne,
    GeneralBox,
    GoalItem,
  },
  computed: {
    mastergoal() {
      if (!this.link) return false;
      return this.link.mastergoal;
    },
    subgoal() {
      if (!this.link) return false;
      return this.link.subgoal;
    },
  },
  methods: {
    changed(data) {
      this.item = data;
    },
  },
};
</script>
