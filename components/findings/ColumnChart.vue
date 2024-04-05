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
        <div>
            <ClientOnly>
                <VueApexCharts type="bar" :options="chartOptions" :series="series"></VueApexCharts>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
// Import VueApexCharts
import VueApexCharts from "vue3-apexcharts";
const Repositories = ['covulor', 'covulor1', 'covulor2', 'covulor3']

const selected = ref(Repositories[0])



const chartOptions = {
    chart: {
        width: 400,
        height: 300,
        type: "bar",
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: '50%',
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2
    },

    grid: {
        row: {
            colors: ['#fff', '#f2f2f2']
        }
    },
    xaxis: {
        labels: {
            rotate: -45
        },
        categories: ['100', '120', '140', '80', '115', '130',
            '100', '120', '140', '80', '115', '130', '100', '120', '140', '80', '115', '130', '100', '120', '140', '80', '115', '130', '130'
        ],
        tickPlacement: 'on'
    },
    yaxis: {
        title: {
            text: 'Servings',
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
        },
    }
};
const series = [{
    name: 'Servings',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
}]
</script>