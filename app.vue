<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Covulor",
  ogTitle: "Covulor",
  description: "Covulor by plexicus findings report and SLSA for Submit unauthorized change, Compromise source repo and Build from modified source and using  Software Supply Chain",
  ogDescription: "Covulor by plexicus findings report and SLSA for Submit unauthorized change, Compromise source repo and Build from modified source and using  Software Supply Chain",
  ogImage: "/assets/meta.png",
  twitterCard: "summary_large_image",
});
</script>
