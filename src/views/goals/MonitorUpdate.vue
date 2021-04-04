<template>
  <backend-box v-if="monitor">
    <breadcrumb-navigation>
      <breadcrumb-link text="List" link="/g/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="monitors"
        link="/g/list/monitors"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        :text="monitor.name"
        :link="'/g/list/monitors/' + monitor.id"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="Edit"
        :link="'/g/list/monitors/' + monitor.id + '/edit/'"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <general-box
      :overflow="false"
      class="col-span-2 lg:col-span-3 xl:col-span-3"
    >
      <dynamic-form
        action="goals/patchMonitor"
        success="Monitor saved"
        submit="Save"
        :initial="monitor"
        :fields="$store.getters['goals/monitorFormFields']"
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
    DynamicForm,
    GeneralBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
  },
  computed: {
    monitor() {
      return this.$store.getters["goals/monitor"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchGoals");
    this.$store.dispatch("goals/fetchMonitors");
  },
};
</script>
