<template>
  <div class="bg-white shadow rounded-lg col-span-2 lg:col-span-3">
    <div class="px-4 py-5 sm:px-6">
      <div class="flex justify-between">
        <h1 class="text-2xl font-medium text-gray-900">
          {{ heading }}
        </h1>
        <ActionsBox>
          <slot name="actions" />
        </ActionsBox>
      </div>
      <InfosBox>
        <slot name="infos" />
      </InfosBox>
    </div>
    <div
      v-if="$slots.content"
      class="border-t border-gray-200 px-4 py-5 sm:px-6"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import ActionsBox from "../../components/Box/Actions.vue";
import InfosBox from "../../components/Box/Infos.vue";

export default {
  components: {
    InfosBox,
    ActionsBox,
  },
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>
