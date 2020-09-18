<template>
  <input
      class="ml-auto cursor-pointer flex flex-row items-center px-6 py-2 tracking-wide font-bold rounded-lg text-gray-200 hover:bg-blue-900 bg-blue-800 shadow transition duration-100 ease-in-out focus:outline-none focus:shadow-outline"
      type="submit" v-bind:value="text" />
</template>

<script>
module.exports = {
  name: "SubmitButton",
  props: {
    text: {
      type: String,
      default: 'Submit'
    }
  }
}
</script>
