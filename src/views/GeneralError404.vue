<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div class="max-w-xl">
      <h1 class="text-3xl font-blue-900 tracking-tight font-bold">
        404 - Not Found
      </h1>
      <navigation-button text="Back to home" link="/"></navigation-button>
    </div>
  </div>
</template>

<script>
import NavigationButton from "../components/NavigationButton.vue";

export default {
  name: "Error404",
  components: {
    NavigationButton,
  },
};
</script>

<style></style>
