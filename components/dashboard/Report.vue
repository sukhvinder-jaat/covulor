<template>
    <!-- Main container -->
    <div class="bg-white px-3 py-6 lg:p-6 rounded-lg shadow-[0px_2px_20px_0px_#0000000D]">
        <!-- Header -->
        <div class="flex flex-wrap justify-between w-full gap-2 md:gap-5">
            <!-- Common custom chart heading -->
            <CommonChartHeading iconUrl="/assets/Icons/Item.svg" heading="Findings Report" />
            <!-- Select menu -->
            <div class="inline-block">
                <UPopover :popper="{ placement: 'bottom-start' }">
                    <UButton icon="i-heroicons-calendar-days-20-solid">
                        {{ format(selected.start, 'd MMM, yyy') }} - {{ format(selected.end, 'd MMM, yyy') }}
                    </UButton>
                    <template #panel="{ close }">
                        <div class="flex items-center sm:divide-x divide-gray-200 dark:divide-gray-800">
                            <CommonDatePicker v-model="selected" @close="close" />
                        </div>
                    </template>
                </UPopover>
            </div>
        </div>
        <!-- Line graph -->
        <CommonReportLineGraph :LineChartList="dashboardLineChartList" :isLegendVisible="true" />
        <!-- Progress bar -->
        <CommonChartProgressBar :chartProgressBar="dashboardChartProgressBar" />
    </div>
</template>

<script setup lang="ts">
const toast = useToast()
import { sub, format } from 'date-fns'

const selected = ref({ start: sub(new Date(), { days: 14 }), end: new Date() })

const getFindingsChatData = async () => {
    const formattedStartDate = format(selected.value.start, 'dd-MM-yyyy');
    const formattedEndDate = format(selected.value.end, 'dd-MM-yyyy');

    try {
        await fetchRequestHandler(get, `${FINDINGS_CHAT}?start_date=${formattedStartDate}&end_date=${formattedEndDate}`);
    } catch (e: any) {
        // Display an error toast if an exception occurs
        toast.add({
            title: 'hello world',
            timeout: 1,
        });
    }
}

onMounted(getFindingsChatData);

watch(selected, () => {
    getFindingsChatData();
});
</script>


<style scoped>
/* Custom styling */
div.border_custom button {
    padding: 9px 8px 9px 8px !important;
    width: 83px;
}
</style>
