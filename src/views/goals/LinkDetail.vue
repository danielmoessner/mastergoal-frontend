<template>
  <backend-box v-if="link">
    <goals-link-breadcrumb :link="link"></goals-link-breadcrumb>
    <detail-grid>
      <goal-item
        v-if="mastergoal"
        :goal="mastergoal"
        type="Mastergoal"
      ></goal-item>
      <DetailBox :heading="`${mastergoal.name} -> ${subgoal.name}`">
        <template #actions>
          <Archive :selected="link.is_archived" @click="archive()" />
          <Edit to="edit/" />
          <Delete to="delete/" />
        </template>
        <template #infos>
          <Info :info="`${link.weight}`" abbr="Weight">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                clip-rule="evenodd"
              />
            </svg>
          </Info>
        </template>
      </DetailBox>
      <goal-item v-if="subgoal" :goal="subgoal" type="Subgoal"></goal-item>
    </detail-grid>
  </backend-box>
</template>

<script>
import GoalItem from "../../components/GoalItem.vue";
import DetailGrid from "../../components/DetailGrid.vue";
import BackendBox from "../../components/BackendBox.vue";
import GoalsLinkBreadcrumb from "../../components/GoalsLinkBreadcrumb.vue";
import DetailBox from "../../components/Box/Detail.vue";
import Archive from "../../components/Action/Archive.vue";
import Delete from "../../components/Action/Delete.vue";
import Edit from "../../components/Action/Edit.vue";
import Info from "../../components/Info.vue";

export default {
  components: {
    DetailBox,
    GoalsLinkBreadcrumb,
    BackendBox,
    Archive,
    Delete,
    Edit,
    DetailGrid,
    Info,
    GoalItem,
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
  methods: {
    archive() {
      const data = {
        is_archived: !this.link.is_archived,
        url: this.link.url,
      };
      this.$store.dispatch("goals/patchLink", data);
    },
  },
};
</script>
