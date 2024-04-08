<template>
    <!-- Main container -->
    <div class="bg-white px-3 py-6 lg:p-6 rounded-lg shadow-[0px_2px_20px_0px_#0000000D]">
        <!-- Header -->
        <div class="flex flex-wrap justify-between w-full gap-2 md:gap-5">
            <!-- Common custom chart heading -->
            <CommonChartHeading iconUrl="/assets/Icons/Item.svg" heading="Findings Report" />
            <!-- Select menu -->
            <div class="inline-block">
                <CommonDateRangePicker />
            </div>
        </div>
        <!-- Line graph -->
        <CommonReportLineGraph :LineChartList="dashboardLineChartList" :isLegendVisible="true" />
        <!-- Progress bar -->
        <CommonChartProgressBar />
    </div>
</template>

<script setup lang="ts">
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

const getFindingsChatData = async () => {
    await fetchRequestHandler(get, `${FINDINGS_CHAT}?start_date=06-06-2023&end_date=06-06-2024`);
}
onMounted(async () => {
    try {
        await getFindingsChatData();
    } catch (e: any) {
        // Display an error toast if an exception occurs
        toast.error(e.message, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
})

</script>


<style scoped>
/* Custom styling */
div.border_custom button {
    padding: 9px 8px 9px 8px !important;
    width: 83px;
}
</style>
