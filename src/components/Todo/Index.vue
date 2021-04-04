<template>
  <div class="border rounded-lg mb-2 last:mb-0 w-full bg-white relative">
    <div class="flex flex-row h-12">
      <Input :todo="todo" @setDone="setStatus('DONE')" />
      <Body :todo="todo" />
      <Info v-if="verbose" :todo="todo" />
      <Menu :todo="todo" @setFailed="setStatus('FAILED')" />
    </div>
  </div>
</template>

<script type="module">
import Input from "./Input.vue";
import Body from "./Body.vue";
import Menu from "./Menu.vue";
import Info from "./Info.vue";

export default {
  name: "TodoItem",
  components: {
    Info,
    Input,
    Body,
    Menu,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    verbose: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      checked: this.todo.status === "DONE",
    };
  },
  methods: {
    setStatus: function (status) {
      const data = {
        url: this.todo.url,
        status: status,
      };
      this.$store.dispatch("todos/patchTodo", data);
    },
  },
};
</script>
