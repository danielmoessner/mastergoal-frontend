<template>
  <div class="relative flex shadow-sm rounded-md">
    <div
      class="relative overflow-hidden flex-shrink-0 flex items-center justify-center w-14 bg-gray-400 text-white text-sm font-medium rounded-l-md"
    >
      <GoalSvg />
      <div
        class="absolute bottom-0 left-0 right-0 bg-gray-600"
        :style="{ height: `${goal.progress}%` }"
      ></div>
    </div>
    <div
      class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
    >
      <div class="flex-1 px-4 py-2 text-sm truncate">
        <router-link
          :to="`/g/list/goals/${goal.id}/`"
          class="text-gray-900 font-medium hover:text-gray-600"
        >
          {{ goal.name }}
        </router-link>
        <p class="text-gray-500">{{ goal.progress }} %</p>
      </div>
      <div class="flex-shrink-0 pr-2">
        <button
          class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-md bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <span class="sr-only">Open options</span>
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="absolute bg-white space-y-0.5 translate-y-full transform ring-1 ring-gray-200 rounded-lg shadow bottom-0 right-0 px-1 py-1"
    >
      <router-link
        :to="`/t/list/todos/${goal.master_link}/delete/`"
        class="block px-2 py-1 hover:bg-gray-100 text-gray-500 hover:text-gray-700 cursor-pointer rounded text-sm"
      >
        Show Link
      </router-link>
    </div>
  </div>
</template>

<script>
import GoalSvg from "../components/Svg/Goal.vue";

export default {
  components: {
    GoalSvg,
  },
  props: {
    goal: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: "Goal",
    },
  },
};
</script>
