<template>
  <form @submit.prevent="handleSubmit">
    <div class="grid grid-cols-1 gap-4">
      <div v-if="nonFieldErrors && nonFieldErrors.length">
        <p
          v-for="(error, index) in nonFieldErrors"
          :key="index"
          class="text-red-700 text-sm leading-tight mt-2"
        >
          {{ error }}
        </p>
      </div>
      <div
        v-for="{ name, label, children, type, required, placeholder } in fields"
        :key="name"
        :class="{ hidden: type === 'hidden' }"
      >
        <DynamicInput
          v-model="data[name]"
          :label="label"
          :name="name"
          :type="type"
          :required="required"
          :children="children"
          :placeholder="placeholder"
        />
        <p
          v-if="errors[name]"
          class="text-red-700 text-sm leading-tight ml-1.5 mt-1"
        >
          {{ errors[name][0] }}
        </p>
      </div>
      <div class="pt-1 flex items-center">
        <Button is="button" type="submit">{{ submit }}</Button>
        <p v-if="showSuccess" class="ml-4 text-green-700">
          {{ success }}
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import DynamicInput from "./DynamicInput.vue";
import Button from "./Button/Primary.vue";

export default {
  components: {
    DynamicInput,
    Button,
  },
  props: {
    fields: {
      type: Array,
      required: true,
    },
    initial: {
      type: Object,
      default() {
        return {};
      },
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
  data() {
    return {
      showSuccess: false,
      nonFieldErrors: [],
      errors: {},
      data: {},
    };
  },
  watch: {
    initial: function () {
      this.data = Object.assign({}, this.initial);
    },
  },
  mounted() {
    this.data = Object.assign({}, this.initial);
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
};
</script>
