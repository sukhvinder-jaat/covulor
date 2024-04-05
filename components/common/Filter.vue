<template>
    <UPopover :popper="{ placement: 'bottom-start' }">
        <UButton color="white" trailing-icon="i-heroicons-funnel-16-solid" label="Filter" />

        <template #panel>
            <div
                class="min-h-[322px] w-[504px] ps-5 pr-4 pt-4 border border-thistle rounded-md shadow-[0px_5px_8px_0px_#00000033] relative">
                <p
                    class=" font-roboto font-bold text-xs leading-[14px] uppercase text-purple !tracking-[5%] w-full left-1 top-9">
                    SEARCH
                    FILTERS</p>
                <span class=" max-w-[460px] top-10 w-full h-[1px] block absolute bg-ghostWhiteLight"></span>
                <div class="">
                    <form>
                        <div class="mt-[38px]">
                            <input type="radio" id="age1" name="age" value="30">
                            <label for="age1"
                                class=" font-roboto font-medium text-sm leading-4 tracking-[5%] ps-[5px] text-lightToBlack">Default</label>
                        </div>
                        <div class=" mt-4 flex gap-6 items-center justify-between">
                            <div>
                                <input type="radio" id="age1" name="age" value="30">
                                <label for="age1"
                                    class="text-lightToBlack font-roboto font-medium text-sm leading-4 tracking-[5%] ps-[5px]">Repository
                                    ID</label>
                            </div>
                            <div class=" flex items-center gap-[21px]">
                                <CommonSelect :options="countries" />
                                <CommonSelect :options="countries" />
                            </div>
                        </div>
                        <div class=" mt-4 flex gap-6 items-center justify-between">
                            <div>
                                <input type="radio" id="age1" name="age" value="30">
                                <label for="age1"
                                    class=" font-roboto font-medium text-lightToBlack text-sm leading-4 tracking-[5%] ps-[5px]">Source
                                    Control</label>
                            </div>
                            <div class="max-w-[279px] w-full">
                                <CommonSelect :options="countries" />
                            </div>
                        </div>
                        <div class=" mt-4 flex gap-6 items-center justify-between">
                            <div>
                                <input type="radio" id="age1" name="age" value="30">
                                <label for="age1"
                                    class=" font-roboto font-medium text-lightToBlack text-sm leading-4 tracking-[5%] ps-[5px]">Tags</label>
                            </div>
                            <div class="max-w-[279px] w-full">
                                <CommonSelect :options="countries" />
                            </div>
                            <i-heroicons-x-mark-16-solid class=" text-black opacity-50 w-[15px] h-[14px]"/>
                        </div>
                    </form>
                </div>
            </div>
        </template>
    </UPopover>
</template>
<script setup lang="ts">
const countries = ['United States', 'Canada', 'Mexico']

</script>