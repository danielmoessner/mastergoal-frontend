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
            Progress
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Deadline
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Starred
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
        <tr v-for="goal in goals" v-bind:key="goal.id">
          <td class="px-6 py-4">
            {{ goal.name }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ goal.progress }} %</td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ goal.deadline }}</td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ goal.is_starred }}</td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ goal.is_archived }}</td>
          <td class="px-1 whitespace-no-wrap">
            <div class="flex items-center justify-end">
              <navigation-button
                v-bind:link="'/g/list/goals/' + goal.id"
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
import GeneralBox from "./Box/GeneralBox.vue";
import NavigationButton from "../components/NavigationButton.vue";

export default {
  name: "GoalTable",
  components: {
    GeneralBox,
    NavigationButton,
  },
  props: {
    goals: {
      type: Array,
      required: true,
    },
  },
};
</script>
