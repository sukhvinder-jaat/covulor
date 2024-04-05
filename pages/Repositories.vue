<template>
    <div class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-5 pt-[36px] w-full relative">
        <span class=" w-full bg-black opacity-10 h-[1px] block absolute max-w-[1073px] top-[100px]"></span>

        <div class="">
            <div class=" flex items-center gap-[10px]">
                <img src="/assets/Icons/repositories.svg" alt="repositories">
                <p class=" font-roboto font-bold text-3xl leading-[48px]">Repositories</p>
            </div>
        </div>
        <div class="mt-16">
<CommonFilter/>
        </div>
    </div>
</template>
<script setup lang="ts">
const countries = ['United States', 'Canada', 'Mexico']

</script>
