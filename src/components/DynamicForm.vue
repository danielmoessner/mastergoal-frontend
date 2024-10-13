<template>
  <form @submit.prevent="handleSubmit">
    <div class="grid grid-cols-1 gap-4">
      <div v-if="nonFieldErrors && nonFieldErrors.length">
        <p
          v-for="(error, index) in nonFieldErrors"
          :key="index"
          class="mt-2 text-sm leading-tight text-red-700"
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
          @update:model-value="showSuccess = false"
        />

        <p
          v-if="errors[name]"
          class="text-red-700 text-sm leading-tight ml-1.5 mt-1"
        >
          {{ errors[name][0] }}
        </p>
      </div>

      <div class="flex items-center pt-1">
        <Button is="button" type="submit">{{ submit }}</Button>

        <transition
          enter-active-class="transition duration-200 opacity-0"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
          leave-active-class="transition duration-150"
          tag="div"
        >
          <p v-if="showSuccess" class="ml-4 text-green-700">{{ success }}</p>
        </transition>
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
        return null;
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
          if (this.initial === null) {
            this.data = {};
            setTimeout(() => (this.showSuccess = false), 2000);
          }
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
