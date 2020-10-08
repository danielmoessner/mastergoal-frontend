<template>
  <div
    class="shadow bg-white flex flex-col justify-between rounded-lg overflow-hidden text-gray-700"
  >
    <div>
      <div
        class="pl-4 pr-4 pt-4 mb-1 text-right flex justify-between items-center"
      >
        <div class="block text-xs uppercase font-bold leading-tight">
          {{ type }}
        </div>
      </div>
      <div class="px-4 mb-4">
        <div class="truncate leading-tight">{{ strategy.name }}</div>
      </div>
    </div>
    <div>
      <navigation-button
        text="Open"
        class="w-full flex-shrink-0 rounded-tl-none rounded-tr-none"
        v-bind:link="'/g/list/strategies/' + strategy.id"
      ></navigation-button>
    </div>
  </div>
</template>

<script>
import NavigationButton from "@/components/NavigationButton.vue";

export default {
  name: "StrategyItem",
  components: {
    NavigationButton,
  },
  props: {
    strategy: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: "Strategy",
    },
  },
};
</script>
