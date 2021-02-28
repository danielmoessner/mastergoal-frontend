<template>
  <general-box
    :overflow="false"
    :padding="false"
    class="overflow-hidden bg-gray overflow-x-auto"
  >
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-100">
        <tr>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Mastergoal
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Subgoal
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Weight
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Archived
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          ></th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="link in links" v-bind:key="link.id">
          <td class="px-6 py-4">
            {{ link.mastergoal.name }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap">
            {{ link.subgoal.name }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ link.weight }}</td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ link.is_archived }}</td>
          <td class="px-1 whitespace-no-wrap">
            <div class="flex items-center justify-end">
              <navigation-button
                v-bind:link="'/g/list/links/' + link.id"
                text="Open"
              ></navigation-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </general-box>
</template>

<script>
import GeneralBox from "../components/GeneralBox.vue";
import NavigationButton from "../components/NavigationButton.vue";

export default {
  name: "LinkTable",
  components: {
    GeneralBox,
    NavigationButton,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>
