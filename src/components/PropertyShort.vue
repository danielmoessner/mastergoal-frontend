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
      type: [String, Boolean, Number],
      default: false,
    },
    short: {
      type: [String, Boolean, Number],
      default: false,
    },
  },
  computed: {
    textshort() {
      let textshort = this.text || this.short;
      if (textshort === null) return "...";
      textshort = textshort.toString();
      return textshort || "...";
    },
  },
};
</script>
