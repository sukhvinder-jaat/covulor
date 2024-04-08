<template>
  <div class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-5 pt-[36px] w-full">
    <DashboardReport />
    <TotalFindings />
    <Slsa />
  </div>
  <!-- Second section of content -->
  <div class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-5 w-full">
    <SoftwareSupplyChain />
    <Owasp />
  </div>
</template>
<script setup lang="ts">
// Page Meta
definePageMeta({
  layout: "home",
});

</script>
