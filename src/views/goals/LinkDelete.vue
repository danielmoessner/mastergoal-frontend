<template>
  <backend-box v-if="link">
    <goals-link-breadcrumb :link="link">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        :link="'/g/list/links/' + link.id + '/delete/'"
        text="Delete"
      ></breadcrumb-link>
    </goals-link-breadcrumb>
    <delete-box
      :object="`${mastergoal.name} -> ${subgoal.name}`"
      :to="`/g/list/goals/${goal.id}/`"
      @click="deleteGoal"
    />
  </backend-box>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../../components/BreadcrumbDivider.vue";
import GoalsLinkBreadcrumb from "../../components/GoalsLinkBreadcrumb.vue";
import DeleteBox from "../../components/Box/Delete.vue";

export default {
  components: {
    GoalsLinkBreadcrumb,
    DeleteBox,
    BackendBox,
    BreadcrumbLink,
    BreadcrumbDivider,
  },
  computed: {
    link() {
      return this.$store.getters["goals/link"](this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchLinks");
  },
  methods: {
    deleteLink() {
      this.$store
        .dispatch("goals/deleteLink", this.link.url)
        .then(() => this.$router.push("/g/goals/"));
    },
  },
};
</script>
