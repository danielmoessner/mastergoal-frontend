<template>
  <h1 class="text-5xl font-bold text-blue-900 tracking-tight leading-none mb-6">
    {{ texttitle }}
    <slot>
      <p
        v-if="subtitle"
        class="text-lg font-normal tracking-normal mt-1"
        :class="subtitleClass"
      >
        {{ subtitle }}
      </p>
    </slot>
  </h1>
</template>

<script>
export default {
  name: "HeadingOne",
  props: {
    text: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    subtitleClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    texttitle() {
      return this.text || this.title || "";
    },
  },
};
</script>
