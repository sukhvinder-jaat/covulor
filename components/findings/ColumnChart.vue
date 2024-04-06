<template>
    <!-- Header section  -->
    <div class="bg-white px-3 py-6 lg:p-6 rounded-lg mt-2">
        <div class="flex items-center flex-wrap justify-between">
            <!-- Custom chart heading component -->
            <CommonChartHeading iconUrl="/assets/Icons/Item.svg" heading="Total Findings" />
            <div class="inline-block pt-2">
                <USelectMenu v-model="selected" :options="Repositories" placeholder="Repositories"
                    class="border border-1 border-iron pb-[6px] pt-1 px-2 sm:py-[6px] sm:px-3 rounded" />
            </div>
        </div>
        <div class="">
            <ClientOnly>
                <VueApexCharts type="bar" :height="height" :options="chartOptions" :series="series"></VueApexCharts>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
// Import VueApexCharts
import VueApexCharts from "vue3-apexcharts";
const Repositories = ['covulor', 'covulor1', 'covulor2', 'covulor3']

const selected = ref(Repositories[0])
const height = 300;


const chartOptions = {
    chart: {
        height: 280,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: '60%',
            barHeight: '20%',
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 0
    },
    grid: {
        show: false
    },
    xaxis: {

        categories: ['100', '120', '140', '80', '115', '130',
            '100', '120', '140', '80', '115', '130', '100', '120', '140', '80', '115', '130', '100', '120', '140', '80', '115', '130', '130'
        ],
        // tickPlacement: 'on'
    },
    yaxis: {
        show: false
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: "vertical",
            shadeIntensity: 0.25,
            gradientToColors: ["#8220FF", "#ffffff"],
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.5,
            stops: [30, 60, 50]
        },
    }
};
const series = [{
    data: [44, 55, 41, 67, 22, 43, 21, 33, 25, 31, 17, 65, 35, 44, 55, 41, 17, 22, 43, 21, 33, 25, 31, 57, 65]
}]
</script>
<style>
.vue-apexcharts {
    height: 280px;
    /* or any height you desire */
}
</style>