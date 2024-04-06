<template>
    <div class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-5 pt-[36px] w-full">
        <FindingsReports />
        <FindingsColumnChart />
        <FindingsUploadScanModal />
        <div class="mt-[24px] flex gap-3 sm:gap-0 justify-between items-center">
            <div class="flex gap-3 sm:gap-[18px] items-center w-6/12">
                <CommonFilter />
                <div class="max-w-[387px] w-full">
                    <CommonSearch />
                </div>
            </div>
            <div class="flex items-center gap-2 sm:gap-5 pr-4">
                <UButton
                    class="font-inter font-semibold text-[13px] text-white bg-purple py-2 px-3 sm:px-[17px] sm:py-[10px] rounded-md border border-purple hover:bg-white hover:text-purple transition-all ease-in-out duration-300 leading-[15px]">
                    Download
                </UButton>
                <UButton
                    class="font-inter font-semibold text-[13px] !text-purple !bg-transparent uppercase !shadow-none hover:!bg-transparent flex items-center gap-2 !p-0 !border-0">
                    REFRESCH
                    <span class="hidden sm:block">
                        <img src="/assets/Icons/refresch.svg" alt="refresch" />
                    </span>
                </UButton>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
// Page Meta
definePageMeta({
    layout: "home",
});
</script>