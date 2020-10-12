<template>
  <div
    class="rounded-lg overflow-hidden border mt-3 mb-1 border-gray-400 transition-all ease-in-out duration-500"
    v-bind:class="{
      'mb-5': depth === 0,
      'mr-1': depth > 0,
      'border-gray-600': open,
    }"
  >
    <div
      class="w-full flex items-stretch justify-between text-gray-600"
      v-bind:class="{ 'text-gray-700': open, 'mb-0': open }"
    >
      <div
        class="flex justify-start items-center w-full pl-4 py-2 cursor-pointer mr-8"
        v-on:click="toggle"
      >
        <div class="flex flex-col">
          <div class="block leading-tight truncate text-lg">
            {{ item.name || item.monitor }}
          </div>
          <div class="flex justify-between text-gray-600">
            <div class="block text-xs leading-tight">
              {{ type }}
            </div>
            <div class="block text-xs leading-tight">{{ item.progress }}%</div>
          </div>
        </div>
      </div>
      <navigation-button v-bind:link="url" text="Open"></navigation-button>
    </div>
    <tree-item
      class="ml-4"
      v-bind:depth="depth + 1"
      v-for="monitor in item.monitors"
      v-bind:item="monitor"
      v-bind:key="monitor.url"
      v-bind:class="{ hidden: !open }"
      type="Monitor"
    ></tree-item>
    <tree-item
      class="ml-4"
      v-bind:depth="depth + 1"
      v-for="strategy in item.strategies"
      v-bind:item="strategy"
      v-bind:key="strategy.url"
      v-bind:class="{ hidden: !open }"
      type="Strategy"
    ></tree-item>
      <tree-item
        class="ml-4"
        v-bind:depth="depth + 1"
        v-for="goal in item.subgoals"
        v-bind:item="goal"
        v-bind:key="goal.url"
        v-bind:class="{ hidden: !open }"
      ></tree-item>
  </div>
</template>

<script>
import NavigationButton from "@/components/NavigationButton.vue";

export default {
  name: "TreeItem",
  components: {
    NavigationButton,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    depth: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: "Goal",
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    typeLowercase() {
      return this.type.toLowerCase();
    },
    url() {
      if (this.typeLowercase === "goal") return "/g/list/goals/" + this.item.id;
      if (this.typeLowercase === "strategy")
        return "/g/list/strategies/" + this.item.id;
      if (this.typeLowercase === "monitor")
        return "/g/list/monitors/" + this.item.id;
      return "#";
    },
    strategiesExist() {
      if (!this.item.strategies) return false;
      return this.item.strategies.length > 0;
    },
    monitorsExist() {
      if (!this.item.monitors) return false;
      return this.item.monitors.length > 0;
    },
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
