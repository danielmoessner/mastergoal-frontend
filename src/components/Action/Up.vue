<template>
  <Wrapper @click="clicked()" :selected="selected" abbr="Up">
    <svg
      class="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
      />
    </svg>
  </Wrapper>
</template>

<script>
import Wrapper from "./WrapperButton.vue";

export default {
  components: {
    Wrapper,
  },
  props: {
    selected: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["click"],
  methods: {
    clicked() {
      this.$emit("click");
    },
  },
};
</script>
