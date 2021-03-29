<template>
  <div class="border rounded-lg mb-2 last:mb-0 w-full bg-white relative">
    <div class="flex flex-row h-12">
      <Input @setDone="setStatus('DONE')" :todo="todo" />
      <Body :todo="todo" />
      <Info v-if="verbose" :todo="todo" />
      <Menu @setFailed="setStatus('FAILED')" :todo="todo" />
    </div>
  </div>
</template>

<script type="module">
import NavigationButton from "../../components/NavigationButton.vue";
import Input from "./Input.vue";
import Body from "./Body.vue";
import Menu from "./Menu.vue";
import Info from "./Info.vue";

export default {
  name: "TodoItem",
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
  components: {
    NavigationButton,
    Info,
    Input,
    Body,
    Menu,
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
