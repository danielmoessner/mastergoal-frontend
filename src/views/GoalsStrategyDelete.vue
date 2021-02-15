<template>
  <backend-box>
    <goals-strategy-breadcrumb :strategy="strategy">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-bind:link="'/g/list/strategies/' + strategy.id + '/delete/'"
        text="Delete"
      ></breadcrumb-link>
    </goals-strategy-breadcrumb>
    <detail-grid>
      <general-box class="col-span-2 md:col-span-3" :overflow="false">
        <div class="flex-col flex justify-start items-start">
          <p class="mb-4">
            Are you sure you want to delete '{{ strategy.name }}'?
          </p>
          <div class="flex items-end w-full justify-end">
            <navigation-button
              class="pt-2 pb-2"
              :link="'/g/list/strategies/' + $route.params.id + '/'"
              text="Cancel"
            ></navigation-button>
            <submit-button
              v-on:click.native.prevent="deleteStrategy"
              class="ml-2"
              text="Yes, delete"
            ></submit-button>
          </div>
        </div>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import GoalsStrategy from "../mixins/GoalsStrategy.js";
import NavigationButton from "../components/NavigationButton.vue";
import SubmitButton from "../components/SubmitButton.vue";
import axios from "../plugins/backendAxios.js";

export default {
  name: "GoalsStrategyDelete",
  mixins: [GoalsStrategy],
  components: {
    NavigationButton,
    SubmitButton,
  },
  methods: {
    deleteStrategy() {
      axios
        .delete(this.strategy.url)
        .then(() => this.$router.push("/g/list/strategies/"))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
