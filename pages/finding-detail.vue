<template>
  <div class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-5 pt-[36px] w-full">
    <FindingDetailPhpCard
      v-for="(detail, index) in commonFindingDetails"
      :key="index"
      v-bind="detail"
    />
    <FindingDetailAppPlugin />
    <FindingDetailDataImporter />
    <FindingDetailSlsa />
    <FindingDetailSoftwareChain />
    <FindingDetailOwsapTop />
  </div>
</template>
<script setup lang="ts">
// Page Meta
definePageMeta({
  layout: "home",
});
</script>
