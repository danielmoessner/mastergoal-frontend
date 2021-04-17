<template>
  <Item bg="bg-gray-50">
    <Left>
      <div
        class="absolute z-0 bottom-0 left-0 right-0 bg-gray-600"
        :style="{ height: `${monitor.progress}%` }"
      ></div>
      <div class="text-gray-100 relative">
        <MonitorSvg />
      </div>
    </Left>

    <Body>
      <router-link
        :to="`/g/list/goals/${monitor.id}/`"
        class="text-gray-900 font-medium hover:text-gray-600"
      >
        {{ monitor.name }}
      </router-link>
      <p class="text-gray-500">{{ monitor.progress }} %</p>
    </Body>

    <HrefMenu :last="true" :to="`/g/list/monitors/${monitor.id}/`"></HrefMenu>
  </Item>
</template>

<script>
import MonitorSvg from "../components/Svg/Monitor.vue";
import Body from "./Item/Body.vue";
import Left from "./Item/Left.vue";
import HrefMenu from "./Item/HrefMenu.vue";
import Item from "./Item/Index.vue";

export default {
  components: {
    MonitorSvg,
    Item,
    Body,
    HrefMenu,
    Left,
  },
  props: {
    monitor: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: "Monitor",
    },
  },
};
</script>
