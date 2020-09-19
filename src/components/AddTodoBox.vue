<template>
  <transition name="fade">
    <general-box v-bind:heading="heading">
      <span
        class="text-gray-100 block px-4 py-2 mb-4 bg-green-500 rounded-md block"
        v-if="responsetext"
        v-html="responsetext"
      ></span>
      <span
        class="text-gray-100 block px-4 py-2 mb-4 bg-red-500 rounded-md block"
        v-if="errortext"
        v-html="errortext"
      ></span>
      <rest-form
        v-bind:url="url"
        v-bind:submitUrl="submitUrl"
        method="POST"
        v-on:response="created"
        v-on:error="error"
      ></rest-form>
    </general-box>
  </transition>
</template>

<script>
import GeneralBox from "@/components/GeneralBox.vue";
import RestForm from "@/components/RestForm.vue";

export default {
  name: "AddTodoBox",
  components: { GeneralBox, RestForm },
  data: function () {
    return {
      responsetext: "",
      errortext: "",
    };
  },
  props: {
    heading: {
      required: true,
      type: String,
    },
    url: {
      required: true,
      type: String,
    },
    submitUrl: {
      required: true,
      type: String,
    },
  },
  methods: {
    created: function (data) {
      this.responsetext = "Todo '" + data.name + "' added.";
      this.$emit("response", data);
    },
    error: function (data) {
      this.errortext = "Error";
      for (const [key, value] of Object.entries(data)) {
        this.errortext += "<br>" + key + ": " + value;
      }
    },
  },
};
</script>
