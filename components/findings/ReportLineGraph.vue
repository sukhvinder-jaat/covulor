<template>
  <div class="bg-white relative report_chart sm:ps-8 ps-4 z-0">

    <div class="relative z-10">
      <ClientOnly>
        <VueApexCharts width="100%" height="300" type="line" :options="chartOptions" :series="series">
        </VueApexCharts>
      </ClientOnly>
    </div>
  </div>
</template>
<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts';
import { findingsLineChartList } from "../../utils/helper";

const chartData = findingsLineChartList[0] || {};
const chartOptions = {
  chart: {
    height: 350,
    id: "vuechart-example",
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
    marker: {
      fillColors: ["#FF993A", "#8425FF"],
    },
  },
  stroke: {
    width: [1, 6],
    curve: "smooth",
    dashArray: [8, 0],
    colors: ["#FF993A", "#8425FF"],
    background: ["#FF993A", "#8425FF"],
  },
  title: {
    align: "left",
  },
  markers: {
    size: 0,
    colors: ["#FF993A", "#8425FF"],
    hover: {
      sizeOffset: 6,
    },
  },
  xaxis: {
    categories: chartData.categories || [],
  },
  yaxis: {
    min: chartData.optionsData?.min || 0,
    max: chartData.optionsData?.max || 10000,
    tickAmount: 5,
    labels: {
      formatter: function (value: any) {
        if (value >= 1000) {
          return value / 1000 + "k";
        }
        return value;
      },
    },
  },
  legend: {
    show: false
  },
  tooltip: {
    marker: {
      fillColors: [["#00000030"]],
    },
    y: [
      {
        title: {
          formatter: function (val: any) {
            return val + " (mins)";
          },
        },
      },
      {
        title: {
          formatter: function (val: any) {
            return val + " per session";
          },
        },
      },
    ],
  },
  grid: {
    borderColor: "#f1f1f1",
  },
  marker: {
    fillColors: ["#FF993A", "#8425FF"],
  },
};
const series: any[] = chartData.series || [];
</script>