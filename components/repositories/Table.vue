<template>
  <div class="mt-[35px]">
    <CommonTable :header="heading">
      <tbody>
        <RepositoriesRow v-for="(content, i) in RepositoriesList.data" :key="i" :content="content" />
      </tbody>
    </CommonTable>
  </div>
</template>

<script setup lang="ts">

const heading = [
  "REPOSITORY ID",
  "SOURCE CONTROL",
  "REPO",
  "PRIORITY",
  "TAGS",
  "BRANCH",
  "",
];

const props = defineProps({
  RepositoriesList: {
    type: Object,
    required: true,
  },
});
</script>