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
    <div
      v-if="useTinymce && (content || content === '')"
      class="mt-1 bg-white border rounded-md border-gray-300 shadow-sm"
      :class="{ 'ring ring-gray-200 ring-opacity-50': editorFocus }"
    >
      <QuillEditor
        :id="name"
        v-model:content="content"
        :name="name"
        theme="bubble"
        toolbar="essential"
        content-type="html"
        @text-change="emitTinymce"
        @blur="editorFocus = false"
        @focus="editorFocus = true"
      />
    </div>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";

export default {
  components: {
    QuillEditor,
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
      content: null,
      editorFocus: false,
      ready: false,
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
    modelValue(newValue) {
      this.content = newValue;
    },
  },
  mounted() {
    this.content = this.modelValue;
  },
  methods: {
    emit(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    emitCheckbox(event) {
      this.$emit("update:modelValue", event.target.checked);
    },
    emitTinymce() {
      this.$emit("update:modelValue", this.content);
    },
  },
};
</script>
