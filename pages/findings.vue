<template>
    <div class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-5 pt-[36px] w-full">
        <FindingsReports />
        <FindingsColumnChart />
        <FindingsUploadScanModal />
        <CommonTableDataControlBar />
        <FindingsConfidenceTable />
    </div>
</template>
<script setup lang="ts">
// Page Meta
definePageMeta({
    layout: "home",
});
</script>
