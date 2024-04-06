<template class=" overflow-hidden">
    <div class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-3 sm:px-5 pt-[36px] w-full ">
       <RepositoriesHeader/>
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
                    <span class="hidden sm:block">
                        <img src="/assets/Icons/refresch.svg" alt="refresch">
                    </span>
                </button>
            </div>
        </div>
        <RepositoriesTable />
    </div>
</template>
<script setup lang="ts">
const countries = ['United States', 'Canada', 'Mexico']
// Page Meta
definePageMeta({
    layout: "home",
});
const tagsOption = ["Github", "Bitbucket", "GitLab"]
</script>
<style setup>
#headlessui-popover-panel-ndcv2Y3vSTA_23 {
    overflow: visible !important;
}
</style>