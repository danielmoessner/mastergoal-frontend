<template>
  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
    <div v-for="row in cleanData" :key="row[0]" class="sm:col-span-2">
      <dt class="text-sm font-medium text-gray-500">{{ row[0] }}</dt>
      <dd class="mt-1 text-gray-900">{{ row[1] }}</dd>
    </div>
  </dl>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    cleanData() {
      return this.data.filter((row) => Boolean(row[0]) && Boolean(row[1]));
    },
  },
};
</script>
