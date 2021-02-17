<template>
  <v-form :initial-values="form.values" @submit="onSubmit">
    <div></div>
    <div class="grid grid-cols-1 gap-4">
      <div v-if="nonFieldErrors && nonFieldErrors.length">
        <p
          class="text-red-700 text-sm leading-tight mt-2"
          v-for="(error, index) in nonFieldErrors"
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
          :label="label"
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
        <p
          class="text-red-700 text-sm leading-tight ml-1.5 mt-1"
          v-if="errors[name]"
        >
          {{ errors[name][0] }}
        </p>
      </div>
      <div class="pt-1 flex items-center">
        <button
          class="px-7 py-1.5 bg-pink-700 text-white rounded-md ring-transparent ring-2 focus:outline-none focus:ring-pink-300 ring-opacity-50 border-pink-600 border-2"
          type="submit"
        >
          {{ form.submit }}
        </button>
        <p class="ml-4 text-green-700" v-if="showSuccess">
          {{ form.success }}
        </p>
      </div>
    </div>
  </v-form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  data() {
    return {
      showSuccess: false,
      nonFieldErrors: [],
      errors: {},
    };
  },
  props: {
    form: {
      type: Object,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  components: {
    // Components were renamed to avoid conflicts of HTML form element without a vue compiler
    VForm: Form,
    VField: Field,
    ErrorMessage: ErrorMessage,
  },
  methods: {
    onSubmit(values, { resetForm }) {
      resetForm();
      this.showSuccess = false;
      // this.errors = {};
      // this.nonFieldErrors = [];

      this.$store
        .dispatch(this.action, values)
        .then(() => {
          this.errors = {};
          this.nonFieldErrors = [];
          this.form.values = {};
          this.showSuccess = true;
        })
        .catch((errors) => {
          this.errors = errors;
          this.nonFieldErrors = errors.non_field_errors;
          this.form.values = values;
        });
    },
  },
};
</script>
