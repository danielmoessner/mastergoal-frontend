<template>
<div>
  <div class="w-full flex items-center justify-between">
      <div class="flex flex-col">
          <div class="block text-gray-800 leading-tight truncate">{{ item.name }}</div>
          <div class="block text-xs text-gray-800 leading-tight"></div>
      </div>
      <navigation-button link='#' text='Open'></navigation-button>
  </div>
  <tree-item v-bind:></tree-item>
  <tree-item></tree-item>
  <goals-tree v-bind:tree="item.sub_goals" class="ml-4"></goals-tree>
  </div>
</template>

<script>
import NavigationButton from "@/components/NavigationButton.vue";
import GoalsTree from "@/components/GoalsTree.vue";

export default {
  name: "GoalsTree",
  components: {
    NavigationButton,
    GoalsTree
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
