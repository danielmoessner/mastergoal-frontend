<template>
  <formulate-form v-model="formData" :name="name" @submit="submit">
    <formulate-input
      name="name"
      type="text"
      :label="label"
      validation="required"
    ></formulate-input>
    <formulate-input
      name="activate"
      type="hidden"
      :value="lastmonday"
    ></formulate-input>
    <formulate-input
      name="deadline"
      type="hidden"
      :value="nextmonday"
    ></formulate-input>
    <formulate-input type="submit" label="Add todo"></formulate-input>
  </formulate-form>
</template>

<script>
import FormulateSubmitMixin from "../mixins/FormulateSubmitMixin.js";

export default {
  mixins: [FormulateSubmitMixin],
  props: {
    weeks: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: "What else is there to be done this week?",
    },
    name: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      url: "/t/api/normal-todos/",
    };
  },
  computed: {
    lastmonday: function () {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() - ((date.getDay() + 6) % 7));
      date.setDate(date.getDate() + 7 * this.weeks);
      return date;
    },
    nextmonday: function () {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(this.lastmonday.getDate() + 7);
      return date;
    },
  },
  methods: {},
};
</script>
