<template>
    <div class="mt-16 sm:flex gap-3 sm:gap-0 justify-between items-center">
        <div class="flex gap-3 sm:gap-[18px] items-center sm:w-6/12">
            <CommonFilter />
            <div class="sm:max-w-[387px] w-full">
                <CommonSearch />
            </div>
        </div>
        <div class="flex items-center gap-2 sm:gap-5 pr-4 sm:mt-0 mt-2 justify-end">
            <UButton
                class="font-inter font-semibold text-[13px] text-white bg-purple py-2 px-3 sm:px-[17px] sm:py-[10px] rounded-md border border-purple hover:bg-white hover:text-purple transition-all ease-in-out duration-300 leading-[15px]">
                Download
            </UButton>
            <UButton @click="handleRefresh" :disabled="loading"
                class="font-inter font-semibold text-[13px] !text-purple !bg-transparent uppercase !shadow-none hover:!bg-transparent flex items-center gap-2 !p-0 !border-0">
                REFRESH
                <span class="hidden sm:block">
                    <img src="/assets/Icons/refresch.svg" alt="refresch" />
                </span>
            </UButton>
        </div>
    </div>
</template>
<script setup lang="ts">
const loading = ref(false);

// Handle refresh button click
const handleRefresh = () => {
    loading.value = true; // Update reactive variable
    console.log("loading", loading.value)
    // Simulate loading completion after 3 seconds
    setTimeout(() => {
        loading.value = false;
        console.log("loading:--", loading.value)
    }, 3000);
    console.log("loading:--", loading.value)
};

</script>