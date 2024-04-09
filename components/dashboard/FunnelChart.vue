<template>
  <!-- Funnel graph container -->
  <div class="relative max-[500px]:w-[650px] pt-[30px]">
    <!-- Client-only rendering for Vue funnel graph -->
    <client-only>
      <vue-funnel-graph :width="width" :height="height" :labels="labels" :values="values" :colors="colors"
        :display-percentage="true" :direction="direction" :gradient-direction="gradientDirection"
        :animated="true"></vue-funnel-graph>
    </client-only>

    <div v-for="(items, index) in findingChartData" :key="index" class="absolute h-full"
      :class="index === 0 ? 'left-0 top-5 ps-2' : index === 1 ? 'left-1/2 -translate-x-[65%] top-5 ' : ' right-[20px] top-5'">
      <div class="h-full relative after:absolute after:w-[2px] after:h-full after:bg-[#EDEDED] after:top-0 "
        :class="index === 0 ? 'after:left-[-8px]' : 'after:left-[-10px]'">
        <div class="flex items-center gap-[6px]">
          <span class="size-[13px] rounded-full"
            :class="index === 0 ? 'bg-lawnGreen' : index === 1 ? 'bg-lightGreen' : 'bg-purple'"></span>
          <p class="font-medium text-sm leading-[150%] text-lightGray font-plus-jakarta">
            {{ items.labels }}
          </p>
        </div>
        <p class="font-semibold text-2xl text-darkBrown font-plus-jakarta mt-2 leading-[150%]">
          {{ items.value }}
        </p>
      </div>
    </div>
    <!-- Percentage labels -->
    <p v-for="(items, index) in findingChartData" :key="index"
      class="text-darkGray font-plus-jakarta font-medium text-sm leading-[150%] absolute "
      :class="index === 0 ? 'top-[27%] left-[19%]' : index === 1 ? 'top-[38%] left-[50%]' : 'top-[43%] right-[20%]'">
      {{ items.percentage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import "vue3-funnel-graph-js/dist/style.css";
import { VueFunnelGraph } from "vue3-funnel-graph-js";
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { findingChartData, funnelChartData } from "~/utils/helper";

// Data for funnel graph
const labels = [
  "Total Findings",
  "Vulnerabilities Aggregated",
  "Vulnerabilities Prioritised",
];

const values = [[6000], [3000], [700]];
values[0][0] = funnelChartData.total_findings;
values[1][0] = funnelChartData.vulnerabilities_aggregated;
values[2][0] = funnelChartData.vulnerabilities_prioritized;

const colors = [
  ["#FF9A3B", "#13C90F", "#8221FF"],
  ["#A0BBFF", "#13C90F"],
  ["#A0F9FF", "#7795FF"],
];
const direction = "horizontal";
const gradientDirection = "horizontal";
const height = 300;

// Reactive variable for window width
const windowWidth = ref(window?.innerWidth);

// Function to update window width on resize
const updateWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
  }
};

// Function to calculate chart width based on window width
let width = 700;
const chartWidth = () => {
  if (windowWidth.value && windowWidth.value > 1500) {
    width = windowWidth.value - 800; // Adjust according to your layout
  } else if (windowWidth.value < 1024 && windowWidth.value > 640) {
    width = windowWidth.value - 100;
  }
};

// Event listeners for window resize
onMounted(() => {
  chartWidth()
  window.addEventListener('resize', updateWindowWidth);
});

// Cleanup on component unmount
onBeforeUnmount(() => {
  chartWidth()
  window.removeEventListener('resize', updateWindowWidth);
});
</script>