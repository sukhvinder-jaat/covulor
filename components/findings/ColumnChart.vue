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
        <div class="overflow-auto">
            <div class="sm:w-auto overflow-auto w-[700px]">
                <ClientOnly>
                    <VueApexCharts type="bar" :height="height" :options="chartOptions" :series="series"></VueApexCharts>
                </ClientOnly>
            </div>
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
    tooltip: {
        enabled: true,
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
            shade: 'light',
            type: "vertical",
            shadeIntensity: 0.2,
            gradientToColors: ["#7164F0"],
            inverseColors: true,
            opacityFrom: 0.70,
            opacityTo: 0.02,
            stops: [60, 100, 0]
        },
    }
};
const series = [{
    data: ['plexilus', 55, 41, 67, 22, 43, 21, 33, 25, 31, 17, 65, 35, 44, 55, 41, 17, 22, 43, 21, 33, 25, 31, 57, 65]
}]
</script>
<style>
.vue-apexcharts {
    height: 280px;
    /* or any height you desire */
}

.apexcharts-series path {
    position: relative;
}

.apexcharts-series path::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 22px;
    background-color: #8220FF;
    border-radius: 50%;
}

.apexcharts-tooltip {
    background: #8220FF !important;
    border-radius: 8px !important;
    border: 0 !important;
    transform: translate(-53px, -16px) !important;
    /* color: #fff !important; */
}

.apexcharts-toolbar,
.apexcharts-tooltip-title {
    display: none !important;
}
</style>