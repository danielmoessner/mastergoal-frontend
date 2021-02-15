<template>
  <div class="bg-white rounded-lg shadow">
    <div class="flex items-stretch justify-between">
      <div class="w-full py-3 px-4 truncate">{{ note.name }}</div>
      <navigation-button
        text="Open"
        :link="'/n/' + note.id + '/'"
      ></navigation-button>
    </div>
  </div>
</template>

<script>
import NavigationButton from "../components/NavigationButton.vue";

export default {
  name: "NoteItem",
  components: {
    NavigationButton,
  },
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
};
</script>
