<template>
  <div class="flex justify-between items-center w-full">
    <p>
      {{ property }}:
      <span>{{ textshort }}</span>
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PropertyShort",
  props: {
    property: {
      type: String,
      default: "",
    },
    text: {
      type: [String, Boolean],
      default: "",
    },
    short: {
      type: [String, Boolean],
      default: "",
    },
  },
  computed: {
    textshort() {
      let text = this.text.toString();
      let short = this.short.toString();
      return text || short || "...";
    },
  },
};
</script>
