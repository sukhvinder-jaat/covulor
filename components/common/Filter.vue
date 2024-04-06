<template>
    <div class="filter_icon ">
        <UPopover :popper="{ placement: 'bottom-start' }">
            <UButton color="white" icon="i-heroicons-funnel-16-solid" label="Filter" class="min-h-[39px]" />
            <template #panel>
                <div
                    class="min-h-[322px] w-full sm:w-[504px] ps-5 pr-4 pt-4 pb-5 border border-thistle rounded-md shadow-[0px_5px_8px_0px_#00000033] relative">
                    <p
                        class=" font-roboto font-bold text-xs leading-[14px] uppercase text-purple !tracking-[5%] w-full left-1 top-9">
                        SEARCH
                        FILTERS</p>
                    <span class=" max-w-[460px] top-10 w-full h-[1px] block absolute bg-ghostWhiteLight"></span>
                    <div>
                        <form>
                            <div class="mt-[38px] flex items-center">
                                <input type="radio" id="age1" name="age" value="30">
                                <label for="age1"
                                    class=" font-roboto font-medium text-sm leading-4 tracking-[5%] ps-[5px] text-lightToBlack cursor-pointer">Default</label>
                            </div>
                            <div class=" mt-4 sm:flex gap-6 items-center justify-between">
                                <div class=" w-6/12 flex items-center">
                                    <input type="radio" id="age2" name="age" value="30">
                                    <label for="age2"
                                        class="text-lightToBlack font-roboto font-medium text-sm leading-4 tracking-[5%] ps-[5px] cursor-pointer">Repository
                                        ID</label>
                                </div>
                                <div class="flex gap-5 items-center w-full mt-3 sm:mt-0">
                                    <div class=" flex items-center gap-[21px] w-full">
                                        <CommonSelect :options="countries" />
                                        <CommonSelect :options="countries" />
                                    </div>
                                    <Icon name="i-heroicons-x-mark-16-solid"
                                        class=" text-black opacity-50 w-[15px] h-[14px]  cursor-pointer" />
                                </div> cursor-pointer
                            </div>
                            <div class=" mt-4 sm:flex gap-6 items-center justify-between">
                                <div class=" w-6/12 flex items-center">
                                    <input type="radio" id="age3" name="age" value="30">
                                    <label for="age3"
                                        class=" font-roboto font-medium text-lightToBlack text-sm leading-4 tracking-[5%] ps-[5px] cursor-pointer">Source
                                        Control</label>
                                </div>
                                <div class="flex gap-5 items-center w-full mt-3 sm:mt-0">
                                    <div class="sm:max-w-[279px] w-full">
                                        <CommonSelect :options="countries" />
                                    </div>
                                    <Icon name="i-heroicons-x-mark-16-solid"
                                        class=" text-black opacity-50 w-[15px] h-[14px] cursor-pointer" />
                                </div>
                            </div>
                            <div class=" mt-4 sm:flex gap-6 items-center justify-between">
                                <div class=" w-6/12 flex items-center">
                                    <input type="radio" id="age4" name="age" value="30">
                                    <label for="age4"
                                        class=" font-roboto font-medium text-lightToBlack text-sm leading-4 tracking-[5%] ps-[5px] cursor-pointer">Tags</label>
                                </div>
                                <div class="flex gap-5 items-center w-full mt-3 sm:mt-0">
                                    <div class="sm:max-w-[279px] w-full">
                                        <CommonSelect :options="countries" />
                                    </div>
                                    <Icon name="i-heroicons-x-mark-16-solid"
                                        class=" text-black opacity-50 w-[15px] h-[14px] cursor-pointer" />
                                </div>
                            </div>
                        </form>
                        <p class=" font-inter font-medium text-sm leading-4 tracking-[5%] mt-4">+ Add</p>
                        <div class=" relative">
                            <span class=" h-[1px] absolute w-full bg-ghostWhiteLight top-[-11px]"></span>
                            <p class=" font-bold text-sm text-purple leading-4 mt-7">Clear filters</p>
                        </div>
                    </div>
                </div>
            </template>
        </UPopover>
    </div>
</template>
<script setup lang="ts">
const countries = ['United States', 'Canada', 'Mexico']
</script>
<style>
.filter_icon .i-heroicons-funnel-16-solid {
    color: #8220FF;
}
</style>