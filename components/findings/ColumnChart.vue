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
    </div>
</template>

<script setup lang="ts">
const Repositories = ['covulor', 'covulor1', 'covulor2', 'covulor3']

const selected = ref(Repositories[0])
</script>