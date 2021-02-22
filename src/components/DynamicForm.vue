<template>
  <form @submit.prevent="handleSubmit">
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
        v-for="{ name, label, children, type, required, placeholder } in fields"
        :key="name"
        :class="{ hidden: type === 'hidden' }"
      >
        <dynamic-input
          :label="label"
          :name="name"
          :type="type"
          :required="required"
          :children="children"
          :placeholder="placeholder"
          v-model="data[name]"
        />
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
          {{ submit }}
        </button>
        <p class="ml-4 text-green-700" v-if="showSuccess">
          {{ success }}
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import DynamicInput from "./DynamicInput.vue";

export default {
  data() {
    return {
      showSuccess: false,
      nonFieldErrors: [],
      errors: {},
      data: {},
    };
  },
  props: {
    fields: {
      type: Array,
      required: true,
    },
    initial: {
      type: Object,
      default: {},
      required: false,
    },
    success: {
      type: String,
      required: true,
    },
    submit: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  components: {
    DynamicInput,
  },
  methods: {
    handleSubmit() {
      this.showSuccess = false;

      this.$store
        .dispatch(this.action, this.data)
        .then(() => {
          this.errors = {};
          this.nonFieldErrors = [];
          if (
            !Object.keys(this.data)
              .map((key) => this.initial[key] === this.data[key])
              .every((val) => val)
          )
            this.data = {};
          this.showSuccess = true;
        })
        .catch((errors) => {
          this.errors = errors;
          this.nonFieldErrors = errors.non_field_errors;
        });
    },
  },
  watch: {
    initial: function (newVal, oldVal) {
      console.log("hello");
      this.data = Object.assign({}, this.initial);
    },
  },
  mounted() {
    this.data = Object.assign({}, this.initial);
  },
};
</script>
