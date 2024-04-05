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
        <USelect :options="options" />
    </div>
</template>
