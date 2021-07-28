<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/a/dashboard" text="Dashboard"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <div class="mb-8">Dashboard Achievements</div>
    <router-link class="mb-4 block" to="/a/create/">
      add achievement
    </router-link>
    <div class="grid gap-6 grid-cols-2 bg-white">
      <div v-for="achievement in achievements" :key="achievement.url">
        <h2>{{ achievement.title }}</h2>
        <time>{{ achievement.date }}</time>
        <p>
          {{ achievement.description }}
        </p>
        <router-link :to="`/a/${achievement.id}/update/`"> update </router-link>
        <router-link :to="`/a/${achievement.id}/delete/`"> delete </router-link>
      </div>
    </div>
  </BackendBox>
</template>

<script>
import BackendBox from "../../components/BackendBox.vue";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../../components/BreadcrumbLink.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
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
