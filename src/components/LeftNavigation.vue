<template>
  <div class="w-full md:min-h-screen sticky top-0">
    <MastergoalLogo @click="toggle">
      <svg
        v-if="!open"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="h-6 w-6 mr-2 text-gray-100 md:hidden cursor-pointer"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
      <svg
        v-if="open"
        class="h-6 w-6 mr-2 text-gray-100 md:hidden cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </MastergoalLogo>
    <div
      ref="navigation"
      class="overflow-hidden transition-all ease-in-out duration-300 relative z-0 rounded-lg bg-white md:mb-0 md:bg-transparent md:h-auto"
      :class="{ 'h-0': !open }"
      :style="{ height: changingNavigationHeight }"
    >
      <div class="w-full p-4 md:flex">
        <ul class="flex flex-col w-full space-y-1">
          <li v-show="false" class="my-px">
            <NavigationButton
              link="/#/"
              text="Overview"
              :notifications="3"
              :icon="overviewIcon"
            ></NavigationButton>
          </li>
          <NavigationHeading heading="Todos"></NavigationHeading>
          <NavigationButton link="/t/dashboard" text="Dashboard">
            <ViewGridIcon class="w-6 h-6" />
          </NavigationButton>
          <NavigationButton link="/t/list" text="List">
            <ViewListIcon class="w-6 h-6" />
          </NavigationButton>
          <NavigationButton link="/t/add" text="Add">
            <PlusCircleIcon class="w-6 h-6" />
          </NavigationButton>
          <NavigationHeading heading="Story"></NavigationHeading>
          <NavigationButton link="/s/dashboard" text="Dashboard">
            <NewspaperIcon class="w-6 h-6" />
          </NavigationButton>
          <NavigationHeading heading="Achievements"></NavigationHeading>
          <NavigationButton link="/a/dashboard" text="Dashboard">
            <CakeIcon class="w-6 h-6" />
          </NavigationButton>
          <NavigationHeading heading="Goals"></NavigationHeading>
          <NavigationButton link="/g/goals" text="Goals">
            <TrendingUpIcon class="w-6 h-6" />
          </NavigationButton>
          <NavigationButton link="/g/starred" text="Starred">
            <StarIcon class="w-6 h-6" />
          </NavigationButton>
          <NavigationButton link="/g/tree" text="Tree">
            <ShareIcon class="w-6 h-6" />
          </NavigationButton>
          <NavigationButton link="/g/add" text="Add">
            <PlusCircleIcon class="w-6 h-6" />
          </NavigationButton>
          <NavigationHeading heading="Notes"></NavigationHeading>
          <NavigationButton link="/n/dashboard/" text="Dashboard">
            <DocumentTextIcon class="w-6 h-6" />
          </NavigationButton>
          <NavigationHeading heading="User"></NavigationHeading>
          <NavigationButton link="/u/settings" text="Settings">
            <CogIcon class="w-6 h-6" />
          </NavigationButton>
          <NavigationButton link="/#/" text="Logout" @click.prevent="signout">
            <LogoutIcon class="w-6 h-6" />
          </NavigationButton>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationButton from "../components/NavigationButton.vue";
import NavigationHeading from "../components/NavigationHeading.vue";
import MastergoalLogo from "../components/MastergoalLogo.vue";
import {
  ViewGridIcon,
  NewspaperIcon,
  PlusCircleIcon,
  ViewListIcon,
  LogoutIcon,
  CogIcon,
  DocumentTextIcon,
  StarIcon,
  ShareIcon,
  CakeIcon,
  TrendingUpIcon,
} from "@heroicons/vue/outline";

export default {
  name: "LeftNavigation",
  components: {
    NavigationButton,
    NavigationHeading,
    MastergoalLogo,
    ViewGridIcon,
    NewspaperIcon,
    PlusCircleIcon,
    ViewListIcon,
    CakeIcon,
    ShareIcon,
    LogoutIcon,
    CogIcon,
    DocumentTextIcon,
    StarIcon,
    TrendingUpIcon,
  },
  data: function () {
    return {
      open: true,
      navigationHeight: "auto",
    };
  },
  computed: {
    changingNavigationHeight() {
      if (!this.open) return "";
      return this.navigationHeight + "px";
    },
  },
  mounted() {
    this.navigationHeight = this.$refs["navigation"].clientHeight;
    this.open = false;
  },
  methods: {
    signout() {
      this.$store.dispatch("users/signout");
    },
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
