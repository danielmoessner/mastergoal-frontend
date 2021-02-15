<template>
  <div class="mb-4">
    <h2 class="text-lg font-semibold text-blue-900">{{ property }}</h2>
    <p>{{ textNonEmpty }}</p>
  </div>
</template>

<script>
export default {
  name: "PropertyText",
  props: {
    property: {
      type: String,
      default: "",
    },
    text: {
      type: [String, Boolean, Number],
      default: "",
    },
  },
  computed: {
    textNonEmpty() {
      if (this.text === null) return "...";
      return this.text.toString() || "...";
    },
  },
};
</script>
