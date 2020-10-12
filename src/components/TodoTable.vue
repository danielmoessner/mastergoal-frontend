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
            Status
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Activate
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Deadline
          </th>
          <th
            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Completed
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
        <tr v-for="todo in todos" v-bind:key="todo.id">
          <td class="px-6 py-4">
            {{ todo.name }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap">
            {{ todo.status }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ todo.activate }}</td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ todo.deadline }}</td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ todo.completed }}</td>
          <td class="px-6 py-4 whitespace-no-wrap">{{ todo.archived }}</td>
          <td class="px-1 whitespace-no-wrap">
            <div class="flex items-center justify-end">
              <navigation-button
                v-bind:link="'/t/list/todos/' + todo.id"
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
import GeneralBox from "@/components/GeneralBox.vue";
import NavigationButton from "@/components/NavigationButton.vue";

export default {
  name: "TodoTable",
  components: {
    GeneralBox,
    NavigationButton,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>
