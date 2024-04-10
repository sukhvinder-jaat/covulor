<template>
  <!-- Container for the card -->
  <div id="report" class="bg-white px-3 py-6 lg:p-6 rounded-lg mt-2">
    <!-- Header section  -->
    <div class="flex items-center flex-wrap justify-between">
      <!-- Custom chart heading component -->
      <CommonChartHeading iconUrl="/assets/Icons/Item.svg" heading="Total Findings" />
      <div class="inline-block pt-2">
        <!-- <USelectMenu v-model="selected" :options="year" placeholder="Last Year"
          class="border border-1 border-iron pb-[6px] pt-1 px-2 sm:py-[6px] sm:px-3 rounded" /> -->
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
    <!-- Chart section -->
    <div class="mt-7 flex items-center justify-between flex-col xl:flex-row overflow- x-hidden">
      <div class="overflow-x-auto w-[300px] min-[500px]:w-[430px] sm:w-full">
        <div class="overflow-x-auto overflow-y-hidden w-[650px] min-[500px]:w-[650px] sm:w-full relative">
          <DashboardFunnelChart />
        </div>
      </div>
      <!-- Finding circular chart component -->
      <div class="w-full mt-6 lg:mt-0 lg:w-[345px] 2xl:w-[450px] flex justify-center">
        <DashboardCircularChart />
      </div>
    </div>
  </div>
  <!-- <CommonTable :rows="heading" :columns="data" /> -->
</template>

<script setup lang="ts">
const toast = useToast()

import { sub, format } from 'date-fns'

const selected = ref({ start: sub(new Date(), { days: 14 }), end: new Date() })

// const getTotalFindingsChatData = async () => {
//   const formattedStartDate = format(selected.value.start, 'dd-MM-yyyy');
//   const formattedEndDate = format(selected.value.end, 'dd-MM-yyyy');

//   try {
//     await fetchRequestHandler(get, `${TOTAL_FINDINGS}?start_date=${formattedStartDate}&end_date=${formattedEndDate}`);
//   } catch (e: any) {
//     // Display an error toast if an exception occurs
//     toast.add({
//       title: e.message,
//     });
//   }
// }

// onMounted(getTotalFindingsChatData);
// watch(selected, () => {
//   getTotalFindingsChatData();
// });
</script>
