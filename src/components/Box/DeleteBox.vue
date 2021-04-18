<template>
  <GeneralBox>
    <div class="flex-col flex justify-start items-start">
      <p class="mb-4">Are you sure you want to delete '{{ object }}'?</p>
      <div class="flex space-x-2">
        <PrimaryButton is="button" type="button" @click.prevent="emit()">
          Delete
        </PrimaryButton>
        <SecondaryButton :to="to">Cancel</SecondaryButton>
      </div>
    </div>
  </GeneralBox>
</template>

<script>
import GeneralBox from "./General.vue";
import PrimaryButton from "../Button/Primary.vue";
import SecondaryButton from "../Button/Secondary.vue";

export default {
  components: {
    GeneralBox,
    PrimaryButton,
    SecondaryButton,
  },
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
  emits: ["click"],
  methods: {
    emit() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
