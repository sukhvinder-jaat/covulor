<template>
    <!-- Main container -->
    <div class="bg-white px-3 py-6 lg:p-6 rounded-lg shadow-[0px_2px_20px_0px_#0000000D]">
        <!-- Header -->
        <div class="flex flex-wrap justify-between w-full gap-2 md:gap-5">
            <!-- Common custom chart heading -->
            <CommonChartHeading iconUrl="/assets/Icons/Item.svg" heading="Findings Report" />
            <!-- Select menu -->
            <div class="inline-block">
                <USelectMenu v-model="selected" :options="title" placeholder="diary"
                    class="border_custom font-medium " />
            </div>
        </div>
        <!-- Line graph -->
        <FindingsReportLineGraph />
        <!-- Progress bar -->
        <CommonChartProgressBar />
    </div>
</template>
<script setup lang="ts">
// Data
const title = ['Diary', 'Diary ', ' Diary']
const selected = ref(title[0])
</script>

<style scoped>
/* Custom styling */
div.border_custom button {
    padding: 9px 8px 9px 8px !important;
    width: 83px;
}
</style>