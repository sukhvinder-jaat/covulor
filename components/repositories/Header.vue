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

                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="13" cy="13" r="13" fill="#8220FF" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M20.1386 12.6339C20.1393 11.9742 19.645 11.4799 18.9853 11.4806L14.1475 11.4858L14.1527 6.64802C14.1534 5.98831 13.6592 5.49407 12.9995 5.49478C12.3398 5.49549 11.8444 5.9908 11.8437 6.65051L11.8385 11.4883L7.00068 11.4936C6.34098 11.4943 5.84566 11.9896 5.84495 12.6493C5.8446 12.9791 6.00923 13.2538 6.22889 13.4735C6.44855 13.6932 6.72325 13.8578 7.05311 13.8574L11.8909 13.8522L11.8857 18.6901C11.8854 19.0199 12.05 19.2946 12.2697 19.5143C12.4893 19.7339 12.764 19.8986 13.0939 19.8982C13.7536 19.8975 14.2489 19.4022 14.2496 18.7425L14.2548 13.9046L19.0927 13.8994C19.6425 13.7889 20.1378 13.2936 20.1386 12.6339Z"
                                    fill="white" />
                            </svg>

                        </div>

                        <template #panel="{ close }">
                            <div class="relative">
                                <svg class="absolute cursor-pointer z-10 top-[-3px] left-[-15px]" label="Close"
                                    @click="close" width="22" height="24" viewBox="0 0 22 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_6031_1531)">
                                        <circle cx="12" cy="12" r="10" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M15.2105 8.77421C14.915 8.4781 14.4718 8.4781 14.1763 8.77421L12.0095 10.9457L9.84268 8.77421C9.54721 8.4781 9.104 8.4781 8.80852 8.77421C8.51305 9.07032 8.51305 9.51449 8.80852 9.81061L10.9753 11.9821L8.80852 14.1536C8.51305 14.4497 8.51305 14.8939 8.80852 15.19C8.95626 15.3381 9.15324 15.3874 9.35022 15.3874C9.54721 15.3874 9.74419 15.3381 9.89193 15.19L12.0587 13.0185L14.2256 15.19C14.3733 15.3381 14.5703 15.3874 14.7673 15.3874C14.9643 15.3874 15.1612 15.3381 15.309 15.19C15.6044 14.8939 15.6044 14.4497 15.309 14.1536L13.1422 11.9821L15.309 9.81061C15.506 9.51449 15.506 9.07032 15.2105 8.77421Z"
                                            fill="black" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_6031_1531" x="0" y="0" width="24" height="24"
                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                result="effect1_dropShadow_6031_1531" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6031_1531"
                                                result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                <div class=" bg-white p-[10px]  min-w-[154px] rounded-md absolute left-[-154px] top-2">
                                    <ul class=" flex flex-col  items-start justify-star list-none">
                                        <li class="font-roboto text-black font-medium w-full px-2 py-[5px] text-sm hover:bg-[#F2F0F9] rounded transition-all duration-200 ease-in-out"
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