<template>
  <div class="mt-4 bg-white rounded-lg overflow-hidden">
    <form @submit.prevent="onSubmit" class="flex h-12 items-center" action="">
      <div class="pl-4 flex-1">
        <input
          class="pl-1 border-0 p-0 text-lg focus:ring-0 focus:outline-none border-b-2 border-transparent -mb-1 focus:border-pink-300 border-opacity-50 w-full"
          type="text"
          v-model="name"
          placeholder="Add Todo"
          name="name"
        />
      </div>
      <div class="flex items-center divide-x-2 divide-gray-300">
        <div>
          <label class="inline-flex items-center px-4 leading-10">
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
          <label class="inline-flex items-center px-4 leading-10">
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
        class="h-12 px-8 text-pink-700 ml-auto cursor-pointer hover:bg-gray-100 font-bold bg-transparent bg-gray-50 focus:outline-none focus:ring-pink-300 focus:ring-2 ring-inset rounded-r-lg ring-opacity-50"
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
