<template class=" overflow-hidden" >
    <div class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-3 sm:px-5 pt-[36px] w-full ">
        <div class=" flex justify-between items-center relative">
            <div class=" flex items-center gap-1 sm:gap-[10px]">
                <img src="/assets/Icons/repositories.svg" alt="repositories">
                <p class=" font-roboto font-bold text-xl sm:text-3xl sm:leading-[48px]">Repositories</p>
            </div>
            <div class=" flex items-center gap-2">
                <p class=" font-roboto text-base sm:text-xl sm:leading-[30px] font-normal text-darkSlateGray">Manage
                    Repositories</p>
                <div class="">
                    <UPopover class="relative z-10">
                        <UButton icon="i-heroicons-plus-small-20-solid" class=" text-white rounded-[50%] w-[26px] h-[26px] flex items-center justify-center" />
                        <template #panel="{ close }" class=" overflow-visible">
                            <div class=" p-8">
                                <div>
                                    <UButton
                                        class="p-0 rounded-[50%] shadow-cross-popp absolute overflow-visible top-[-20px] right-0 z-[100]"
                                        @click="close" icon="i-heroicons-x-circle-solid" />
                                </div>
                                ;lkjhgckl;
                            </div>
                        </template>
                    </UPopover>
                </div>
            </div>
            <span class="w-full bg-black opacity-10 h-[1px] absolute top-[65px]"></span>

        </div>

        <div class="mt-16 flex gap-3 sm:gap-0 justify-between items-center">
            <div class=" flex gap-3 sm:gap-[18px] items-center w-6/12">
                <CommonFilter />
                <div class="max-w-[387px] w-full">
                    <CommonSearch />
                </div>
            </div>
            <div class=" flex items-center gap-2 sm:gap-5">
                <button
                    class="font-inter font-semibold text-[13px] text-white bg-purple py-2 px-3 sm:px-[17px] sm:py-[10px] rounded-md border border-purple hover:bg-white hover:text-purple transition-all ease-in-out duration-300 leading-[15px]">Download</button>
                <button
                    class="font-inter font-semibold text-[13px] text-purple uppercase flex items-center gap-2">REFRESCH
                    <span class=" hidden sm:block">
                        <img src="/assets/Icons/refresch.svg" alt="refresch">
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const countries = ['United States', 'Canada', 'Mexico']
// Page Meta
definePageMeta({
    layout: "home",
});
</script>
<style setup>
#headlessui-popover-panel-ndcv2Y3vSTA_23{
overflow: visible !important;
}
</style>