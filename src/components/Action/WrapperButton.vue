<template>
  <abbr :title="abbr">
    <button
      :class="{
        'text-gray-800': selected,
        'text-gray-400': !selected,
      }"
      class="focus:outline-none active:bg-gray-100 p-1 rounded hover:bg-gray-50"
      @click="clicked()"
    >
      <slot />
    </button>
  </abbr>
</template>

<script>
export default {
  props: {
    abbr: {
      type: String,
      required: true,
    },
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

<style></style>
