<template>
  <div class="w-full">
      <tree-item v-for="item in tree" v-bind:key="item.url" v-bind:item="item"></tree-item>
  </div>
</template>

<script>
import NavigationButton from "@/components/NavigationButton.vue";
import TreeItem from "@/components/TreeItem.vue";

export default {
  name: "GoalsTree",
  components: {
    NavigationButton,
    TreeItem
  },
  props: {
    tree: {
      type: Object,
      required: true,
    },
  },
};
</script>
