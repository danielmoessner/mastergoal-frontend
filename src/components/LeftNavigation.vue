<template>
  <div
    class="w-full md:min-h-screen sticky top-0 md:bg-white"
    v-bind:class="{ 'bg-white': open }"
  >
    <mastergoal-logo v-on:click.native="toggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="h-6 w-6 mr-2 text-gray-100 md:hidden"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </mastergoal-logo>
    <div
      class="md:h-auto overflow-hidden transition-all ease-in-out duration-300 relative z-0"
      ref="navigation"
      v-bind:class="{ 'h-0': !open }"
      v-bind:style="{ height: changingNavigationHeight }"
    >
      <div class="w-full p-4 md:flex bg-white">
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
            <navigation-heading
              v-bind:heading="group.name"
            ></navigation-heading>
            <li
              class="my-px"
              v-for="link in group.links"
              v-bind:key="link.name"
            >
              <navigation-button
                v-bind:link="link.url"
                v-bind:text="link.name"
                v-bind:icon="link.icon"
              ></navigation-button>
            </li>
          </div>
          <navigation-heading heading="Todos"></navigation-heading>
          <navigation-button
            link="/t/dashboard"
            text="Dashboard"
            v-bind:icon="todosDashboardIcon"
          ></navigation-button>
          <navigation-button
            link="/t/todos"
            text="List"
            v-bind:icon="listIcon"
          ></navigation-button>
          <navigation-button
            link="/t/add"
            text="Add"
            v-bind:icon="addIcon"
          ></navigation-button>
          <navigation-heading heading="Goals"></navigation-heading>
          <navigation-button
            link="/g/goals"
            text="Goals"
            v-bind:icon="goalsDashboardIcon"
          ></navigation-button>
          <navigation-button
            link="/g/starred"
            text="Starred"
            v-bind:icon="goalsStarredIcon"
          ></navigation-button>
          <navigation-button
            link="/g/tree"
            text="Tree"
            svgClass="transform rotate-90"
            v-bind:icon="goalsTreeIcon"
          ></navigation-button>
          <navigation-button
            link="/g/list"
            text="List"
            v-bind:icon="listIcon"
          ></navigation-button>
          <navigation-button link="/g/add" text="Add" v-bind:icon="addIcon">
          </navigation-button>
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
  </div>
</template>

<script>
import NavigationButton from "@/components/NavigationButton.vue";
import NavigationHeading from "@/components/NavigationHeading.vue";
import MastergoalLogo from "@/components/MastergoalLogo.vue";

export default {
  name: "LeftNavigation",
  components: { NavigationButton, NavigationHeading, MastergoalLogo },
  computed: {
    changingNavigationHeight() {
      if (!this.open) return "";
      return this.navigationHeight + "px";
    },
  },
  data: function() {
    return {
      open: true,
      navigationHeight: "auto",
      overviewIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
      logoutIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />',
      settingsIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />',
      goalsDashboardIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />',
      listIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />',
      todosDashboardIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />',
      addIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />',
      goalsStarredIcon:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />',
      goalsTreeIcon:
        '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />',
      navigation: [
        {
          name: "Goals",
          links: [
            {
              name: "Tree",
              url: "#",
              icon:
                '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
            },
          ],
        },
        {
          name: "Notes",
          links: [
            {
              name: "Dashboard",
              url: "#",
              icon:
                '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
            },
          ],
        },
      ],
    };
  },
  methods: {
    signout() {
      this.$store.dispatch("signout");
    },
    toggle() {
      this.open = !this.open;
    },
  },
  mounted() {
    this.navigationHeight = this.$refs["navigation"].clientHeight;
    this.open = false;
  },
};
</script>
