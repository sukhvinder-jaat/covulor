<template>
  <!-- Container for the dropdown menu -->
  <div class="w-full h-full">
    <div
      class="mx-auto w-full max-w-md rounded-2xl bg-white h-[71vh] lg:h-[61vh] overflow-y-auto pb-5 scroll_bar_hidden pt-2 pe-0">
      <!-- Loop through dropdown items -->
      <div v-for="(item, index) in dropdownSidebarList" :key="index">
        <!-- Dropdown item button -->
        <NuxtLink @click="toggleDropdownHandler(index)" :class="indexValue === index || route.fullPath.includes(item.title.toLowerCase())
          ? 'bg-[rgba(96,_91,_255,_0.15)] text-purple'
          : 'text-dimGray'
          " :to="item.href" class="flex w-full justify-between items-center rounded-lg px-2 py-2 text-left mb-6">
          <!-- Dropdown item title -->
          <span class="font-medium text-base font-roboto flex gap-2 items-center">
            <!-- SVG icon -->
            <component :is="item.svg" class="w-6 h-6"
              :class="indexValue === index || route.fullPath.includes(item.title.toLowerCase()) ? 'active-svg' : ''" />
            {{ item.title }}
          </span>
          <!-- Chevron icon for dropdown toggle -->
          <span :class="item.content === undefined && 'hidden'">
            <UButton :padded="false" color="#6D6C6B" variant="link" icon="i-heroicons-chevron-up-20-solid"
              class="size-6 text-dimGray" :class="indexValue === index ? '' : 'rotate-180 transform'" />
          </span>
        </NuxtLink>
        <!-- Dropdown item content -->
        <div :class="{ 'max-h-[270px] opacity-100': indexValue === index }"
          class="grid text-base md:text-lg overflow-hidden max-h-0 transition-all opacity-0 duration-300 ease-in mt-2 font-sf-pro text-black-natural">
          <template v-for="content in item.content">
            <!-- Content of the dropdown item -->
            <a :href="content.link"
              class="font-normal font-roboto text-base text-dimGray hover:text-purple duration-300 cursor-pointer py-2 pl-4 mb-4 lg:inline-block hidden">
              {{ content.subLink
              }}<!-- Accessing the link from the array -->
            </a>
            <a @click="sidebarHandler" :href="content.link"
              class="font-normal font-roboto text-base text-dimGray hover:text-purple duration-300 cursor-pointer py-2 pl-4 mb-4 lg:hidden inline-block">
              {{ content.subLink
              }}<!-- Accessing the link from the array -->
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import necessary components and utilities
import { ref } from "vue";
import { dropdownSidebarList } from "../../utils/helper";
const route = useRoute()
// Define props for the component
defineProps<{
  sidebarHandler: () => void;
}>();

// Define reactive variable for tracking the active dropdown index
const indexValue = ref(-1);

// Function to toggle the dropdown content visibility
const toggleDropdownHandler = (index: number) => {
  indexValue.value = indexValue.value === index ? -1 : index;
};
</script>

<style>
/* Styling for the active SVG icon */
.active-svg path {
  fill: #8220ff;
}
</style>
