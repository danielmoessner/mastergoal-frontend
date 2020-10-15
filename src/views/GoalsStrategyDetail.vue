<template>
  <backend-box>
    <goals-strategy-breadcrumb :strategy="strategy"></goals-strategy-breadcrumb>
    <detail-grid>
      <goal-item v-bind:goal="goal" v-if="goal"></goal-item>
    </detail-grid>
    <detail-grid>
      <general-box
        class="col-span-2 lg:col-span-2 xl:col-span-3"
        v-bind:overflow="false"
      >
        <heading-one :text="strategy.name"></heading-one>
        <property-text
          property="Description"
          :text="strategy.description"
        ></property-text>
        <hr />
        <property-short property="Archived" :short="strategy.is_archived">
          <form-button
            v-on:response="changed"
            text="Toggle"
            v-if="strategy"
            v-bind:link="strategy.url"
            v-bind:data="{ is_archived: !strategy.is_archived }"
          ></form-button>
        </property-short>
        <property-short property="Starred" :short="strategy.is_starred">
          <form-button
            v-on:response="changed"
            text="Toggle"
            v-if="strategy"
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
import axios from "@/plugins/backendAxios.js";
import GeneralBox from "@/components/GeneralBox.vue";
import FormButton from "@/components/FormButton.vue";
import GoalItem from "@/components/GoalItem.vue";
import DetailGrid from "@/components/DetailGrid.vue";
import HeadingOne from "@/components/HeadingOne.vue";
import HrefFormButton from "@/components/HrefFormButton.vue";
import PropertyText from "@/components/PropertyText.vue";
import PropertyShort from "@/components/PropertyShort.vue";
import GoalsStrategy from "@/mixins/GoalsStrategy.js";

export default {
  name: "GoalDetail",
  mixins: [GoalsStrategy],
  components: {
    HeadingOne,
    PropertyText,
    PropertyShort,
    HrefFormButton,
    DetailGrid,
    GoalItem,
    FormButton,
    GeneralBox,
  },
  data() {
    return {
      goal: false,
    };
  },
  watch: {
    strategy() {
      axios
        .get(this.strategy.goal)
        .then((response) => (this.goal = response.data));
    },
  },
  methods: {
    changed(data) {
      this.item = data;
    },
  },
};
</script>
