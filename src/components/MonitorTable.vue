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
            Name
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Goal
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Weight
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Step
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Steps
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Progress
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
        <tr v-for="monitor in monitors" v-bind:key="monitor.id">
          <td class="px-6 py-4">
            {{ monitor.name }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap">
            {{ monitor.goal }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ monitor.weight }}</td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ monitor.step }}</td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ monitor.steps }}</td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ monitor.progress }}</td>
          <td class="px-6 py-4 whitespace-no-wrap">
            {{ monitor.is_archived }}
          </td>
          <td class="px-1 whitespace-no-wrap">
            <div class="flex items-center justify-end">
              <navigation-button
                v-bind:link="'/g/list/monitors/' + monitor.id"
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
import GeneralBox from "./Box/General.vue";
import NavigationButton from "../components/NavigationButton.vue";

export default {
  name: "MonitorTable",
  components: {
    GeneralBox,
    NavigationButton,
  },
  props: {
    monitors: {
      type: Array,
      required: true,
    },
  },
};
</script>
