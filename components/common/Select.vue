<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

interface Option {
    label: string;
    value: string;
}

const props = defineProps<{
    options: any;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const country = ref(props.options ? props.options[0].value : null);
</script>

<template>
    <div class="w-full">
        <USelect :options="options" :modelValue="country" @update:modelValue="(value: string) => (country = value)" />
    </div>
</template>