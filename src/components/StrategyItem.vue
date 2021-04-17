<template>
  <Item bg="bg-gray-50">
    <Left>
      <div class="text-gray-100 relative">
        <StrategySvg />
      </div>
    </Left>
    <Body>
      <router-link
        :to="`/g/list/strategies/${strategy.id}/`"
        class="text-gray-900 font-medium hover:text-gray-600"
      >
        {{ strategy.name }}
      </router-link>
    </Body>
    <HrefMenu
      :last="true"
      :to="`/g/list/strategies/${strategy.id}/`"
    ></HrefMenu>
  </Item>
</template>

<script>
import StrategySvg from "../components/Svg/Strategy.vue";
import Body from "./Item/Body.vue";
import Left from "./Item/Left.vue";
import HrefMenu from "./Item/HrefMenu.vue";
import Item from "./Item/Index.vue";

export default {
  components: {
    StrategySvg,
    Item,
    Body,
    HrefMenu,
    Left,
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
