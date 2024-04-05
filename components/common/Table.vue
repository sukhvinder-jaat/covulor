<template>
  <UTable :columns="columns" :rows="rows" />
</template>

<script setup lang="ts">
defineProps({
  columns: Array,
  rows: Array,
});
</script>
