import { ref, onMounted, watch } from "vue";
import store from "../store";

export default function getTodoFormFields(todo) {
  const fields = ref([]);

  function updateFields() {
    fields.value = store.getters["todos/todoFormFields"];
    if (!todo || !todo.type) return;
    switch (todo.type) {
      case "NORMAL":
        fields.value = store.getters["todos/normalTodoFormFields"];
      case "REPETITIVE":
        fields.value = store.getters["todos/repetitiveTodoFormFields"];
      case "NEVER_ENDING":
        fields.value = store.getters["todos/neverEndingTodoFormFields"];
      case "PIPELINE":
        fields.value = store.getters["todos/pipelineTodoFormFields"];
    }
  }

  onMounted(updateFields);
  watch(todo, updateFields);

  return {
    fields,
  };
}
