<template>
  <div class="w-full">
    <USelect
      color="white"
      variant="outline"
      :options="option"
      v-model="selectedRepository"
    />
    <span v-if="uploadError" class="text-red-500 text-sm leading-none">{{
      getErrorMessage
    }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const selectedRepository = ref("");
const uploadError = ref(false);
const getErrorMessage = computed(() =>
  selectedRepository.value === "" ? "Select a repo" : ""
);
defineProps({
  option: Array,
});
</script>
