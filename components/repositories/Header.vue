<template>
    <div>
        <div class=" flex justify-between items-center relative">
            <div class=" flex items-center gap-1 sm:gap-[10px]">
                <img src="/public/assets/Icons/repositories.svg" alt="repositories">
                <p class=" font-roboto font-bold text-xl sm:text-3xl sm:leading-[48px]">Repositories</p>
            </div>
            <div class=" flex items-center gap-2">
                <p class=" font-roboto text-base sm:text-xl sm:leading-[30px] font-normal text-darkSlateGray">Manage
                    Repositories</p>
                <div class=" relative">
                    <UPopover class="table_popup">
                        <div label="Open"
                            class="flex gap-x-2 pr-1 max-h-[25px] h-full max-w-[119px] rounded-[10px] items-center w-full">
                            <IconsPopupPlus />
                        </div>

                        <template #panel="{ close }">
                            <div class="relative">
                                <div class="absolute cursor-pointer z-10 top-[-3px] left-[-15px]" label="Close"
                                    @click="close">
                                <IconsPopupCross/>
                                </div>
                                <div
                                    class=" bg-white pt-[10px] ps-1 pr-[10px] pb-[10px]  min-w-[154px] rounded-md absolute left-[-154px] top-2">
                                    <ul class=" flex flex-col  items-start justify-star list-none">
                                        <li class="font-roboto text-black font-normal w-full px-2 py-[5px] text-sm hover:bg-[#F2F0F9] rounded transition-all duration-200 ease-in-out"
                                            v-for="(tagOption, i) in tagsOption" :key="i">
                                            {{ tagOption }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </template>
                    </UPopover>
                </div>
            </div>
            <span class="w-full bg-black opacity-10 h-[1px] absolute top-[65px]"></span>
        </div>
    </div>
</template>
<script setup lang="ts">
const tagsOption = ["Github", "Bitbucket", "GitLab"]
</script>