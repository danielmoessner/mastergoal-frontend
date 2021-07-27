<template>
  <BackendBox>
    <BreadcrumbNavigation>
      <BreadcrumbLink link="/a/dashboard" text="Dashboard"></BreadcrumbLink>
    </BreadcrumbNavigation>
    <div>Dashboard Achievements</div>
    <router-link to="/a/create/">add achievement</router-link>
    <router-link
      v-for="a in achievements"
      :key="a.url"
      :to="`/a/${a.id}/update/`"
    >
      {{ a.title }}
    </router-link>
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
