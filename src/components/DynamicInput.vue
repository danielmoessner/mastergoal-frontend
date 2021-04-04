<template>
  <div>
    <label class="text-gray-700" :for="name">
      {{ label }}
    </label>
    <input
      v-if="useInput"
      :id="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :required="required"
      :name="name"
      class="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
      @input="emit"
    />
    <input
      v-if="useCheckbox"
      :id="name"
      :type="type"
      :checked="modelValue"
      :name="name"
      class="block rounded w-5 h-5 border-gray-300 text-gray-500 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50 cursor-pointer"
      @change="emitCheckbox"
    />
    <textarea
      v-if="useTextarea"
      :id="name"
      :placeholder="placeholder"
      :value="modelValue"
      :required="required"
      :name="name"
      class="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
      @input="emit"
    />
    <select
      v-if="useSelect"
      :required="required"
      :name="name"
      class="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
      @change="emit"
    >
      <option selected value="">---------</option>
      <option
        v-for="({ value, text }, index) in children"
        :key="index"
        :value="value"
        :selected="modelValue === value"
      >
        {{ text }}
      </option>
    </select>
    <editor
      v-if="useTinymce"
      :id="name"
      v-model="content"
      :name="name"
      :placeholder="placeholder"
      api-key="no-api-key"
    />
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  components: {
    Editor,
  },
  props: {
    name: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    label: {
      required: false,
      default: "Label",
      type: String,
    },
    component: {
      type: String,
      default: "input",
    },
    placeholder: {
      type: String,
      default: "",
    },
    children: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    required: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Boolean, Number],
      default: "",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      content: "",
    };
  },
  computed: {
    useSelect() {
      return this.type === "select";
    },
    useCheckbox() {
      return this.type === "checkbox";
    },
    useTextarea() {
      return this.type === "textarea";
    },
    useTinymce() {
      return this.type === "tinymce";
    },
    useInput() {
      return (
        !this.useSelect &&
        !this.useCheckbox &&
        !this.useTextarea &&
        !this.useTinymce
      );
    },
  },
  watch: {
    content: function (newVal) {
      this.emitTinymce(newVal);
    },
    modelValue: function (newVal) {
      this.content = newVal;
    },
  },
  mounted() {
    // if (this.type === "tinymce") {
    //   this.content = this.modelValue;
    // }
  },
  methods: {
    emit(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    emitCheckbox(event) {
      this.$emit("update:modelValue", event.target.checked);
    },
    emitTinymce(newVal) {
      this.$emit("update:modelValue", newVal);
    },
  },
};
</script>
