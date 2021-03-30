<template>
  <general-box :heading="heading" :padding="padding" class="overflow-y-scroll">
    <slot></slot>
  </general-box>
</template>

<script>
import GeneralBox from "./Box/GeneralBox.vue";

export default {
  name: "ScrollBox",
  components: {
    GeneralBox,
  },
  props: {
    heading: {
      type: String,
      default: "",
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style></style>
