<template>
  <v-form
    :validation-schema="form.validation"
    :initial-values="form.values"
    @submit="onSubmit"
  >
    <div></div>
    <div class="grid grid-cols-1 gap-4">
      <div v-if="form.nonFieldErrors.length">
        <p
          class="text-red-700 text-sm leading-tight mt-2"
          v-for="(error, index) in form.nonFieldErrors"
          :key="index"
        >
          {{ error }}
        </p>
      </div>
      <div
        v-for="{ name, as, label, children, ...attrs } in form.fields"
        :key="name"
      >
        <label class="text-gray-700" v-if="label" :for="name">{{
          label
        }}</label>
        <v-field
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
          :as="as"
          :id="name"
          :name="name"
          v-bind="attrs"
        >
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
        <p class="text-red-700 text-sm leading-tight" v-if="form.errors[name]">
          {{ form.errors[name][0] }}
        </p>
      </div>
      <div class="pt-1 flex items-center">
        <button
          class="px-7 py-1.5 bg-pink-700 text-white rounded-md ring-transparent ring-2 focus:outline-none focus:ring-pink-300 ring-opacity-50 border-pink-600 border-2"
          type="submit"
        >
          {{ form.submit }}
        </button>
        <p class="ml-4 text-green-700" v-if="form.success">
          {{ form.success }}
        </p>
      </div>
    </div>
  </v-form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  props: {
    form: {
      type: Object,
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
    onSubmit(values, { resetForm }) {
      this.$emit("submit", values);
      resetForm();
      this.form.errors = {};
      this.form.nonFieldErrors = [];
      this.form.success = "";
    },
  },
};
</script>
