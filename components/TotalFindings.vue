<template>
  <!-- Container for the card -->
  <div id="report" class="bg-white px-3 py-6 lg:p-6 rounded-lg mt-2">
    <!-- Header section  -->
    <div class="flex items-center flex-wrap justify-between">
      <!-- Custom chart heading component -->
      <CommonChartHeading iconUrl="/assets/Icons/Item.svg" heading="Total Findings" />
      <div class="inline-block pt-2">
        <USelectMenu v-model="selected" :options="year" placeholder="Last Year"
          class="border border-1 border-iron pb-[6px] pt-1 px-2 sm:py-[6px] sm:px-3 rounded" />
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

import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

const year = ["2023", "2022", "2021", "2020"];
const selected = ref(year[0]);

const getTotalFindingsChatData = async () => {
  await fetchRequestHandler(get, `${TOTAL_FINDINGS}?start_date=06-06-2023&end_date=06-06-2024`);
}

onMounted(async () => {
  try {
    await getTotalFindingsChatData();
  } catch (e: any) {
    // Display an error toast if an exception occurs
    toast.error(e.message, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
})
</script>
