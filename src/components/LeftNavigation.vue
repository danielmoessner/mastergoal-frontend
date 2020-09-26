<template>
  <div class="w-full bg-white md:min-h-screen sticky top-0">
    <mastergoal-logo v-on:click.native="open = !open"></mastergoal-logo>
    <div class="w-full p-4 md:flex" v-bind:class="{ hidden: !open }">
      <ul class="flex flex-col w-full">
        <li class="my-px">
          <navigation-button
            link="#"
            text="Overview"
            v-bind:notifications="3"
            v-bind:icon="overviewIcon"
          ></navigation-button>
        </li>
        <div v-for="group in navigation" v-bind:key="group.name">
          <navigation-heading v-bind:heading="group.name"></navigation-heading>
          <li class="my-px" v-for="link in group.links" v-bind:key="link.name">
            <navigation-button
              v-bind:link="link.url"
              v-bind:text="link.name"
              v-bind:icon="link.icon"
            ></navigation-button>
          </li>
        </div>
        <navigation-heading heading="User"></navigation-heading>
        <navigation-button
          link="/u/settings"
          text="Settings"
          v-bind:icon="settingsIcon"
        ></navigation-button>
        <navigation-button
          v-on:click.prevent.native="signout"
          link="#"
          text="Logout"
          v-bind:icon="logoutIcon"
        ></navigation-button>
      </ul>
    </div>
  </div>
</template>

<script>
import NavigationButton from "@/components/NavigationButton.vue";
import NavigationHeading from "@/components/NavigationHeading.vue";
import MastergoalLogo from "@/components/MastergoalLogo.vue";

export default {
  name: "LeftNavigation",
  components: { NavigationButton, NavigationHeading, MastergoalLogo },
  props: {
    navigation: {
      required: true,
      type: Array,
    },
  },
  data: function () {
    return {
      open: false,
      overviewIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
      logoutIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />',
      settingsIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />',
    };
  },
  methods: {
    signout() {
      this.$store.dispatch("signout");
    },
  },
};
</script>
