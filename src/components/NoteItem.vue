<template>
  <Item>
    <Body>
      <router-link
        :to="`/n/${note.id}/`"
        class="text-gray-900 font-medium hover:text-gray-600"
      >
        {{ note.name }}
      </router-link>
    </Body>

    <HrefMenu :to="`/n/${note.id}/`"></HrefMenu>
  </Item>
</template>

<script>
import Body from "./Item/Body.vue";
import HrefMenu from "./Item/HrefMenu.vue";
import Item from "./Item/Index.vue";

export default {
  components: {
    Item,
    Body,
    HrefMenu,
  },
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
};
</script>
