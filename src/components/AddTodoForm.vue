<template>
  <div class="mt-4 bg-white rounded-lg overflow-hidden">
    <form
      @submit.prevent="onSubmit"
      class="flex flex-col p-4 lg:h-12 lg:p-0 lg:flex-row lg:items-center"
      action=""
    >
      <div class="lg:pl-4 lg:flex-1">
        <input
          class="border border-gray-300 py-1.5 px-4 rounded p-0 text-lg w-full ring-opacity-50 focus:border-pink-300 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-pink-300 lg:border-transparent lg:rounded-none lg:p-0 lg:border-0 lg:focus:ring-0 lg:pl-1 lg:border-b-2 lg:-mb-1"
          type="text"
          v-model="name"
          placeholder="Add Todo"
          name="name"
        />
      </div>
      <div
        class="flex flex-col mt-3 pl-2 sm:flex-row sm:items-center lg:m-0 lg:p-0 lg:divide-x-2 lg:divide-gray-300"
      >
        <div>
          <label
            class="mr-4 inline-flex items-center leading-10 sm:mr-4 lg:mx-4"
          >
            <input
              v-model="withoutDeadline"
              name="deadline"
              type="checkbox"
              class="rounded w-5 h-5 border-gray-300 text-pink-600 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-300 focus:ring-opacity-50 cursor-pointer"
            />
            <span class="ml-2 cursor-pointer text-gray-800"
              >Without Deadline</span
            >
          </label>
        </div>
        <div>
          <label class="inline-flex items-center leading-10 sm:ml-4 lg:mx-4">
            <input
              v-model="primary"
              name="primary"
              type="checkbox"
              class="rounded w-5 h-5 border-gray-300 text-pink-600 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-300 focus:ring-opacity-50 cursor-pointer"
            />
            <span class="ml-2 cursor-pointer text-gray-800">Primary</span>
          </label>
        </div>
      </div>
      <input
        class="h-12 px-8 rounded-lg text-pink-700 mt-6 cursor-pointer hover:bg-gray-100 font-bold bg-transparent bg-gray-50 ring-inset ring-opacity-50 focus:outline-none focus:ring-pink-300 focus:ring-2 lg:mt-0 lg:rounded-l-none lg:ml-auto"
        type="submit"
        value="Add"
      />
    </form>
  </div>
</template>

<script>
import DynamicForm from "./DynamicForm.vue";
import { mapGetters } from "vuex";

export default {
  name: "AddTodoForm",
  components: {
    DynamicForm,
  },
  data() {
    return {
      name: "",
      primary: false,
      withoutDeadline: false,
    };
  },
  computed: {
    ...mapGetters({
      activate: "todos/timeActivate",
      deadline: "todos/timeDeadline",
    }),
  },
  methods: {
    onSubmit() {
      const data = {
        name: this.name,
        activate: this.activate,
        deadline: this.withoutDeadline ? null : this.deadline,
      };
      this.$store.dispatch("todos/createNormalTodo", data);
      this.name = "";
      this.primary = false;
      this.withoutDeadline = false;
    },
  },
};
</script>
