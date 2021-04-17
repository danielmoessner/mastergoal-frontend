<template>
  <Item bg="bg-gray-50">
    <Left>
      <div
        class="absolute z-0 bottom-0 left-0 right-0 bg-gray-600"
        :style="{ height: `${goal.progress}%` }"
      ></div>
      <div class="text-gray-100 relative">
        <GoalSvg />
      </div>
    </Left>

    <Body>
      <router-link
        :to="`/g/list/goals/${goal.id}/`"
        class="text-gray-900 font-medium hover:text-gray-600"
      >
        {{ goal.name }}
      </router-link>
      <p class="text-gray-500">{{ goal.progress }} %</p>
    </Body>

    <HrefMenu :last="hrefMenuLast" :to="`/g/list/goals/${goal.id}/`"></HrefMenu>

    <Menu v-if="link">
      <router-link
        :to="`/g/list/links/${link.id}/`"
        class="block px-2 py-1 hover:bg-gray-100 text-gray-500 hover:text-gray-700 cursor-pointer rounded text-sm"
      >
        Show Link
      </router-link>
    </Menu>
  </Item>
</template>

<script>
import GoalSvg from "../components/Svg/Goal.vue";
import Menu from "./Item/Menu.vue";
import Body from "./Item/Body.vue";
import Left from "./Item/Left.vue";
import HrefMenu from "./Item/HrefMenu.vue";
import Item from "./Item/Index.vue";

export default {
  components: {
    GoalSvg,
    Item,
    Body,
    Menu,
    HrefMenu,
    Left,
  },
  props: {
    goal: {
      type: Object,
      required: true,
    },
    otherGoal: {
      type: Object,
      required: false,
      default: () => {},
    },
    type: {
      type: String,
      default: "Goal",
    },
  },
  data() {
    return {};
  },
  computed: {
    hrefMenuLast() {
      return this.otherGoal ? false : true;
    },
    link() {
      if (this.otherGoal) {
        return this.$store.getters["goals/linkFromGoals"](
          this.goal,
          this.otherGoal,
        );
      } else {
        return null;
      }
    },
  },
};
</script>
