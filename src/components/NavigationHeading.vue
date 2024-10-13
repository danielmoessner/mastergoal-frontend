<template>
<li class="my-px">
    <span class="flex px-4 mt-6 mb-2 text-sm font-medium text-gray-400 uppercase" v-html="heading"></span>
</li>
</template>

<script>
import { defineProps } from 'vue';
defineProps({
    heading: {
        type: String,
        required: true
    }
});
</script>