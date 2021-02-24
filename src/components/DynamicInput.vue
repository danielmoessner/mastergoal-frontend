<template>
  <div>
    <label class="text-gray-700" :for="name">
      {{ label }}
    </label>
    <input
      v-if="useInput"
      @input="emit"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :required="required"
      :id="name"
      :name="name"
      class="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
    />
    <input
      v-if="useCheckbox"
      @change="emitCheckbox"
      :type="type"
      :checked="modelValue"
      :id="name"
      :name="name"
      class="block rounded w-5 h-5 border-pink-300 text-pink-500 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-300 focus:ring-opacity-50 cursor-pointer"
    />
    <textarea
      v-if="useTextarea"
      @input="emit"
      :placeholder="placeholder"
      :value="modelValue"
      :required="required"
      :id="name"
      :name="name"
      class="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
    />
    <select
      v-if="useSelect"
      @change="emit"
      :required="required"
      :name="name"
      class="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
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
  </div>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String,
    },
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
      default: [],
    },
    required: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Boolean],
      required: "",
    },
  },
  emits: ["update:modelValue"],
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
    useInput() {
      return !this.useSelect && !this.useCheckbox && !this.useTextarea;
    },
  },
  methods: {
    emit(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    emitCheckbox(event) {
      this.$emit("update:modelValue", event.target.checked);
    },
  },
};
</script>
