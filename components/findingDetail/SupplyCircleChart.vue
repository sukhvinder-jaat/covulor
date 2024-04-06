<template>
  <!-- Vue component template -->
  <div
    class="flex mt-8 flex-wrap w-full 2xl:gap-0 bg-white justify-evenly lg:justify-start xl:justify-between 2xl:justify-start p-6 rounded-lg shadow-[0px_2px_20px_0px_#0000000D] finding_detail_chart"
  >
    <div
      v-for="(dataItem, index) in findingSupplyChainChart"
      :key="index"
      class="chart w-[13%] min-w-[135px] flex flex-col justify-center"
    >
      <!-- Your chart content here -->
      <h3
        class="text-center chart_label font-bold text-base text-comet h-[65px] flex items-center justify-center max-w-[171px] mx-auto mb-[-10px] font-manrope"
      >
        {{ dataItem.title }}
      </h3>
      <ClientOnly>
        <VueApexCharts
          type="radialBar"
          :options="chartOptions(dataItem.color)"
          :series="[dataItem.value]"
          :width="120"
          :height="170"
        ></VueApexCharts>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

const options = {
  chart: {
    width: 140,
    height: 180,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "45%",
        color: "#E6E6E6",
      },
      dataLabels: {
        show: false,
        name: {
          show: false,
        },
        value: {
          color: "#5D5B73",
          fontSize: "15px",
          fontWeight: "700",
          offsetY: 5,
          show: true,
        },
      },
    },
  },
};

const chartOptions = (color: string) => {
  return {
    ...options,
    colors: [color],
  };
};
</script>

<style>
/* Vue component scoped styles */
.finding_detail_chart .vue-apexcharts {
  display: flex !important;
  justify-content: center !important;
  max-height: 150px !important;
}
.finding_detail_chart .chart:last-child {
  width: 189px;
}
</style>
