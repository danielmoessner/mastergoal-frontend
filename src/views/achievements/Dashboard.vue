<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/a/" text="Dashboard"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <div class="mb-5">
      <Button to="/a/create/">Add Achievement</Button>
    </div>
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <DetailBox
        v-for="achievement in achievements"
        :key="achievement.url"
        :heading="achievement.title"
      >
        <template #actions>
          <Edit :to="`/a/${achievement.id}/update/`" />
          <Delete :to="`/a/${achievement.id}/delete/`" />
        </template>
        <template #infos>
          <div class="text-sm font-medium text-gray-500 truncate">
            {{ new Date(achievement.date).toLocaleDateString("de-DE") }}
          </div>
        </template>
        <template #content>
          <div class="text-base text-gray-800">
            {{ achievement.description }}
          </div>
        </template>
      </DetailBox>
    </div>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import { mapGetters } from "vuex";
import DetailBox from "../../components/Box/Detail.vue";
import Delete from "../../components/Action/Delete.vue";
import Edit from "../../components/Action/Edit.vue";
import Button from "../../components/Button/Tertiary.vue";

export default {
  components: {
    Button,
    Delete,
    Edit,
    DetailBox,
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
  },
  data() {
    return {
      stats: [
        { name: "Total Subscribers", stat: "71,897" },
        { name: "Avg. Open Rate", stat: "58.16%" },
        { name: "Avg. Click Rate", stat: "24.57%" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      achievements: "achievements/achievements",
    }),
  },
  mounted() {
    this.$store.dispatch("achievements/fetchAchievements");
  },
};
</script>
