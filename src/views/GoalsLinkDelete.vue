<template>
  <backend-box>
    <goals-link-breadcrumb :link="link">
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-bind:link="'/g/list/links/' + link.id + '/delete/'"
        text="Delete"
      ></breadcrumb-link>
    </goals-link-breadcrumb>
    <detail-grid>
      <general-box class="col-span-2 md:col-span-3" :overflow="false">
        <div class="flex-col flex justify-start items-start">
          <p class="mb-4">Are you sure you want to delete '{{ linkName }}'?</p>
          <div class="flex items-end w-full justify-end">
            <navigation-button
              class="pt-2 pb-2"
              :link="'/g/list/links/' + $route.params.id + '/'"
              text="Cancel"
            ></navigation-button>
            <submit-button v-on:click.native.prevent="deleteLink" class="ml-2" text="Yes, delete"></submit-button>
          </div>
        </div>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import GoalsLink from "@/mixins/GoalsLink";
import NavigationButton from "@/components/NavigationButton.vue";
import SubmitButton from "@/components/SubmitButton.vue";
import axios from "@/plugins/backendAxios.js";

export default {
  name: "GoalsLinkDelete",
  mixins: [GoalsLink],
  components: {
    NavigationButton,
    SubmitButton,
  },
  methods: {
    deleteLink() {
      axios
        .delete(this.link.url)
        .then(() => this.$router.push("/g/list/links/"))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
