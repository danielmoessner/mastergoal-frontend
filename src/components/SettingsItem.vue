<template>
  <router-link v-bind:to="link" class="flex items-center p-2 text-gray-600 hover:text-gray-700">
    <div
      class="bg-gray-300 rounded-full w-10 h-10 mr-3 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        class="w-6 h-6"
        viewBox="0 0 24 24"
        stroke="currentColor"
        v-html="iconPaths"
      >
      </svg>
    </div>
    <div class="">{{ name }}</div>
  </router-link>
</template>

<script>
export default {
    name: "SettingsItem",
    props: {
        name: {
            required: true,
            type: String
        },
        iconPaths: {
            required: true,
            type: String
        },
        link: {
            required: true,
            type: String
        }
    }
};
</script>
