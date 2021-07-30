<template>
  <component
    :is="is"
    :to="to"
    :href="href"
    :type="type"
    class="inline-flex items-center px-3 py-2 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:ring-offset-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
    @click="emitClick()"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  emits: ["click"],
  computed: {
    is() {
      if (this.to) {
        return "router-link";
      } else if (this.href) {
        return "a";
      } else if (this.type) {
        return "button";
      }
      return "div";
    },
  },
  methods: {
    emitClick() {
      this.$emit("click");
    },
  },
};
</script>
