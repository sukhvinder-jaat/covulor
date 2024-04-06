<script setup lang="ts">
import { defineProps, ref } from 'vue';

const countries = ['United States', 'Canada', 'Mexico'];

const props = defineProps({
    options: Array,
});
const country = ref(props.options ? props.options[0] : null);
</script>

<template>
    <div class=" w-full">
        <USelect  class="text-[#6E6893]" icon="i-material-symbols-light-arrow-drop-down-rounded"
            :options="options" />
    </div>
</template>
