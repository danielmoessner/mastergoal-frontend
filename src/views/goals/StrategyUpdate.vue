<template>
  <backend-box v-if="strategy">
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Strategies"
        link="/g/list/strategies"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        :text="strategy.name"
        :link="'/g/list/strategies/' + strategy.id"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        :link="'/g/list/strategies/' + strategy.id + '/edit/'"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <general-box
      :overflow="false"
      class="col-span-2 lg:col-span-3 xl:col-span-3"
    >
      <dynamic-form
        action="goals/patchStrategy"
        success="Strategy saved"
        submit="Save"
        :initial="strategy"
        :fields="$store.getters['goals/strategyFormFields']"
      />
    </general-box>
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import GeneralBox from "../../components/Box/General.vue";
import DynamicForm from "../../components/DynamicForm.vue";

export default {
  components: {
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
    DynamicForm,
  },
  computed: {
    strategy() {
      return this.$store.getters["goals/strategy"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
    this.$store.dispatch("goals/fetchStrategies");
  },
};
</script>
