<template>
  <!-- Vue component template -->
  <div :class="{ '-left-full': !isSidebarVisible, 'left-0': isSidebarVisible }"
    class="bg-white w-full max-w-[250px] fixed lg:static z-[100] h-screen lg:h-auto lg:z-[0] duration-300">
    <div class="xl:pt-[71px] pt-[17px] md:pt-12 pl-[22px] pr-[23px] sticky top-[10px] pb-5">
      <!-- Logo -->

      <a href="/" class="mb-10 md:mb-[75px] inline-block max-w-[100px] sm:max-w-[150px] min-w-[90px] lg:max-w-[199px]">
        <img class="w-full" src="/assets/Icons/gray_logo.svg" alt="page-logo" />
      </a>
      <!-- Common Sidebar List Container Component -->
      <CommonSidebarListContainer :sidebarHandler="sidebarHandler" />
      <!-- Close Button -->
      <img @click="$emit('closeClicked')" class="w-5 absolute top-4 right-4 cursor-pointer lg:hidden z-10"
        src="/assets/Icons/cross.svg" alt="page-logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Define props using the defineProps function
defineProps<{
  isSidebarVisible: Boolean,
  sidebarHandler: () => void;
}>();
</script>
