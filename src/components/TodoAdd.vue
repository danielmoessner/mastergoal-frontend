<template>
  <backend-box>
    <heading-one text="Add todos"></heading-one>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <add-todo-box
        heading="Add normal todo"
        url="/t/api/normal-todos/createform/"
        submitUrl="/t/api/normal-todos/"
      ></add-todo-box>
      <add-todo-box
        heading="Add repetitive todo"
        url="/t/api/repetitive-todos/createform/"
        submitUrl="/t/api/repetitive-todos/"
      ></add-todo-box>
      <add-todo-box
        heading="Add never ending todo"
        url="/t/api/never-ending-todos/createform/"
        submitUrl="/t/api/never-ending-todos/"
      ></add-todo-box>
      <add-todo-box
        heading="Add pipeline todo"
        url="/t/api/pipeline-todos/createform/"
        submitUrl="/t/api/pipeline-todos/"
      ></add-todo-box>
    </div>
  </backend-box>
</template>

<script>
import HeadingOne from "@/components/HeadingOne.vue";
import BackendBox from "@/components/BackendBox.vue";
import AddTodoBox from "@/components/AddTodoBox.vue";

export default {
  name: "TodoAdd",
  components: {
    HeadingOne,
    AddTodoBox,
    BackendBox,
  },
};
</script>
