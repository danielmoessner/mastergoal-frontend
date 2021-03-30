<template>
  <general-box>
    <div class="flex-col flex justify-start items-start">
      <p class="mb-4">Are you sure you want to delete '{{ object }}'?</p>
      <div class="flex space-x-2">
        <PrimaryButton
          v-on:click.native.prevent="emit()"
          is="button"
          type="button"
        >
          Delete
        </PrimaryButton>
        <SecondaryButton :to="to">Cancel</SecondaryButton>
      </div>
    </div>
  </general-box>
</template>

<script>
import GeneralBox from "./GeneralBox.vue";
import PrimaryButton from "../Button/Primary.vue";
import SecondaryButton from "../Button/Secondary.vue";

export default {
  components: {
    GeneralBox,
    PrimaryButton,
    SecondaryButton,
  },
  emits: ["click"],
  props: {
    to: {
      type: String,
      required: true,
    },
    object: {
      type: String,
      required: true,
    },
  },
  methods: {
    emit() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
