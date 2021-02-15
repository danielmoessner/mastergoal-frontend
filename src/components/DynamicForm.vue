<template>
  <v-form
    :validation-schema="schema.validation"
    :initial-values="schema.values"
    @submit="onSubmit"
  >
    <div>
      <span v-for="(error, index) in nonFieldErrors" :key="index">
        {{ error }}
      </span>
    </div>
    <div
      v-for="{ name, as, label, children, ...attrs } in schema.fields"
      :key="name"
    >
      <label :for="name">{{ label }}</label>
      <v-field :as="as" :id="name" :name="name" v-bind="attrs">
        <template v-if="children && children.length">
          <component
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </v-field>
      <error-message :name="name"></error-message>
    </div>

    <button>Submit</button>
  </v-form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  props: {
    schema: {
      type: Object,
      required: true,
    },
    nonFieldErrors: {
      type: Array,
      default: [],
      required: true,
    },
  },
  components: {
    // Components were renamed to avoid conflicts of HTML form element without a vue compiler
    VForm: Form,
    VField: Field,
    ErrorMessage: ErrorMessage,
  },
  emits: ["submit"],
  methods: {
    onSubmit(values) {
      this.$emit("submit", values);
    },
  },
};
</script>
