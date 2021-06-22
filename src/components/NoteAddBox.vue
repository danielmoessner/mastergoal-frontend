<template>
  <Item>
    <form
      class="flex flex-col p-4 lg:h-12 lg:p-0 lg:flex-row lg:items-center w-full"
      @submit.prevent="submit"
    >
      <div class="lg:px-4 lg:flex-1">
        <input
          v-model="name"
          class="border border-gray-300 py-1.5 px-4 rounded p-0 text-lg w-full ring-opacity-50 focus:border-gray-300 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-300 lg:border-transparent lg:rounded-none lg:p-0 lg:border-0 lg:focus:ring-0 lg:pl-1 lg:border-b-2 lg:-mb-1"
          type="text"
          placeholder="Add Note"
          name="name"
        />
      </div>
      <input
        class="h-12 px-8 rounded-lg text-gray-600 mt-6 cursor-pointer border-gray-300 border font-medium bg-transparent hover:bg-gray-100 focus:ring-inset focus:outline-none focus:ring-gray-300 focus:ring-2 lg:mt-0 lg:rounded-l-none lg:ml-auto lg:border-l lg:border-gray-100"
        type="submit"
        value="Add"
      />
    </form>
  </Item>
</template>

<script>
import Item from "./Item/Index.vue";

export default {
  components: {
    Item,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    submit() {
      const data = {
        content: this.name,
      };
      this.$store.dispatch("notes/createNote", data);
      this.name = "";
    },
  },
};
</script>
